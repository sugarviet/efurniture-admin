import { create } from 'zustand';

import { io } from "socket.io-client";

const useSocketStore = create(() => ({
  socket: io('http://34.126.181.161:4646'),


}));

export default useSocketStore;

