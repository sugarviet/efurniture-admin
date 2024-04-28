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
    <>
    <div className="px-2 my-2 mb-4">
      <img src="../images/logo.svg" alt="logo" className="bg-black text-black" />
    </div>
    <Menu
      theme="light"
      onClick={onClick}
      selectedKeys={[location.pathname]}
      mode="inline"
      className={classNames("text-lg tracking-wide")}
      items={getItemByRole[role]}
    />
    </>
  );
};

export default AppSider;
