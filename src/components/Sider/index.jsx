import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useGetCurrentUserRole } from "@hooks/useGetCurrentUserRole";
import { useGetSiderItem } from "./hooks/useGetSiderItem";

const AppSider = () => {
  const { getItemByRole } = useGetSiderItem();
  const currentUserRole = useGetCurrentUserRole();
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(e.key);
  };

  return (
    <div>
      <div className="mx-auto mt-2">
        <img src="/logo.png" alt="logo" className="w-20 h-16 flex justify-center mx-auto"/>
      </div>
      <Menu
        theme="dark"
        onClick={onClick}
        style={{
          height: "100%",
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={getItemByRole[currentUserRole]}
      />
    </div>
  );
};

export default AppSider;
