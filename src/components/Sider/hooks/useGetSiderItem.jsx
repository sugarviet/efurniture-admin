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
    getItem("Events", "/event", <ScheduleOutlined />, [
      getItem("List Events", "/events"),
      getItem("Create Events", "/event/create"),
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
    getItem("Categories", "/category", <TagsOutlined />, [
      getItem("List Category", "/categories"),
      getItem("Create Category", "/category/create"),
    ]),
  ];
  const itemsForSuperAdmin = [
 
    getItem("User", "/users", <UserOutlined />),
    getItem("Staffs", "/staffs", <TagsOutlined />)


  ];
  const itemsForStaff = [
    getItem("Products", "/product", <ShopOutlined />, [
      getItem("List Product", "/products"),
      getItem("Create Product", "/product/create"),
    ]),
    getItem("Events", "/event", <ScheduleOutlined />, [
      getItem("List Events", "/events"),
      getItem("Create Events", "/event/create"),
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
    getItem("Categories", "/category", <TagsOutlined />, [
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
