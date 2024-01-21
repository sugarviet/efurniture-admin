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
    getItem("Catelogs", "/catelogs", <TagsOutlined />),
    // getItem("Transactions", "/transactions", <TagsOutlined />),
    // getItem("Contracts", "/contracts", <TagsOutlined />),
    // getItem("Cash out", "/cash-request", <MoneyCollectOutlined />),
    getItem("Reports", "/reports", <TagsOutlined />),
    getItem("Categories", "/categories", <TagsOutlined />),



  ];

  const itemsForPartner = [
    getItem("Dashboard", "/", <DashboardOutlined />),
    getItem("Products", "/products", <ShopOutlined />),
  ];


  const itemsForStaff = [
    getItem("Partner", "/partners", <UserOutlined />),
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
