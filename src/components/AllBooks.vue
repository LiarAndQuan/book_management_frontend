<template>
    <div class="all-books-container">
        <el-table :data="bookData" border height="600">
            <el-table-column align="center" label="所有图书">
                <el-table-column align="center" label="id" prop="id"></el-table-column>
                <el-table-column align="center" label="书名" prop="name"></el-table-column>
                <el-table-column align="center" label="作者" prop="author"></el-table-column>
                <el-table-column align="center" label="出版日期" prop="publishTime"></el-table-column>
                <el-table-column align="center" label="剩余数量" prop="inventory"></el-table-column>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {getAllBooks} from "@/api/allbooks.ts";

let bookData = ref([]);

onMounted(
    () => {
        getAllBooks().then(
            (response) => {
                bookData.value = response.data;
            }
        )
    }
)
</script>

<style scoped>
.all-books-container {
    margin-right: 100px;
}
</style>