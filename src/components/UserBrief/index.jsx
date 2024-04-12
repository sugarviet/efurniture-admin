import PropTypes from "prop-types";

function UserBrief({data}) {
  return (
    <section className="flex items-center">
      <span className="text-base ml-2">{data.first_name} {data.last_name}</span>
    </section>
  );
}

UserBrief.propTypes = {
  data: PropTypes.object,
};


export default UserBrief;
