import MapBox from "../Map";

const MOST_PURCHASED_LOCATIONS = [
  {
    district: "Quận 12",
    volume: 509,
  },
  {
    district: "Quận 1",
    volume: 2706,
  },
];

function LocationMapBox() {
  return (
    <section className="w-full h-96">
      <MapBox locations={MOST_PURCHASED_LOCATIONS} />
    </section>
  );
}

export default LocationMapBox;
