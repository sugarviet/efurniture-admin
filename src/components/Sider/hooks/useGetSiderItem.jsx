import {
  ShopOutlined,
  UserOutlined,
  AlertOutlined,
  TagsOutlined,
  FireOutlined,
  AppstoreAddOutlined,
  AreaChartOutlined,
  ShoppingCartOutlined,
  DropboxOutlined,
} from "@ant-design/icons";
import useNavigation from "../../../hooks/useNavigation";

export function useGetSiderItem() {
  const {
    go_to_user,
    go_to_staff,
    go_to_order,
    go_to_products,
    go_to_warehouses,
    go_to_create_product,
    go_to_rooms,
    go_to_flashsale,
    create_flashsale,
    go_to_dashboard,
    go_to_types,
    go_to_subtypes,
    go_to_vouchers,
    go_to_create_room,
    go_to_create_voucher,
    go_to_transactions,
    go_to_delivery_trip
  } = useNavigation();

  function getItem(label, key, icon, children, type, onClick) {
    return {
      key,
      icon,
      children,
      label,
      type,
      onClick,
    };
  }

  const itemsForAdmin = [
    getItem(
      "Dashboard",
      "/",
      <AreaChartOutlined />,
      null,
      null,
      go_to_dashboard
    ),
    getItem(
      "Products",
      "/products",
      <DropboxOutlined />,
      null,
      null,
      go_to_products
    ),
    getItem("Flashsale", "/flashsale", <FireOutlined />, [
      getItem(
        "List Flashsale",
        "/flashsales",
        null,
        null,
        null,
        go_to_flashsale
      ),
      getItem(
        "Create Flashsale",
        "/flashsale/create",
        null,
        null,
        null,
        create_flashsale
      ),
    ]),
    getItem(
      "Warehouse",
      "/warehouses",
      <TagsOutlined />,
      null,
      null,
      go_to_warehouses
    ),
    {
      type: "divider",
    },
    getItem(
      "Transactions",
      "/transactions",
      <AreaChartOutlined />,
      null,
      null,
      go_to_transactions
    ),
    getItem(
      "Orders",
      "/orders",
      <ShoppingCartOutlined />,
      null,
      null,
      go_to_order
    ),
    getItem("Rooms", "/rooms", <ShopOutlined />, null, null, go_to_rooms),
    getItem(
      "Types",
      "/types",
      <AppstoreAddOutlined />,
      null,
      null,
      go_to_types
    ),
    getItem(
      "Subtypes",
      "/subtypes",
      <AppstoreAddOutlined />,
      null,
      null,
      go_to_subtypes
    ),
  ];
  const itemsForSuperAdmin = [
    getItem("User", "/users", <UserOutlined />, null, null, go_to_user),
    getItem("Staffs", "/staffs", <TagsOutlined />, null, null, go_to_staff),
  ];
  const itemsForStaff = [
    getItem("Products", "/product", <DropboxOutlined />, [
      getItem("List Product", "/products", null, null, null, go_to_products),
      getItem(
        "Create Product",
        "/product/create",
        null,
        null,
        null,
        go_to_create_product
      ),
    ]),
    getItem("Vouchers", "/voucher", <TagsOutlined />, [
      getItem("List Voucher", "/vouchers", null, null, null, go_to_vouchers),
      getItem("Create Voucher", "/voucher/create", null, null, null, go_to_create_voucher),
    ]),
    getItem(
      "Warehouse",
      "/warehouse",
      <TagsOutlined />,
      null,
      null,
      go_to_warehouses
    ),
    getItem(
      "Delivery trip",
      "/delivery-trip",
      <TagsOutlined />,
      null,
      null,
      go_to_delivery_trip
    ),
    {
      type: "divider",
    },
    getItem("Rooms", "/room", <ShopOutlined />, [
      getItem("List rooms", "/rooms", null, null, null, go_to_rooms),
      getItem(
        "Create Rooms",
        "/room/create",
        null,
        null,
        null,
        go_to_create_room
      ),
    ]),
    getItem(
      "Types",
      "/types",
      <AppstoreAddOutlined />,
      null,
      null,
      go_to_types
    ),
    getItem(
      "SubTypes",
      "/subtypes",
      <AppstoreAddOutlined />,
      null,
      null,
      go_to_subtypes
    ),
  ];

  const getItemByRole = {
    superAdmin: itemsForSuperAdmin,
    admin: itemsForAdmin,
    staff: itemsForStaff,
  };

  return {
    getItemByRole,
  };
}
