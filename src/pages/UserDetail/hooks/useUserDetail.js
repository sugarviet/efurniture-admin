import { useGetAllUsers } from "../../../services/Products/services";

export function useUser(){
    const {data: userData, isLoading} = useGetAllUsers();

    return{
        userData,
        isLoading
    }
}