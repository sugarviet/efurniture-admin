import { create } from 'zustand';

import { io } from "socket.io-client";
const api = 'https://dream-editor.tech'
const useSocketStore = create(() => ({
  socket: io(api),


}));

export default useSocketStore;

