import { useState } from "react";
import useAuth from "../stores/useAuth";
import useNotificationStore from "../stores/useNotificationStore";
import useSocketStore from "../stores/useSocketStore";
import useGetNotiByRole from "./useGetNotiByRole";
import { Modal } from "antd";
const useSocket = () => {
  const { role, accountId, clearTokens } = useAuth();
  const { socket } = useSocketStore();
  const { refreshNotification } = useGetNotiByRole();
  const { hasNewNoti } = useNotificationStore();
  
  const notificationSubscriptions = {
    admin: ["lowstockWareHouse", "lowstockInventory", "checkLogin"],
    staff: ["requestDeliveryTrip", "checkLogin"],
    superAdmin: ["checkLogin"]
  };

  const loginSocket = () => {
    socket.emit("login-user", accountId);
  };

  const subcribeToNoti = () => {
    loginSocket();
    const subscriptions = notificationSubscriptions[role] || [];
    subscriptions.forEach((eventName) => {
      socket.on(eventName, () => {
        if (eventName === "checkLogin") {
            Modal.confirm({
                title: "Warning",
                content: "Your account has been logged in from another location",
                okButtonProps: { style: { backgroundColor: "black" } }, 
                cancelButtonProps: { style: { display: "none" } }, 
                onOk: () => {
                  clearTokens();
                },
                
              });
        }
      
        refreshNotification();
        hasNewNoti();
      });
    });
  };

  return {
    subcribeToNoti,
    loginSocket,
    socket,
  };
};

export default useSocket;
