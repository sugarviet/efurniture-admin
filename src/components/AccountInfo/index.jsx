import { Avatar, Dropdown } from "antd";
import useAuth from "../../stores/useAuth";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function AccountInfo() {
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

  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <span className="text-black font-semibold capitalize">{role}: </span>
        <span className="text-black">{username}</span>
      </div>
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
    </div>
  );
}

export default AccountInfo;
