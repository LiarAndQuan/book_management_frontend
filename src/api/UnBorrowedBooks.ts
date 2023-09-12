import request from "@/utils/request.ts";


export function getUnBorrowedBooks(userId: number) {
    return request({
        url: 'unBorrowedBooks/' + userId,
        method: 'get'
    })
}

export function borrowBook(bookId: number, userId: number) {
    return request({
        url: 'borrowBook/' + bookId + '/' + userId,
        method: 'get'
    })
}