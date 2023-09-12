<template>
    <div class="all-books-container">
        <el-table :data="bookData" border >
            <el-table-column label="所有图书">
                <el-table-column prop="id" label="id" width="200"></el-table-column>
                <el-table-column prop="name" label="书名" width="200"></el-table-column>
                <el-table-column prop="author" label="作者" width="200"></el-table-column>
                <el-table-column prop="publishTime" label="出版日期" width="200"></el-table-column>
                <el-table-column prop="inventory" label="剩余数量" width="200"></el-table-column>
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

    margin: 40px auto;
}
</style>