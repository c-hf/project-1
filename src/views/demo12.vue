<template>
    <div>
        <h1>demo - 12</h1>
        <h2>过渡效果</h2>

        <div>
            <button @click="show = !show">
                Toggle
            </button>
            <transition name="fade">
                <p v-show="show">hello</p>
            </transition>

            <!-- 1.显示状态 -> 2.隐藏  === leave 离开 (leave -> leave-active -> leave-to) 过程的三个状态

            1.隐藏状态 -> 2.显示  === enter 进入 (enter -> enter-active -> enter-to) 过程的三个状态 -->
        </div>
    </div>
</template>

<script>

    export default {
        data(){
			return{
                show: true
            }
        },

        methods: {

        }
    }
</script>

<style lang="less">
    .fade-enter-active,
    .fade-leave-active {
        transition: all .5s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>
