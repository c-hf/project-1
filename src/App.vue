<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/demo1">Demo1 - 生命周期</router-link> |
            <router-link to="/demo2">Demo2 - 选项数据</router-link> |
            <router-link to="/demo3">Demo3 - 模板语法</router-link> |
            <router-link to="/demo4">Demo4 - 计算属性</router-link> |
            <router-link to="/demo5">Demo5 - Class与style绑定</router-link> |
            <router-link to="/test1">练习 - 1</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="less">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>