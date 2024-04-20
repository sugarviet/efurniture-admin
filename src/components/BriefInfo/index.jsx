import { classNames } from "../../utils/classNames";
import LinkNewTab from "../LinkNewTab";
import { DEPLOY_ROOM_DETAIL_URL } from "../../constants/url";

function BriefInfo({ info, to, img_class, col, published }) {
  const { thumb, name, slug } = info;

  return (
    <section
      className={classNames("flex items-center gap-2", col ? "flex-col" : "")}
    >
      <img className={img_class} src={thumb} />
      {published ? 
      <LinkNewTab to={`${DEPLOY_ROOM_DETAIL_URL}/${slug}`}>
      {name}
      </LinkNewTab>
      : <span>{name}</span>
    }
     
    </section>
  );
}

export default BriefInfo;
