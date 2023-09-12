import request from "@/utils/request.ts";


export function getBorrowedBooks(userId: number) {
    return request({
        url: 'borrowedBooks/' + userId,
        method: 'get'
    })
}

export function returnBook(bookId: number, userId: number) {
    return request({
        url: 'returnBook/' + bookId + '/' + userId,
        method: 'get'
    })
}