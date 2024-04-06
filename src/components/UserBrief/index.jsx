import { Avatar } from "antd";

function UserBrief() {
  return (
    <section className="flex items-center">
      <Avatar
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        style={{ cursor: "pointer" }}
      />
      <span className="text-xs ml-2">Customer</span>
    </section>
  );
}

export default UserBrief;
