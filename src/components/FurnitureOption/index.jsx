import { useState } from "react";
import BriefInfo from "../BriefInfo";
import { withFetchData } from "../../hocs/withFetchData";
import { get_published_product } from "../../api/productApi";
import { formatCurrency } from "../../utils/formatCurrency";
import SearchInput from "../SearchInput";

function FurnitureOption({ data, onSelect }) {
  const [furniture, setFurniture] = useState(data.data || []);

  const handleSearch = (value) => {
    const furnitureClone = [...data.data];

    const filteredFurniture = furnitureClone.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFurniture(filteredFurniture);
  };

  return (
    <div>
      <SearchInput
        onSearch={handleSearch}
        placeholder="Find furniture by name..."
      />
      <ul className="h-72 overflow-y-auto no-scrollbar">
        {furniture.map((item) => {
          const { _id, thumbs, name, sale_price } = item;
          return (
            <li
              onClick={() => onSelect(item)}
              className="hover:cursor-pointer hover:opacity-50 my-2 border-b-[1px] py-2 flex justify-between"
              key={_id}
            >
              <BriefInfo
                img_class="h-12 w-12 object-contain"
                info={{ thumb: thumbs[0], name: name }}
              />
              <span className="text-sm">{formatCurrency(sale_price)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default withFetchData(FurnitureOption, get_published_product);
