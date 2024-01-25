import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useGetCurrentUserRole } from "@hooks/useGetCurrentUserRole";
import { useGetSiderItem } from "./hooks/useGetSiderItem";

const activeTab = window.location.pathname; 

const AppSider = () => {
  const { getItemByRole } = useGetSiderItem();
  const currentUserRole = useGetCurrentUserRole();
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
        items={getItemByRole[currentUserRole]}
      />
    </div>
  );
};

export default AppSider;
