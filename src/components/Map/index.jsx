import Map, { Marker } from "react-map-gl";
import { COORDINATES } from "../../constants/enums";
import PropTypes from "prop-types";

const ACCESS_TOKEN =
  "pk.eyJ1Ijoibm9iaXRhODkiLCJhIjoiY2xyajRxMGVnMDVuajJrcW41aGFtYzh5YSJ9.1A258o2oKsYxbYY8Qfx2yQ";
const STYLE_URL = "mapbox://styles/nobita89/clrn549cu004j01o3h8f38nmr";

function MapBox({ locations }) {
  return (
    <Map
      mapboxAccessToken={ACCESS_TOKEN}
      initialViewState={{
        longitude: COORDINATES.get("TP HCM").longitude,
        latitude: COORDINATES.get("TP HCM").latitude,
        zoom: 10,
      }}
      mapStyle={STYLE_URL}
      style={{ width: "100%", height: "100%" }}
    >
      {locations.map((location) => {
        const { district, volume } = location;
        const { latitude, longitude } = COORDINATES.get(district);
        return (
          <Marker key={district} latitude={latitude} longitude={longitude}>
            <section className="flex flex-col items-center">
              <div className="relative w-fit flex items-center justify-center aspect-square p-2 rounded-full bg-black">
                <span className="font-semibold text-center text-white">
                  {volume}
                </span>
                <div className="rounded-full absolute -right-2 -left-2 -top-2 -bottom-2 bg-black opacity-20 -z-10"></div>
              </div>
              <span className="font-bold">{district}</span>
            </section>
          </Marker>
        );
      })}
    </Map>
  );
}

export default MapBox;

MapBox.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.object),
};

MapBox.defaultProps = {
  locations: [],
};
