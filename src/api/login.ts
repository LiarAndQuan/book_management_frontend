import request from "@/utils/request.ts";

export function login(user: any) {
    return request({
        url: 'login',
        method: 'post',
        data: user
    })
}