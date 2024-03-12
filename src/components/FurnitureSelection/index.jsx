import { ArrowDownOutlined, CloseCircleOutlined } from "@ant-design/icons";
import AppModal from "@components/AppModal";
import { useState } from "react";
import { classNames } from "../../utils/classNames";
import BriefInfo from "../BriefInfo";
import FurnitureOption from "../FurnitureOption";

const DATA = [
  {
    _id: "65e893e98ef8c554ad2dd87f",
    name: "Sofa Cheates 19",
    thumbs: [
      "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc7a69a2b/images/1520000/1522718.jpg?sw=2000",
      "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3b9a52ff/images/1520000/1522719.jpg?sw=2000",
      "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf795d1f3/images/1520000/1522720.jpg?sw=2000",
      "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw923c59d9/images/1520000/1522721.jpg?sw=2000",
    ],
    sale_price: 11890000,
  },
  {
    _id: "65e8937f8ef8c554ad2dd85f",
    name: "Sofa Cheates",
    thumbs: [
      "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc7a69a2b/images/1520000/1522718.jpg?sw=2000",
      "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3b9a52ff/images/1520000/1522719.jpg?sw=2000",
      "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf795d1f3/images/1520000/1522720.jpg?sw=2000",
      "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw923c59d9/images/1520000/1522721.jpg?sw=2000",
    ],
    sale_price: 11890000,
  },
];

function FurnitureSelection({ onChange, className, value, multiple }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelect = (furniture) => {
    const currentValue = !value ? (multiple ? [] : value) : value;
    const newValue = multiple ? [...currentValue, furniture] : furniture;

    onChange(newValue);
    setModalOpen(false);
  };

  const remove = (id) => {
    const valueClone = [...value];

    const filteredValue = valueClone.filter((value) => value._id !== id);

    onChange(filteredValue);
  };

  const handleDuplicate = (id) => {
    const isExist = (value || []).some((item) => item._id === id);

    if (isExist) remove(id);
  };

  return (
    <section className="w-full">
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className={classNames(
          "font-HelveticaRoman w-full px-4 py-2 outline-none border-[0.5px] border-[#191915] flex items-center justify-between",
          className
        )}
      >
        {value && !multiple && (
          <BriefInfo
            info={{
              thumb: value.thumbs[0],
              name: value.name,
            }}
            img_class="h-6"
          />
        )}

        {value && multiple && (
          <ul className="flex gap-4">
            {value.map((item) => {
              const { _id, thumbs, name } = item;

              return (
                <li key={_id} className="flex items-center">
                  <BriefInfo
                    info={{
                      thumb: thumbs[0],
                      name: name,
                    }}
                    img_class="h-6"
                  />
                  <CloseCircleOutlined
                    onClick={() => remove(_id)}
                    className="ml-2"
                  />
                </li>
              );
            })}
          </ul>
        )}

        {!value && <span>Select furniture</span>}
        <ArrowDownOutlined className="w-6 h-6 ml-4" />
      </button>
      <AppModal className="h-96" isOpen={modalOpen} setIsOpen={setModalOpen}>
        <FurnitureOption
          onSelect={(furniture) => {
            handleSelect(furniture);
            if (multiple) handleDuplicate(furniture._id);
          }}
        />
      </AppModal>
    </section>
  );
}

export default FurnitureSelection;
