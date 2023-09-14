<template>
    <div class="menu-container">

        <div class="menu-item-container">
            <el-menu
                class="el-menu"
                default-active="1"
                router
            >
                <el-menu-item index="1">
                    <el-icon>
                        <document/>
                    </el-icon>
                    <span>所有图书</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-icon>
                        <CirclePlus/>
                    </el-icon>
                    <span>添加图书</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <el-icon>
                        <Remove/>
                    </el-icon>
                    <span>删除图书</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <MoreFilled/>
                    </el-icon>
                    <span>借还记录</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <el-icon>
                        <Edit/>
                    </el-icon>
                    <span>修改信息</span>
                </el-menu-item>
            </el-menu>
        </div>
    </div>

</template>

<script lang="ts" setup>

import {CirclePlus, Document, Edit, MoreFilled, Remove} from '@element-plus/icons-vue'
import {useRouter} from "vue-router";

let router = useRouter();
let user = JSON.parse(localStorage.getItem("user"));

function submit() {
    localStorage.removeItem("user");
    router.push('/');
}
</script>

<style>

.menu-container {
    margin-top: 122px;
}

.el-menu {

    height: 600px;
}


</style>