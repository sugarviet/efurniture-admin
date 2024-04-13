import { useState } from "react";
import BriefInfo from "../BriefInfo";
import { withFetchData } from "../../hocs/withFetchData";
import { get_published_product } from "../../api/productApi";
import { formatCurrency } from "../../utils/formatCurrency";
import SearchInput from "../SearchInput";
import { Select } from "antd";
import SelectColor from "../SelectColor";
import SelectColorWarehouse from "../SelectColorWarehouse";
import Note from "../Note";

function FurnitureOptionWarehouse({ data, onSelect }) {
  const [furniture, setFurniture] = useState(data.data || []);
  const [variationColor, setVariationColor] = useState({});


  console.log(variationColor)

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

      <Note type='color'/>
      <ul className="h-72 overflow-y-auto no-scrollbar">
        {furniture.map((item) => {

          const selectedVariation = variationColor

          console.log(selectedVariation);

          const { _id, thumbs, name, sale_price, variation } = item;

          const variantProduct = variation[0].properties.map((item) => {
            return {
              product_id: _id,
              ...item
            };
          })

          const isVariationChosen = selectedVariation.product_id === _id

          const handleChooseFurniture = () => {
            if (isVariationChosen) {
              onSelect({ ...item, selectedVariation })
            }
          }

          return (
            <li
              // onClick={() => onSelect(item)}
              className="my-2 border-b-[1px] py-2 flex justify-between"
              key={_id}
            >
              <div className={`flex items-center justify-between flex-1 mx-2  ${isVariationChosen ? 'hover:cursor-pointer hover:opacity-50' : ''}`} 
              onClick={handleChooseFurniture}
              >
                <BriefInfo
                  img_class="h-12 w-12 object-contain"
                  info={{ thumb: thumbs[0], name: name }}
                />
                <span className="text-sm">{formatCurrency(!isVariationChosen ? sale_price : selectedVariation.sub_price + sale_price)}</span>

              </div>

              <SelectColorWarehouse data={variantProduct} className="w-36" onChange={setVariationColor} value={isVariationChosen ? selectedVariation.value : null} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default withFetchData(FurnitureOptionWarehouse, get_published_product);
