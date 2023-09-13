import request from "@/utils/request.ts";


export function addbook(book: any) {
    return request({
        url: 'addBook',
        method: 'post',
        data: book
    })
}