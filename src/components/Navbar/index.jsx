import { Avatar, Dropdown, Menu } from "antd";
import NotificationList from "../NotificationList";
import { BellOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useAuth from "../../stores/useAuth";
import { jwtDecode } from "jwt-decode";
import useNotificationStore from "../../stores/useNotificationStore";

const Navbar = () => {
  const { isNewNoti, hasReadNoti } = useNotificationStore()
  const navigate = useNavigate();
  const { clearTokens, accessToken, role } = useAuth();
  const decode = jwtDecode(accessToken);
  const { username } = decode;

  const handleLogout = () => {
    clearTokens();
    navigate("/");
  };
  const items = [

    {
      label: <p onClick={handleLogout}>Logout</p>,
      key: "1",
    },
  ];

  const notificationMenu = (
    <Menu className="p-2">
      <NotificationList />
    </Menu>
  );

  return (
    <nav
      id="navbar"
      className="flex justify-between w-full h-full text-white items-center px-2"
    >
      <div className="ml-auto flex gap-3 items-center p-3 ">
        <Dropdown
          overlay={notificationMenu}
          trigger={["hover"]}
          onOpenChange={hasReadNoti}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <BellOutlined style={{ color: 'black', height: 20, width: 20, fontSize: '27px' }} />

            {isNewNoti ? (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: -2,
                  backgroundColor: '#f2434a',
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                }}
              >
              </div>
            ) : null}

          </div>

        </Dropdown>
        <div className="flex items-center justify-between p-4 gap-2">

          <Dropdown
            menu={{
              items,
            }}
            trigger={["hover"]}
          >
            <Avatar
              src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
              style={{ cursor: "pointer" }}
            />
          </Dropdown>
          <div>
            <span className="text-black font-semibold capitalize">{role}: </span>
            <span className="text-black">{username}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;