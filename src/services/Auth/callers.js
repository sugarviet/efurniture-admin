import { request } from "@utils/request";

const api = 'http://34.126.181.161:4646/api/v1/auth/login'

export const login = async(data) => {
    const res = await request.post(api, data);

    return res.data;
}