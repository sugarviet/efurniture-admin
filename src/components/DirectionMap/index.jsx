import MapBox, { Marker, Layer, Source } from "react-map-gl";
import { COORDINATES } from "../../constants/enums";
import PropTypes from "prop-types";
import MapMarker from "../MapMarker";
import { classNames } from "../../utils/classNames";
import { useEffect, useState } from "react";
import DirectionLayer from "../DirectionLayer";

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
const STYLE_URL = "mapbox://styles/nobita89/clrn549cu004j01o3h8f38nmr";

const convertMileToKiloMile = (value) => {
  return (value / 1000).toFixed(2) + " km";
};

function DirectionMap({ locations, className }) {
  console.log(locations)
  const [store, setStore] = useState(STORE_LOCATIONS[0]);
  const [directions, setDirections] = useState([]);
  const storeAddress = `${store.street} ${store.city} ${store.province}`;

  useEffect(()=>{
    if(!locations.length) setDirections([]);
   
  }, [locations])

  console.log('direction', directions)

 
  return (
    <div className={classNames(className, "relative")}>
      <ul className="bg-transparent absolute right-0 top-0 z-50">
        {directions.map((direction, index) => {
          const { address, distance } = direction;
          return (
            <li className="bg-white shadow-xl mb-2 p-2 flex w-96" key={index}>
              <span className="flex-1 line-clamp-1 text-gray-500 mr-2">
                {address}
              </span>
              <span className="text-gray-500">
                {convertMileToKiloMile(distance)}
              </span>
            </li>
          );
        })}
      </ul>
      <MapBox
        mapboxAccessToken={ACCESS_TOKEN}
        initialViewState={{
          longitude: COORDINATES.get("TP HCM").longitude,
          latitude: COORDINATES.get("TP HCM").latitude,
          zoom: 10,
        }}
        mapStyle={STYLE_URL}
      >
        {locations.map((location, index) => {
          return (
            <DirectionLayer
              onDirection={(data) => {
                console.log('direction', data);
                const directionsClone = [...directions];

              
                directionsClone.push(data);

                const sortedData = directionsClone.filter((item) =>
                  [...locations].some((loc) => loc === item.address)
                );

                const uniqueData = [
                  ...new Map(
                    sortedData.map((item) => [item["address"], item])
                  ).values(),
                ];

                console.log(uniqueData)
                setDirections(uniqueData);
              }}
              key={index}
              address={location}
            />
          );
        })}
        {locations.map((location, index) => {
          return <MapMarker key={index} address={location} />;
        })}
        <Marker
          color="black"
          latitude={store.latitude}
          longitude={store.longitude}
        />
      </MapBox>
    </div>
  );
}

export default DirectionMap;

DirectionMap.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string),
};

DirectionMap.defaultProps = {
  locations: [],
};
