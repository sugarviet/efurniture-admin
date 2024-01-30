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