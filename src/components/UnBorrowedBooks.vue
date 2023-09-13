<template>

    <div class="books-container">
        <el-table :data="bookData" border height="600">
            <el-table-column align="center" label="可借阅图书">
                <el-table-column align="center" label="id" prop="id"></el-table-column>
                <el-table-column align="center" label="书名" prop="name"></el-table-column>
                <el-table-column align="center" label="作者" prop="author"></el-table-column>
                <el-table-column align="center" label="出版日期" prop="publishTime"></el-table-column>
                <el-table-column align="center" label="剩余数量" prop="inventory"></el-table-column>
                <el-table-column align="center" label="操作">
                    <template v-slot="scope">
                        <el-button @click="commit(scope.row.id)">借阅</el-button>
                    </template>
                </el-table-column>
            </el-table-column>
        </el-table>
    </div>

</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {borrowBook, getUnBorrowedBooks} from "@/api/UnBorrowedBooks.ts";

let bookData = ref([]);

let user = JSON.parse(localStorage.getItem('user'));

function commit(bookId: number) {
    borrowBook(bookId, user.id).then(
        (response) => {
            bookData.value = bookData.value.filter(item => item.id !== bookId);
        }
    )
}

onMounted(
    () => {
        getUnBorrowedBooks(user.id).then(
            (response) => {
                bookData.value = response.data;
            }
        )
    }
)
</script>

<style scoped>
.books-container {
    margin-right: 100px;
}
</style>