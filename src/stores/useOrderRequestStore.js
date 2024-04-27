import { create } from 'zustand';

const useOrderRequestStore = create((set) => ({
  orderRequest: [],
 
  setOrderRequest: (orderRequest) => {
    set({ orderRequest });  

  },

}));

export default useOrderRequestStore;

