import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { getCurrentUserRole } from "@utils/getCurrentUserRole";
import { useGetSiderItem } from "./hooks/useGetSiderItem";

const activeTab = window.location.pathname; 

const AppSider = () => {
  const { getItemByRole } = useGetSiderItem();
  const role = getCurrentUserRole(+localStorage.getItem('token'))
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
