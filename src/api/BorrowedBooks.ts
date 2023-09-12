import request from "@/utils/request.ts";


export function getBorrowedBooks(userId: number) {
    return request({
        url: 'borrowedBooks/' + userId,
        method: 'get'
    })
}