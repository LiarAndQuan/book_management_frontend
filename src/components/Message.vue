<template>
    <el-form :model="form" label-width="120px">
        <el-form-item label="姓名">
            <el-input v-model="user.name"/>
        </el-form-item>
        <el-form-item label="用户名">
            <el-input v-model="user.username"/>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="user.password"/>
        </el-form-item>
        <el-form-item label="电话号码">
            <el-input v-model="user.phoneNumber"/>
        </el-form-item>
        <el-form-item label="性别">
            <el-select v-model="user.gender">
                <el-option label="男" value="1"/>
                <el-option label="女" value="0"/>
            </el-select>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>

import {ref} from 'vue'


let user = ref(JSON.parse(localStorage.getItem('user')));
user.value.gender = user.gender == 1 ? '男' : '女';

const onSubmit = () => {

}

</script>