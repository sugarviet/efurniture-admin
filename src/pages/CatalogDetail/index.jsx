import Proptypes from "prop-types";
import HorizontalList from "@components/layouts/HorizontalList";
import ProductCard from "@components/ProductCard";

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

const CatalogDetail = ({ id }) => {
  console.log(id);
  return (
    <main className="">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold">Catelog name</h1>
        <div>
          <h2 className="text-lg">Living room</h2>
          <h2>Total price: 20$</h2>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <img src="https://dummyimage.com/600x400/000/fff" alt="" />
      </div>

      <h1 className="text-center text-2xl my-4">PRODUCTS IN THE ROOM</h1>
      <HorizontalList cols={3} data={data} dataItem={ProductCard} />
    </main>
  );
};

CatalogDetail.propTypes = {
  id: Proptypes.number,
};

export default CatalogDetail;
