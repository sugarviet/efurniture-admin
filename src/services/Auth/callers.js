import { request } from "@utils/request";

export const login = async(data) => {
    const res = await request.post('/auth/login', data);

    return res.data;
}