import { Link } from "react-router-dom";
import { classNames } from "../../utils/classNames";

function Logo({ className }) {
  return (
    <Link>
      <span className="sr-only">E-Furniture</span>
      <img className={className} src="/images/logo.svg" alt="" />
    </Link>
  );
}

export default Logo;
