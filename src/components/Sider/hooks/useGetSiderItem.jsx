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

export function useGetSiderItem() {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const itemsForAdmin = [
    getItem("Dashboard", "/", <AreaChartOutlined />),
    getItem("Products", "/products", <DropboxOutlined />),
    getItem("Flashsale", "/flashsale", <FireOutlined />, [
      getItem("List Flashsale", "/flashsales"),
      getItem("Create Flashsale", "/flashsale/create"),
    ]),
    getItem("Vouchers", "/vouchers", <TagsOutlined />),
    {
      type: "divider",
    },
    getItem("Orders", "/orders", <ShoppingCartOutlined />),
    getItem("Rooms", "/rooms", <ShopOutlined />),
    getItem("Reports", "/reports", <AlertOutlined />),
    getItem("Types", "/types", <AppstoreAddOutlined />),
  ];
  const itemsForSuperAdmin = [
    getItem("User", "/users", <UserOutlined />),
    getItem("Staffs", "/staffs", <TagsOutlined />),
  ];
  const itemsForStaff = [
    getItem("Products", "/product", <DropboxOutlined />, [
      getItem("List Product", "/products"),
      getItem("Create Product", "/product/create"),
    ]),
    getItem("Vouchers", "/voucher", <TagsOutlined />, [
      getItem("List Voucher", "/vouchers"),
      getItem("Create Voucher", "/voucher/create"),
    ]),
    getItem("Warehouse", "/warehouse", <TagsOutlined />),
    {
      type: "divider",
    },
    getItem("Rooms", "/room", <ShopOutlined />, [
      getItem("List rooms", "/rooms"),
      getItem("Create Rooms", "/room/create"),
    ]),
    getItem("Reports", "/report", <AlertOutlined />),
    getItem("Types", "/type", <AppstoreAddOutlined />, [
      getItem("List Types", "/types"),
      getItem("Create types", "/type/create"),
    ]),
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
