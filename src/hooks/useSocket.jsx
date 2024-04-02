import useSocketStore from '../stores/useSocketStore';

const useSocket = () => {
    const { socket } = useSocketStore();

    const subcribeHello = () => {
        socket.on('hello', (args) => {
            console.log(args)
        })
    }


    return {
        subcribeHello
    };
}

export default useSocket