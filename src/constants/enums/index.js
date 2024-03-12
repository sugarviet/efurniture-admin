import { ICONS } from "../icons";

export const E_COMMERCE_STATUS = new Map([
    [
        "new orders",
        {
            icon: ICONS.onProcessing,
            title: "new orders",
            status: "Awaiting processing",
        },
    ],
    [
        "on hold",
        {
            icon: ICONS.onHold,
            title: "orders",
            status: "On hold",
        },
    ],
    [
        "out of stock",
        {
            icon: ICONS.outOfStock,
            title: "products",
            status: "Out of stock",
        },
    ],
])

export const COORDINATES = new Map([
    ["TP HCM", { latitude: 10.794566330246207, longitude: 106.67287666472863 }],
    ["Quận 1", { latitude: 10.773995922564998, longitude: 106.69552978023665 }],
    ["Quận 12", { latitude: 10.870154804604418, longitude: 106.64215284538118 }],
]);