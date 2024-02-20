/* eslint-disable no-unused-vars */
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

export const get_data = async (url) => {
    const res = await axios.get(url).then(res => res.data).then(data => data.metaData);
    return res;
}
export const post_data = async (url, body) => {
    const res = await axios.post(url, body).then(res => res.data).then(data => data.metaData);
    return res;
}
export const put_data = async (url, body) => {
    const res = await axios.put(url, body).then(res => res.data).then(data => data.metaData);
    return res;
}
export const delete_data = async (url) => {
    const res = await axios.delete(url).then(res => res.data).then(data => data.metaData);
    return res;
}



const useAppQuery = (key, fn, url) => {
    const {data, isLoading, isFetching} = useQuery({
        queryKey: [key],
        queryFn: () => fn(url),
    })

    return {data, isLoading, isFetching}
}

export default useAppQuery