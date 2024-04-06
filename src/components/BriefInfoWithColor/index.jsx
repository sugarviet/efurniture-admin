import { Link } from "react-router-dom";
import { classNames } from "../../utils/classNames";

function BriefInfoWithColor({ info, to, img_class, col }) {
  const { thumb, name, color } = info;
  return (
    <section
      className={classNames("flex items-center gap-2", col ? "flex-col" : "")}
    >
      <img className={img_class} src={thumb} />
      <div className="flex items-center justify-between w-44 flex-1 gap-10">
        
        <div className=" w-24 truncate overflow-hidden flex">
            <Link to={to} className="link text-left">
                {name}
            </Link>
        </div>
        <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: color }}></div>
      </div>
    </section>
  );
}

export default BriefInfoWithColor;
