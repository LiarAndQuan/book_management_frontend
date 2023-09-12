import request from "@/utils/request.ts";

export function getAllBooks() {
    return request({
        url: 'getAllBooks',
        method: 'get'
    })
}
