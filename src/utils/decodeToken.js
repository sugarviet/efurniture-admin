import { jwtDecode } from "jwt-decode";

export function decodeToken(access_token){

    const decode = jwtDecode(access_token);

    return decode
}