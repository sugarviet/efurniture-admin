import { ArrowDownOutlined, CloseCircleOutlined } from "@ant-design/icons";
import AppModal from "@components/AppModal";
import { useState } from "react";
import { classNames } from "../../../utils/classNames";
import BriefInfo from "../../../components/BriefInfo";
import FurnitureOptionFlashsale from "./FurnitureOptionFlashsale";
import {
  formatDateByDateAndMinute,
} from "../../../utils/formatDate";
import PropTypes from "prop-types";
import BriefInfoFlashsale from "../../../components/BriefInfoFlashsale";

function FurnitureSelectionFlashsale({
  onChange,
  className,
  value,
  multiple,
  data,
}) {

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
          <BriefInfoFlashsale
            info={{
              thumb: value.thumbs[0],
              name: value.name,
              sell_price: value.sale_price
            }}
            img_class="h-6 w-10"
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
        <FurnitureOptionFlashsale
          startDay={formatDateByDateAndMinute(data?.startDay)}
          endDay={formatDateByDateAndMinute(data?.endDay)}
          onSelect={(furniture) => {
            handleSelect(furniture);
            if (multiple) handleDuplicate(furniture._id);
          }}
        />
      </AppModal>
    </section>
  );
}

FurnitureSelectionFlashsale.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.object,
  multiple: PropTypes.bool,
  data: PropTypes.object,
};

export default FurnitureSelectionFlashsale;
