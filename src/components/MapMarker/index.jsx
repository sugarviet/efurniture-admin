import { Marker } from "react-map-gl";
import { get_geo_code_api } from "../../api/vietMapApi";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetcher = async (url, params) => {
  const data = await axios(url, { params: params }).then(
    (response) => response.data
  );

  return data;
};

function MapMarker({ address }) {
  const { data, isLoading } = useQuery([get_geo_code_api(address)], () =>
    fetcher(get_geo_code_api(address))
  );
  if (isLoading) return null;

  const { geometry } = data.data.features[0];
  const { coordinates } = geometry;

  return (
    <Marker
      scale={0.75}
      color="gray"
      latitude={coordinates[1]}
      longitude={coordinates[0]}
    />
  );
}

export default MapMarker;
