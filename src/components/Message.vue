<template>
    <el-form label-width="120px">
        <el-form-item class="input-box" label="姓名">
            <el-input v-model="user.name"/>
        </el-form-item>
        <el-form-item class="input-box" label="用户名">
            <el-input v-model="user.username"/>
        </el-form-item>
        <el-form-item class="input-box" label="密码">
            <el-input v-model="user.password" show-password type="password"/>
        </el-form-item>
        <el-form-item class="input-box" label="电话号码">
            <el-input v-model="user.phoneNumber"/>
        </el-form-item>
        <el-form-item label="性别">
            <el-select v-model="genderComputed">
                <el-option label="男" value="1"/>
                <el-option label="女" value="0"/>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>

import {computed, ref} from 'vue'
import {editMessage} from "@/api/message.ts";
import {ElMessage} from "element-plus";


let user = ref(JSON.parse(localStorage.getItem('user')));

const genderComputed = computed(() => {
    return user.value.gender == 1 ? '男' : '女';
})


const onSubmit = () => {
    editMessage(user.value).then(
        (response) => {
            localStorage.setItem('user', JSON.stringify(user.value));
            ElMessage({
                type: 'success',
                message: '修改成功'
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