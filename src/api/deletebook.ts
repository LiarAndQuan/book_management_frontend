import request from "@/utils/request.ts";


export function deletebook(bookId: number) {
    return request({
        url: 'deletebook/' + bookId,
        method: 'get'
    })
}