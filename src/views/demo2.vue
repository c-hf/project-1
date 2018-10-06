<template>
    <div>
        <h1>demo - 2</h1>
        <h2>选项数据</h2>

        <h3>--------------------------</h3>
        <div>{{msg}}</div>

        <h3>--------------------------</h3>
        <div>computed: {{aDouble}}</div>

        <h3>--------------------------</h3>
        <div @click="say">点击</div>
    </div>
</template>

<script>
    // data()

    export default {
        // data() 中存放模板中所有的变量
        data() {
            return {
                msg: 'hello world - 2',
                num: 1
            }
        },

        // computed 是一个对象 而不是函数，它的里面包含了各种函数
        // aDouble() 是一个函数
        computed: {
            aDouble() {
                return this.num * 2;
            }
        },

        // 存放事件函数
        methods: {
            say(e) {
                alert('hi');
            }
        }
    }
</script>