import request from "@/utils/request.ts";


export function getRecordsById(userId: number) {
    return request({
        url: 'getRecords/' + userId,
        method: 'get'
    })
}

export function getAllRecords() {
    return request({
        url: 'getAllRecords',
        method: 'get'
    })
}