import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const FlashSaleContext = createContext();

function FlashSaleProvider(props) {
    const [startDay, setStartDay] = useState();
    const [endDay, setEndDay] = useState();

    const value = {
        startDay,
        setStartDay,
        endDay,
        setEndDay,
    };
    return (
        <FlashSaleContext.Provider value={value}>
            {props.children}
        </FlashSaleContext.Provider>
    );
}

const useFlashSaleContext = () => {
    const context = useContext(FlashSaleContext);
    if (!context) {
        throw new Error("useFlashSaleContext must be used within a ThemeProvider");
    }
    return context;
};

FlashSaleProvider.propTypes = {
    children: PropTypes.node,
};

export {
    FlashSaleContext,
    FlashSaleProvider,
    useFlashSaleContext,
};
