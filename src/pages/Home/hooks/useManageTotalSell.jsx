import dayjs from "dayjs";
import { useEffect } from "react";
import { usePost } from "@hooks/api-hooks";
import { get_revenue_by_range_date } from "@api/revenueApi";

const formatData = (data) => {
  return data?.map((item) => ({
    date: new Date(item.date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
    }),
    profit: item.profit,
  }));
};

const generateDateRange = () => {
  const options = [];
  const today = dayjs();

  for (let i = 0; i < 12; i++) {
    const startDate = today.clone().startOf("month").subtract(i, "month");
    const endDate = today.clone().endOf("month").subtract(i, "month");
    const label =
      startDate.format("MMM DD") + " - " + endDate.format("DD, YYYY");
    const value = {
      start: startDate.format("YYYY-MM-DD"),
      end: endDate.format("YYYY-MM-DD"),
    };
    options.push({ label, value });
  }

  return options;
};
const getStartDateEndDate = (values) => {
  const getDate = values.split(",");

  return {
    startDay: getDate[0],
    endDay: getDate[1],
  };
};
export default function useManageTotalSell() {
  const options = generateDateRange();
  const { mutate: getRevenue, data: listRevenue } = usePost(
    get_revenue_by_range_date()
  );
  const formattedRevenueData = formatData(listRevenue?.data);

  const selectOptionsDateRange = options.map((option) => ({
    label: option.label,
    value: `${option.value.start},${option.value.end}`,
  }));

  const handleChangeRangeDate = (values) => {
    const { startDay, endDay } = getStartDateEndDate(values);
    getRevenue({
      startDay,
      endDay,
    });
  };

  useEffect(() => {
    const { startDay, endDay } = getStartDateEndDate(
      selectOptionsDateRange[0].value
    );
    getRevenue({
      startDay,
      endDay,
    });
  }, []);
  return {
    revenueData: formattedRevenueData,
    handleChangeRangeDate,
    selectOptionsDateRange
  };
}
