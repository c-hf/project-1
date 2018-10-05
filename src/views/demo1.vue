<template>
    <div>
        <h1>demo - 1</h1>
        <h2>生命周期</h2>
        <div>Hello World!</div>
    </div>
</template>

<script>
    // 模块生命周期

    export default {
        beforeCreate() {
            // 组件刚刚被创建
            console.log('beforeCreate');
        },

        created() {
            // 组件创建完成
            console.log('created');
        },

        beforeMount() {
            // 挂载之前
            console.log('beforeMount');
        },

        mounted() {
            // 挂载之后
            console.log('mounted');
        },

        beforeDestory() {
            // 组件销毁前调用
            console.log('beforeDestory');
        },

        destoryed() {
            // 组件销毁后调用
            console.log('destoryed');
        },

    }
</script>