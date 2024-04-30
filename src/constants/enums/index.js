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
    [
        "products",
        {
            icon: ICONS.products,
            title: "Products",
            status: "Available products",
        },
    ],
    [
        "orders",
        {
            icon: ICONS.orders,
            title: "Orders",
            status: "Total orders",
        },
    ],
    [
        "users",
        {
            icon: ICONS.users,
            title: "Users",
            status: "Total users",
        },
    ],
])

export const COORDINATES = new Map([
    ["TP HCM", { latitude: 10.794566330246207, longitude: 106.67287666472863 }],
]);