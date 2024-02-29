import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useGetSiderItem } from "./hooks/useGetSiderItem";
import useAuth from "../../stores/useAuth";

const activeTab = window.location.pathname;

const AppSider = () => {
  const { getItemByRole } = useGetSiderItem();
  const { role } = useAuth();
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(e.key);
  };

  return (
    <div>
      <Menu
        theme="light"
        onClick={onClick}
        style={{
          height: "100%",
        }}
        defaultSelectedKeys={[activeTab]}
        mode="inline"
        items={getItemByRole[role]}
      />
    </div>
  );
};

export default AppSider;
