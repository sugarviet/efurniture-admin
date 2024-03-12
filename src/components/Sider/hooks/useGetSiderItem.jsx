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
    getItem("Products", "/product", <ShopOutlined />, [
      getItem("List Product", "/products"),
      getItem("Create Product", "/product/create"),
    ]),
    getItem("Flashsale", "/flashsale", <ScheduleOutlined />, [
      getItem("List Flashsale", "/flashsales"),
      getItem("Create Flashsale", "/flashsale/create"),
    ]),
    getItem("Vouchers", "/voucher", <AlertOutlined />, [
      getItem("List Voucher", "/vouchers"),
      getItem("Create Voucher", "/voucher/create"),
    ]),

    {
      type: "divider",
    },
    getItem("Orders", "/orders", <TagsOutlined />),
    getItem("Rooms", "/room", <TagsOutlined />, [
      getItem("List rooms", "/rooms"),
      getItem("Create Rooms", "/room/create"),
    ]),
    getItem("Reports", "/reports", <TagsOutlined />),
    getItem("Types", "/type", <TagsOutlined />, [
      getItem("List Types", "/types"),
      getItem("Create types", "/type/create"),
    ]),
  ];
  const itemsForSuperAdmin = [
    getItem("User", "/users", <UserOutlined />),
    getItem("Staffs", "/staffs", <TagsOutlined />),
  ];
  const itemsForStaff = [
    getItem("Products", "/product", <ShopOutlined />, [
      getItem("List Product", "/products"),
      getItem("Create Product", "/product/create"),
    ]),
    getItem("Vouchers", "/voucher", <AlertOutlined />, [
      getItem("List Voucher", "/vouchers"),
      getItem("Create Voucher", "/voucher/create"),
    ]),
    getItem("Warehouse", "/warehouse", <TagsOutlined />),

    {
      type: "divider",
    },
    getItem("Rooms", "/room", <TagsOutlined />, [
      getItem("List rooms", "/rooms"),
      getItem("Create Rooms", "/room/create"),
    ]),
    getItem("Reports", "/report", <TagsOutlined />),
    getItem("Types", "/type", <TagsOutlined />, [
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
