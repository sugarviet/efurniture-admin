import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import { notification } from "antd";
import {
  getAllRooms, 
  getRoomDetail,
  createRoom, 
  updateRoom,
  disableRoom
} from "./callers";

const API_KEY = {
    GET_ALL_ROOMS: 'rooms',
    GET_ROOM_DETAIL: 'room'
}

export const useGetAllRooms = () => {
    return useQuery({
      queryKey: [API_KEY.GET_ALL_ROOMS],
      queryFn: getAllRooms,
    });
  };

  export const useGetRoomDetail = (id) => {
    return useQuery(
      {
        queryKey: [API_KEY.GET_ROOM_DETAIL, id],
        queryFn: () => getRoomDetail(id),
      },
    );
  };

  export const useCreateRoom = () => {
    const queryClient = useQueryClient();
  
    return useMutation(createRoom, {
      onSuccess: () => {
        notification.success({
          message: "Create room successfully",
        });
        queryClient.invalidateQueries(API_KEY.GET_ALL_ROOMS);
      
      },
      onError: () => {
        notification.error({
          message: "Create room failed",
        });
      },
    });
  };

  export const useUpdateVoucher = () => {
    const queryClient = useQueryClient();
  
    return useMutation(updateRoom, {
      onSuccess: () => {
        notification.success({
          message: "Update room successfully",
        });
        queryClient.invalidateQueries(API_KEY.GET_ALL_ROOMS);
      
      },
      onError: () => {
        notification.error({
          message: "Update rooms failed",
        });
      },
    });
  };

  export const useDisableRoom = () => {
    const queryClient = useQueryClient();
  
    return useMutation(disableRoom, {
      onSuccess: () => {
        notification.success({
          message: "Disable room successfully",
        });
        queryClient.invalidateQueries(API_KEY.GET_ALL_ROOMS);
      
      },
      onError: () => {
        notification.error({
          message: "Disable room failed",
        });
      },
    });
  };