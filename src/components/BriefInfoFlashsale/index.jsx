import { classNames } from "../../utils/classNames";
import LinkNewTab from "../LinkNewTab";
import { DEPLOY_ROOM_DETAIL_URL } from "../../constants/url";
import { formatCurrency } from "../../utils/formatCurrency";

function BriefInfoFlashsale({ info, to, img_class, col, published }) {
  const { thumb, name, slug, sell_price } = info;

  return (
    <section
      className={classNames("flex items-center gap-2", col ? "flex-col" : "")}
    >
      <img className={img_class} src={thumb} />

     <span className="w-24 text-start truncate">{name}</span>
     <span>{formatCurrency(sell_price)}</span>
    
     
    </section>
  );
}

export default BriefInfoFlashsale;
