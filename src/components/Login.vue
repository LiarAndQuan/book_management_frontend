<template>
    <div class="login-container">
        <el-input v-model=user.username placeholder="用户名"></el-input>
        <el-input v-model=user.password placeholder="密码"></el-input>
        <el-button type="primary" @click="login1"></el-button>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

let user = ref({
    username: '',
    password: ''
})

import {login} from "@/api/login.ts";

function login1() {
    login(user.value).then(
        (response) => {
            user.value = response.data
            localStorage.setItem('user', JSON.stringify(user.value));
        }
    )
}

</script>

<style scoped>

.login-container {
    width: 500px;
    height: 300px;
    margin: 300px auto;
    border: black solid 1px;
}
</style>