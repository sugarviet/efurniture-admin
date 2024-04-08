import { Avatar } from "antd";
import PropTypes from "prop-types";

function UserBrief({data}) {
  return (
    <section className="flex items-center">
      <Avatar
        src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
        style={{ cursor: "pointer" }}
      />
      <span className="text-xs ml-2">{data.first_name} {data.last_name}</span>
    </section>
  );
}

UserBrief.propTypes = {
  data: PropTypes.object,
};


export default UserBrief;
