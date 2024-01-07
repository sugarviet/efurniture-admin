import { Suspense } from "react";
import Proptypes from "prop-types";

import Loading from "@components/Loading";

const AppSuspense = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

AppSuspense.propTypes = {
  children: Proptypes.node,
};

export default AppSuspense;
