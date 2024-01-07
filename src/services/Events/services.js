import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import { notification } from "antd";
import {
  getAllEvents,
  createEvent,
  disableEvent, 
  getEventDetail, 
  updateEvent
} from "./callers";

const API_KEY = {
    GET_ALL_EVENTS: 'events',
    GET_EVENTS_DETAIL: 'event'
}

export const useGetAllEvents = () => {
    return useQuery({
      queryKey: API_KEY.GET_ALL_EVENTS,
      queryFn: getAllEvents,
    });
  };

  export const useGetEventDetail = (id) => {
    return useQuery(
      {
        queryKey: [API_KEY.GET_EVENTS_DETAIL, id],
        queryFn: () => getEventDetail(id),
      },
    );
  };

  export const useCreateEvent = () => {
    const queryClient = useQueryClient();
  
    return useMutation(createEvent, {
      onSuccess: () => {
        notification.success({
          message: "Create event successfully",
        });
        queryClient.invalidateQueries(API_KEY.GET_ALL_EVENTS);
      
      },
      onError: () => {
        notification.error({
          message: "Create event failed",
        });
      },
    });
  };

  export const useUpdateEvent = () => {
    const queryClient = useQueryClient();
  
    return useMutation(updateEvent, {
      onSuccess: () => {
        notification.success({
          message: "Update event successfully",
        });
        queryClient.invalidateQueries(API_KEY.GET_ALL_EVENTS);
      
      },
      onError: () => {
        notification.error({
          message: "Update event failed",
        });
      },
    });
  };

  export const useDisableEvent = () => {
    const queryClient = useQueryClient();
  
    return useMutation(disableEvent, {
      onSuccess: () => {
        notification.success({
          message: "Disable event successfully",
        });
        queryClient.invalidateQueries(API_KEY.GET_ALL_EVENTS);
      
      },
      onError: () => {
        notification.error({
          message: "Disable event failed",
        });
      },
    });
  };