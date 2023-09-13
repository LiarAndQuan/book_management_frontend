import {createRouter, createWebHistory} from "vue-router";
import AllBooks from "@/components/AllBooks.vue";
import Layout from "@/components/Layout.vue";
import Login from "@/components/Login.vue";
import BorrowedBooks from "@/components/BorrowedBooks.vue";
import UnBorrowedBooks from "@/components/UnBorrowedBooks.vue";
import Message from "@/components/Message.vue";
import AdminLayout from "@/components/AdminLayout.vue";
import AddBook from "@/components/AddBook.vue";
import DeleteBook from "@/components/DeleteBook.vue";
import Record from "@/components/Record.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Login,
        },
        {
            path: '/user',
            component: Layout,
            children: [
                {
                    path: '1',
                    component: AllBooks
                },
                {
                    path: '2',
                    component: UnBorrowedBooks
                },
                {
                    path: '3',
                    component: BorrowedBooks
                },
                {
                    path: '4',
                    component: Message
                }
            ]
        },
        {
            path: '/admin',
            component: AdminLayout,
            children: [
                {
                    path: '1',
                    component: AllBooks
                },
                {
                    path: '2',
                    component: AddBook
                },
                {
                    path: '3',
                    component: DeleteBook
                },
                {
                    path: '4',
                    component: Record
                },
                {
                    path: '5',
                    component: Message
                }
            ]
        }
    ]
})


export default router;