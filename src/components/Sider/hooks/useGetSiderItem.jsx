import {
  DashboardOutlined,
  HomeOutlined,
  ScheduleOutlined,
  ShopOutlined,
  UserOutlined,
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
    getItem("Vouchers", "/vouchers", <HomeOutlined />),

    {
      type: "divider",
    },
  ];

  const itemsForPartner = [
    getItem("Dashboard", "/", <DashboardOutlined />),
    getItem("Products", "/products", <ShopOutlined />),
  ];

  const getItemByRole = {
    admin: itemsForAdmin,
    partner: itemsForPartner,
  }

  return {
    getItemByRole
  };
}
