<template>
    <div>
        <h1>demo - 4</h1>
        <h2>计算属性</h2>

        <h3>-------- { {msg} } ------------</h3>
        <div>data: {{ msg.split('').reverse().join('') }}</div>

        <h3>-------- { {setMsg} } ------------</h3>
        <div>data: {{ setMsg }}</div>

    </div>
</template>

<script>
    export default {
        // data() 中存放模板中所有的变量
        data() {
            return {
                msg: 'hello world - 3',
                num: 1,
                span: '<span>123</span>',
                color: 'red',
                message: 'message'
            }
        },

        // 计算属性
        computed: {
            setMsg() {
                return this.msg.split('').reverse().join('');
            }
        },

    }
</script>

<style lang="less">
    .red {
        color: red;
    }
    .blue {
        color: blue;
    }
</style>