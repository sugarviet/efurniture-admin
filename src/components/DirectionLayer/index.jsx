import { useQuery } from "@tanstack/react-query";
import { Layer, Source } from "react-map-gl";
import { get_geo_code_api } from "../../api/vietMapApi";
import axios from "axios";
import { message } from "antd";
import { useEffect } from "react";

const STORE_LOCATIONS = [
  {
    id: "1",
    name: "Trường Đại học FPT TP.HCM",
    street: "Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ",
    city: "Thành phố Thủ Đức",
    province: "Thành phố Hồ Chí Minh",
    longitude: 106.80988299437283,
    latitude: 10.841243500137622,
  },
];

const ACCESS_TOKEN =
  "pk.eyJ1Ijoibm9iaXRhODkiLCJhIjoiY2xyajRxMGVnMDVuajJrcW41aGFtYzh5YSJ9.1A258o2oKsYxbYY8Qfx2yQ";

const fetcher = async (url, params) => {
  const data = await axios(url, { params: params })
    .then((response) => response.data)
    .catch((error) => {
      message.error("Can't not founded location");
    });

  return data;
};

const MapLayer = ({ start, end }) => {
  const { data, isLoading, error } = useQuery(["direction-map"], () =>
    fetcher(
      `https://api.mapbox.com/directions/v5/mapbox/cycling/${start.longitude},${start.latitude};${end.longitude},${end.latitude}?geometries=geojson&access_token=${ACCESS_TOKEN}`
    )
  );

  if (isLoading || error) return;

  const route = data.routes[0].geometry.coordinates;

  const geojson = {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: route,
    },
  };

  const layer = {
    id: "route",
    type: "line",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#3887be",
      "line-width": 5,
      "line-opacity": 0.75,
    },
  };

  return (
    <Source type="geojson" data={geojson}>
      <Layer {...layer} />
    </Source>
  );
};

function DirectionLayer({ address, onDirection }) {
  const { data, isLoading } = useQuery([get_geo_code_api(address)], () =>
    fetcher(get_geo_code_api(address))
  );

  useEffect(() => {
    if (isLoading) return;

    const { distance } = data.data.features[0].properties;

    onDirection({ address, distance });
  }, [data, isLoading, address]);

  if (isLoading) return null;

  const start = {
    longitude: STORE_LOCATIONS[0].longitude,
    latitude: STORE_LOCATIONS[0].latitude,
  };
  const end = {
    longitude: data.data.features[0].geometry.coordinates[0],
    latitude: data.data.features[0].geometry.coordinates[1],
  };

  return <MapLayer start={start} end={end} />;
}

export default DirectionLayer;
