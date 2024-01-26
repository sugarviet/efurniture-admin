import { Avatar, Dropdown } from "antd";
import { logout } from "@utils/logout";

const Navbar = () => {
  const items = [
    {
      label: <a href="#">Home</a>,
      key: "1",
    },
    {
      label: <a href="#">Profile</a>,
      key: "2",
    },
    {
      label: <a href="#">Settings</a>,
      key: "3",
    },
    {
      type: "divider",
    },
    {
      label: <p onClick={logout}>Logout</p>,
      key: "4",
    },
  ];

  return (
    <nav
      id="navbar"
      className="flex justify-between w-full h-full text-white items-center px-6"
    >
     
      <div className="ml-auto">
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
    </nav>
  );
};

export default Navbar;
