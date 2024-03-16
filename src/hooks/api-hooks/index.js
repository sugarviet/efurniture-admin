import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { request } from '@utils/request';
import axios from 'axios';

const fetcher = async (url, params) => {
  const data = await request.get(url, { params: params })
    .then((response) => response.data)
    .then((data) => data.metaData);

  return data;
};

const fetch_outside_system = async (url) => {
  const data = await axios.get(url)
    .then((response) => response.data)
    .then((data) => data.results);

  return data;
};


export const useFetch = (url, params, enabled) => {
  return useQuery([url, params], () => fetcher(url, params), {
    enabled
  });
};

export const useFetchOutsideSystem = (url, params, enabled) => {
  return useQuery([url, params], () => fetch_outside_system(url, params), { enabled });
};


const useGenericMutation = (func, key, params, onSuccessAPI, onErrorAPI) => {
  const queryClient = useQueryClient();
  return useMutation(func, {
    onSuccess: (data) => {
      onSuccessAPI(data);
    },
    onError: (error) => {
      onErrorAPI(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries([key, params]);
    },
  });
};

export const useDelete = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    (id) => request.delete(`${url}/${id}`),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};


export const usePost = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    async (data) => await request.post(url, data).then((response) => response.data)
      .then((data) => data.metaData),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const useUpdate = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    (data) => request.put(url, data),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};


