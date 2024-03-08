import { Link } from "react-router-dom";
import { classNames } from "../../utils/classNames";

function BriefInfo({ info, to, img_class, col }) {
  const { thumb, name } = info;
  return (
    <section
      className={classNames("flex items-center gap-2", col ? "flex-col" : "")}
    >
      <img className={img_class} src={thumb} />
      <Link to={to} className="link">
        {name}
      </Link>
    </section>
  );
}

export default BriefInfo;
