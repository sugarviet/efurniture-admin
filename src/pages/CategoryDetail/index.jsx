import { Divider } from "antd";
import HorizontalList from "@components/HorizontalList";
import ProductCard from "@components/ProductCard";
import PageTitle from "@components/PageTitle";

const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
];

const CategoryDetail = () => {
  return (
    <div>
      <PageTitle title="Type: abc" />

      <Divider />
      <h2 className="text-xl">List products</h2>
      <HorizontalList cols={4} data={data} dataItem={ProductCard} />
    </div>
  );
};

export default CategoryDetail;
