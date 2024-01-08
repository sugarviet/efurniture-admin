import {
  DashboardOutlined,
  ScheduleOutlined,
  ShopOutlined,
  UserOutlined,
  AlertOutlined,
  TagsOutlined
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
    getItem("Products", "/products", <ShopOutlined />),
    getItem("Events", "/events", <ScheduleOutlined />),
    getItem("Account", "/account", <UserOutlined />, [
      getItem("User", "/users"),
      getItem("Partner", "/partners"),
    ]),
    getItem("Vouchers", "/vouchers", <AlertOutlined />),

    {
      type: "divider",
    },
    getItem("Orders", "/orders", <TagsOutlined />),

  ];

  const itemsForPartner = [
    getItem("Dashboard", "/", <DashboardOutlined />),
    getItem("Products", "/products", <ShopOutlined />),
  ];


  const itemsForStaff = [
    getItem("Products", "/products", <ShopOutlined />),
  ];


  const getItemByRole = {
    admin: itemsForAdmin,
    partner: itemsForPartner,
    staff: itemsForStaff
  }

  return {
    getItemByRole
  };
}
