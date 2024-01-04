export function useGetCurrentUserRole(){
    const role = localStorage.getItem('token');

    return role;
}