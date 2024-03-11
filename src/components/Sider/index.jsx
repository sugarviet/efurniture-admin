import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useGetSiderItem } from "./hooks/useGetSiderItem";
import useAuth from "../../stores/useAuth";
import { classNames } from "../../utils/classNames";

const activeTab = window.location.pathname;

const AppSider = () => {
  const { getItemByRole } = useGetSiderItem();
  const { role } = useAuth();
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(e.key);
  };

  return (
    <Menu
      theme="light"
      onClick={onClick}
      defaultSelectedKeys={[activeTab]}
      mode="inline"
      className={classNames("text-lg tracking-wide")}
      items={getItemByRole[role]}
    />
  );
};

export default AppSider;
