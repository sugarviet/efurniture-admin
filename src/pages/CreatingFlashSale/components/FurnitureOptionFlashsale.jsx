import { useState, useEffect } from "react";
import BriefInfo from "../../../components/BriefInfo";
import { withFetchData } from "../../../hocs/withFetchData";
import { get_published_product } from "../../../api/productApi";
import { formatCurrency } from "../../../utils/formatCurrency";
import SearchInput from "../../../components/SearchInput";
import PropTypes from "prop-types";
import { usePost } from "../../../hooks/api-hooks";
import { get_valid_product_flash_sale } from "../../../api/flashsaleApi";

function FurnitureOptionFlashsale({ data, onSelect, startDay, endDay }) {

  const { mutate: mutateValidProduct, data: listProductFlashsale } = usePost(get_valid_product_flash_sale(), undefined)
 
  const [furniture, setFurniture] = useState(listProductFlashsale || []);

  const handleSearch = (value) => {
    const furnitureClone = [...data.data];

    const filteredFurniture = furnitureClone.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFurniture(filteredFurniture);
  };


  useEffect(() => {
    mutateValidProduct({startDay, endDay});
  }, [startDay, endDay])

  return (
    <div>
      <SearchInput
        onSearch={handleSearch}
        placeholder="Find furniture by name..."
      />
      <ul className="h-72 overflow-y-auto thin-scroll-bar mr-2">
        {listProductFlashsale?.map((item) => {
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

FurnitureOptionFlashsale.propTypes = {
  data: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.object,
  multiple: PropTypes.bool,
  onSelect: PropTypes.func,
  startDay: PropTypes.string,
  endDay: PropTypes.string,
};

export default withFetchData(FurnitureOptionFlashsale, get_published_product);
