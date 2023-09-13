<template>
    <div class="all-books-container">
        <el-table :data="records" border height="600">
            <el-table-column align="center" label="记录">
                <el-table-column align="center" label="借用人" prop="username"></el-table-column>
                <el-table-column align="center" label="书名" prop="bookName"></el-table-column>
                <el-table-column align="center" label="借出时间" prop="borrowTime"></el-table-column>
                <el-table-column align="center" label="还书时间" prop="returnTime" w></el-table-column>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts" setup>

import {onMounted, ref} from "vue";
import {getAllRecords, getRecordsById} from "@/api/record.ts";

let records = ref([]);
let user = JSON.parse(localStorage.getItem("user"));

onMounted(
    () => {
        if (user.isAdmin) {
            getAllRecords().then(
                (response) => {
                    records.value = response.data;
                }
            )
        } else {
            getRecordsById(user.id).then(
                (response) => {
                    records.value = response.data;
                }
            )
        }
    }
)
</script>

<style scoped>
.all-books-container {

    margin-right: 100px;
}
</style>