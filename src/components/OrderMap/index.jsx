import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

const ACCESS_TOKEN =
  "pk.eyJ1Ijoibm9iaXRhODkiLCJhIjoiY2xyajRxMGVnMDVuajJrcW41aGFtYzh5YSJ9.1A258o2oKsYxbYY8Qfx2yQ";
const STYLE_URL = "mapbox://styles/nobita89/clrn549cu004j01o3h8f38nmr";

const OrderMap = () => {
  const startCoordinates = {
    longitude: 106.7017555,
    latitude: 10.7758439,
  };

  const endCoordinates = {
    longitude: 106.7017555,
    latitude: 10.870154804604418,
  };

  // Initialize map
  mapboxgl.accessToken = ACCESS_TOKEN;
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: STYLE_URL,
      center: [startCoordinates.longitude, startCoordinates.latitude],
      zoom: 10,
    });

    // Add start and end markers
    new mapboxgl.Marker({ color: "green" })
      .setLngLat([startCoordinates.longitude, startCoordinates.latitude])
      .addTo(map.current);

    new mapboxgl.Marker({ color: "red" })
      .setLngLat([endCoordinates.longitude, endCoordinates.latitude])
      .addTo(map.current);

    // Add navigation control
    const directions = new MapboxDirections({
      accessToken: ACCESS_TOKEN,
      unit: "metric", // Use metric units
      profile: "mapbox/cycling", // Change profile to cycling
      controls: {
        inputs: false, // Disable inputs
        instructions: false, // Disable instructions
      },
    });

    // Add directions control to the map
    map.current.addControl(directions, "top-left");

    // Set start and end points
    // directions.setOrigin([startCoordinates.longitude, startCoordinates.latitude]);
    // directions.setDestination([endCoordinates.longitude, endCoordinates.latitude]);

    return () => map.current.remove();
  }, []);

  return (
    <div className="h-96 w-full" ref={mapContainer}></div>
  );
};

export default OrderMap;
