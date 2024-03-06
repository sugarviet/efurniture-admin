import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { request } from '@utils/request';

const fetcher = async (url, params) => {
  const data = await request.get(url, { params: params })
    .then((response) => response.data)
    .then((data) => data.metaData);

  return data;
};


export const useFetch = (url, params) => {
  return useQuery([url, params], () => fetcher(url, params));
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

export const useDelete = (url, params, onSuccessAPI, onErrorAPI, key) => {
  return useGenericMutation(
    (id) => request.delete(`${url}/${id}`),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};


export const usePost = (url, params, onSuccessAPI, onErrorAPI, key) => {
  return useGenericMutation(
    (data) => request.post(url, data),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const useUpdate = (url, params, onSuccessAPI, onErrorAPI, key) => {
  return useGenericMutation(
    (data) => request.put(url, data),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};


export const useUpdateWithURl = (params, onSuccessAPI, onErrorAPI, key) => {
  return useGenericMutation(
    (data) =>{
      console.log(data)
      return  request.put('/')
    },
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};
