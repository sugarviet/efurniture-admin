/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useParams } from "react-router-dom";
import { useFetch } from "@hooks/api-hooks";
import { useSearchParams } from "react-router-dom";

const handleGetAllSearchParams = (searchParams) => {
  const searchValues = {};
  searchParams.forEach((value, key) => {
    searchValues[key] = value;
  });

  return searchValues;
};

export const withFetchData = (WrappedComponent, getApi) => {
  return (props) => {
    const { slug } = props;
    const params = useParams();
    const [searchParams] = useSearchParams();

    const searchValue = handleGetAllSearchParams(searchParams);
    const { data, isLoading } = useFetch(getApi(slug || params, searchValue));

    if (isLoading) return;
    return <WrappedComponent {...props} data={data} />;
  };
};
