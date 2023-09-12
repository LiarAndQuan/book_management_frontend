import {createRouter, createWebHistory} from "vue-router";
import AllBooks from "@/components/AllBooks.vue";
import Layout from "@/components/Layout.vue";
import Login from "@/components/Login.vue";
import BorrowedBooks from "@/components/BorrowedBooks.vue";
import UnBorrowedBooks from "@/components/UnBorrowedBooks.vue";
import Message from "@/components/Message.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '',
                    component: AllBooks
                },
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
            path: '/login',
            component: Login
        }
    ]
})

export default router;