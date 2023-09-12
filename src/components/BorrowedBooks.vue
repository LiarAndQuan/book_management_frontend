<template>

    <div class="all-books-container">
        <el-table :data="bookData" border>
            <el-table-column align="center" label="已借阅图书">
                <el-table-column align="center" label="id" prop="id" width="200"></el-table-column>
                <el-table-column align="center" label="书名" prop="name" width="200"></el-table-column>
                <el-table-column align="center" label="作者" prop="author" width="200"></el-table-column>
                <el-table-column align="center" label="出版日期" prop="publishTime" width="200"></el-table-column>
                <el-table-column align="center" label="剩余数量" prop="inventory" width="200"></el-table-column>
                <el-table-column align="center" label="操作">
                    <template v-slot="scope">
                        <el-button @click="submit(scope.row.id)">归还</el-button>
                    </template>
                </el-table-column>
            </el-table-column>
        </el-table>
    </div>

</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {getBorrowedBooks, returnBook} from "@/api/BorrowedBooks.ts";

let bookData = ref([]);

let user = JSON.parse(localStorage.getItem('user'));

function submit(bookId: number) {
    returnBook(bookId, user.id).then(
        (response) => {
            bookData.value = bookData.value.filter(item => item.id !== bookId);
        }
    )
}

onMounted(
    () => {
        getBorrowedBooks(user.id).then(
            (response) => {
                bookData.value = response.data;
            }
        )
    }
)
</script>

<style scoped>

</style>