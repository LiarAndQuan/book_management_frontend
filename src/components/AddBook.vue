<template>
    <el-form-item class="input-box" label="书名">
        <el-input v-model="book.name"/>
    </el-form-item>
    <el-form-item class="input-box" label="作者">
        <el-input v-model="book.author"/>
    </el-form-item>
    <el-form-item class="input-box" label="库存">
        <el-input v-model="book.inventory"/>
    </el-form-item>
    <el-form-item label="出版日期">
        <el-date-picker v-model="book.publishTime" placeholder="选择出版日期" type="date">

        </el-date-picker>
    </el-form-item>
    <el-button @click="submit">
        添加图书
    </el-button>
</template>

<script lang="ts" setup>


import {ref} from "vue";
import {addbook} from "@/api/addbook.ts";
import {ElMessage} from "element-plus";


let book = ref({})

function submit() {
    addbook(book.value).then(
        (response) => {
            ElMessage({
                type: 'success',
                message: '添加成功'
            })
        }
    )
}
</script>

<style scoped>
.input-box {
    width: 400px;
}
</style>