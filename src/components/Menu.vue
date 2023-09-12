<template>
    <div class="menu-container">
        <h2 class="menu-title">菜单</h2>
        <div class="menu-item-container">
            <el-menu
                router
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
            >
                <el-menu-item index="1">
                    <el-icon>
                        <document/>
                    </el-icon>
                    <span>图书查询</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-icon>
                        <location/>
                    </el-icon>
                    <span>借阅图书</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <el-icon>
                        <icon-menu/>
                    </el-icon>
                    <span>归还图书</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <setting/>
                    </el-icon>
                    <span>修改信息</span>
                </el-menu-item>
            </el-menu>
        </div>
    </div>

</template>

<script lang="ts" setup>

import {
    Document,
    Menu as IconMenu,
    Setting,
    Location,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

</script>

<style>

.menu-container {

    .menu-title {
        width: 100%;
    }

    .menu-item-container {
        width: 70%;
    }
}

</style>