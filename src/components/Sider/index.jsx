import { Menu } from "antd";
import { useLocation } from "react-router-dom";
import { useGetSiderItem } from "./hooks/useGetSiderItem";
import useAuth from "../../stores/useAuth";
import { classNames } from "../../utils/classNames";

const AppSider = () => {
  const { getItemByRole } = useGetSiderItem();
  const { role } = useAuth();
  const onClick = (e) => {
    getItemByRole[role].find((item) => item.key === e.key)?.onClick();
  };

  const location = useLocation();

  return (
    <Menu
      theme="light"
      onClick={onClick}
      selectedKeys={[location.pathname]}
      mode="inline"
      className={classNames("text-lg tracking-wide")}
      items={getItemByRole[role]}
    />
  );
};

export default AppSider;
