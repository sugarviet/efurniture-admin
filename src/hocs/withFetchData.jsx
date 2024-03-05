/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useParams } from "react-router-dom";
import { useFetch } from "@hooks/api-hooks";
import useParamQuery from "../hooks/useParamQuery";

const handleGetAllSearchParams = (searchParams) => {
  const search = {};
    searchParams.forEach((value, key) => {
      search[key] = value;
    });

    return search;
}


export const withFetchData = (WrappedComponent, getApi) => {
  return (props) => {
    const { slug } = props;
    const params = useParams();
    const {params: searchParams} = useParamQuery();

    const search = handleGetAllSearchParams(searchParams);
    const { data, isLoading } = useFetch(getApi({search, slug ,params}));

    if (isLoading) return;
    return <WrappedComponent {...props} data={data} />;
  };
};
