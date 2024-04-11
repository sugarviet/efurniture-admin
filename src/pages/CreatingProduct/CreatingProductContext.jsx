import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const CreatingProductContext = createContext();

function CreatingProductProvider(props) {
  const [productType, setProductType] = useState();
  const [productSubType, setProductSubType] = useState();

  const handleSelectType = (value) => {
    setProductType(value);
  };

  const handleSelectSubType = (value) => {
    setProductSubType(value);
  };

  const value = {
    productSubType,
    handleSelectSubType,
    productType,
    setProductType,
    handleSelectType,
    setProductSubType,
  };
  return (
    <CreatingProductContext.Provider value={value}>
      {props.children}
    </CreatingProductContext.Provider>
  );
}

const useCreatingProductValues = () => {
  const context = useContext(CreatingProductContext);
  if (!context) {
    throw new Error("useCreatingProductValues must be used within a ThemeProvider");
  }
  return context;
};

CreatingProductProvider.propTypes = {
  children: PropTypes.node,
};

export {
  CreatingProductContext,
  CreatingProductProvider,
  useCreatingProductValues,
};
