import { create } from 'zustand';


const useNotificationStore = create((set) => ({
  isNewNoti: false,

  hasNewNoti: () => {
    set({ isNewNoti: true });
  },
  hasReadNoti: () => {
    set({ isNewNoti: false });
  },

}));

export default useNotificationStore;

