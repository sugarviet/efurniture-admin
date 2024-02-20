import { api } from './api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const fetcher = async ({ queryKey, pageParam }) => {
  const [url, params] = queryKey;
  const response = await api.get(url, { params: { ...params, pageParam } });
  return response.data;
};


export const useFetch = (url, params) => {
  return useQuery([url, params], ({ queryKey }) => fetcher({ queryKey }));
};

const useGenericMutation = (func, url, params, onSuccessAPI, onErrorAPI) => {
  const queryClient = useQueryClient();
  return useMutation(func, {
    onSuccess:() => {
        onSuccessAPI();
    },
    onError: () => {
      onErrorAPI();
    },
    onSettled: () => {
      queryClient.invalidateQueries([url, params]);
    },
  });
};

export const useDelete = (url, params, onSuccessAPI, onErrorAPI) => {
  return useGenericMutation(
    (id) => api.delete(`${url}/${id}`),
    url,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const usePost = (url, params, onSuccessAPI, onErrorAPI) => {
  return useGenericMutation(
    (data) => api.post(url, data),
    url,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const useUpdate = (url, params, onSuccessAPI, onErrorAPI) => {
  return useGenericMutation(
    (data) => api.patch(url, data),
    url,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};
