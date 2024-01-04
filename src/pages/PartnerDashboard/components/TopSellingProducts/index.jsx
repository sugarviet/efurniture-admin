import HorizontalList from "../../../../components/HorizontalList";
import ProductCard from "../../../../components/ProductCard";

const TopSellingProducts = () => {
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
  return (
    <div>
      TopSellingProducts
     
        <HorizontalList cols={3} data={data} dataItem={ProductCard} />

    </div>
  );
};

export default TopSellingProducts;
