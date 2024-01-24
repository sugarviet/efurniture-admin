import { useGetAllUsers } from "@services/Users/services";


export function useUser(){
    const {data: userData, isLoading} = useGetAllUsers();

    return{
        userData,
        isLoading
    }
}