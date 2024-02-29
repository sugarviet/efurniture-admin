/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useParams } from "react-router-dom";
import { useFetch } from "@hooks/api-hooks";

export const withFetchData = (WrappedComponent, getApi) => {
  return (props) => {
    const { slug } = props;
    const params = useParams();

    const { data, isLoading } = useFetch(getApi(slug || params));

    if (isLoading) return;
    return <WrappedComponent {...props} data={data} />;
  };
};
