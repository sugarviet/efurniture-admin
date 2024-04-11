import { get_all_district } from "../../api/districtApi";
import MapBox from "../Map";
import { withFetchData } from "@hocs/withFetchData";
import PropTypes from "prop-types";

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

function LocationMapBox({data}) {
  console.log('disctrict', data);
  return (
    <section className="w-full h-96">
      <MapBox locations={MOST_PURCHASED_LOCATIONS} />
    </section>
  );
}

LocationMapBox.propTypes = {
  data: PropTypes.array,
};

export default withFetchData(LocationMapBox, get_all_district);
