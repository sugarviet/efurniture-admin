import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { classNames } from "../../utils/classNames";

function SearchInput({ placeholder, onSearch, className }) {
  const [searchValue, setSearchValue] = useState(undefined);

  const handleOnChange = (value) => {
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div className="relative flex items-center">
      <input
        className={classNames(
          "w-full bg-transparent outline-none border-[1px] border-black pl-4 pr-10 py-3 text-md",
          className
        )}
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <SearchOutlined className="absolute h-6 w-6 right-0" />
    </div>
  );
}

export default SearchInput;
