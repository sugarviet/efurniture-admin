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
  
  return (
    <section className="w-full h-[40rem]">
      <div className="w-full h-full bg-white rounded-md p-4 flex flex-col gap-3">
        <span className="text-2xl font-bold">Total orders by district</span>
        <MapBox locations={data} />

      </div>
    </section>
  );
}

LocationMapBox.propTypes = {
  data: PropTypes.array,
};

export default withFetchData(LocationMapBox, get_all_district);
