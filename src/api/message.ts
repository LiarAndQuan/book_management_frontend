import request from "@/utils/request.ts";

export function editMessage(user: any) {
    return request({
        url: 'edit',
        method: 'post',
        data: user
    })
}