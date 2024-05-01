import Map, { Marker, Layer, Source } from "react-map-gl";
import { COORDINATES } from "../../constants/enums";
import PropTypes from "prop-types";
import MapMarker from "../MapMarker";
import { classNames } from "../../utils/classNames";
import { useState } from "react";
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

function DirectionMap({ locations, className }) {
  const [store, setStore] = useState(STORE_LOCATIONS[0]);
  const storeAddress = `${store.street} ${store.city} ${store.province}`;

  return (
    <div className={classNames(className)}>
      <Map
        mapboxAccessToken={ACCESS_TOKEN}
        initialViewState={{
          longitude: COORDINATES.get("TP HCM").longitude,
          latitude: COORDINATES.get("TP HCM").latitude,
          zoom: 10,
        }}
        mapStyle={STYLE_URL}
      >
        {locations.map((location, index) => {
          return <DirectionLayer key={index} address={location} />;
        })}
        {locations.map((location, index) => {
          return <MapMarker key={index} address={location} />;
        })}
        <Marker
          color="black"
          latitude={store.latitude}
          longitude={store.longitude}
        />
      </Map>
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
