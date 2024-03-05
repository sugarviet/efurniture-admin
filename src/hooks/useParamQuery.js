import { useSearchParams } from "react-router-dom";

const useParamQuery = () => {
  let [params, setSearchParams] = useSearchParams();

  const handleSetParams = (params) => {
    setSearchParams(params)
  }

  return {
    params,
    handleSetParams
  }
}

  

export default useParamQuery