import {
  DashboardOutlined,
  ScheduleOutlined,
  ShopOutlined,
  UserOutlined,
  AlertOutlined,
  TagsOutlined,
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
    getItem("Dashboard", "/", <DashboardOutlined />),
    getItem("Products", "/products", <ShopOutlined />, [
      getItem("List Product", "/products"),
      getItem("Create Product", "/product/create"),
    ]),
    getItem("Events", "/events", <ScheduleOutlined />, [
      getItem("List Events", "/events"),
      getItem("Create Events", "/event/create"),
    ]),
    getItem("Account", "/account", <UserOutlined />, [
      getItem("User", "/users"),
      getItem("Staffs", "/staffs"),
    ]),
    getItem("Vouchers", "/vouchers", <AlertOutlined />, [
      getItem("List Voucher", "/vouchers"),
      getItem("Create Voucher", "/voucher/create"),
    ]),

    {
      type: "divider",
    },
    getItem("Orders", "/orders", <TagsOutlined />),
    getItem("Catelogs", "/catelogs", <TagsOutlined />, [
      getItem("List Catelogs", "/catelogs"),
      getItem("Create Catelogs", "/catelog/create"),
    ]),
    getItem("Reports", "/reports", <TagsOutlined />),
    getItem("Categories", "/categories", <TagsOutlined />, [
      getItem("List Category", "/categories"),
      getItem("Create Category", "/category/create"),
    ]),
  ];
  const itemsForSuperAdmin = [
    getItem("Account", "/account", <UserOutlined />, [
      getItem("User", "/users"),
      getItem("Staffs", "/staffs"),
    ]),
  ];
  const itemsForStaff = [
    getItem("Products", "/products", <ShopOutlined />, [
      getItem("List Product", "/products"),
      getItem("Create Product", "/product/create"),
    ]),
    getItem("Events", "/events", <ScheduleOutlined />, [
      getItem("List Events", "/events"),
      getItem("Create Events", "/event/create"),
    ]),
    getItem("Vouchers", "/vouchers", <AlertOutlined />, [
      getItem("List Voucher", "/vouchers"),
      getItem("Create Voucher", "/voucher/create"),
    ]),
    getItem("Warehouse", "/warehouse", <TagsOutlined />),
  

    {
      type: "divider",
    },
    getItem("Catelogs", "/catelogs", <TagsOutlined />, [
      getItem("List Catelogs", "/catelogs"),
      getItem("Create Catelogs", "/catelog/create"),
    ]),
    getItem("Reports", "/reports", <TagsOutlined />),
    getItem("Categories", "/categories", <TagsOutlined />, [
      getItem("List Category", "/categories"),
      getItem("Create Category", "/category/create"),
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
