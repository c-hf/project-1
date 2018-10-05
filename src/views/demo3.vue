<template>
    <div>
        <h1>demo - 3</h1>
        <h2>模板语法</h2>

        <h3>-------- { {msg} } ------------</h3>
        <div>dat: {{msg}}</div>

        <h3>--------- { { num + 1 } } ------------</h3>
        <div>data: 表达式 num + 1 (num = 1)  ->  {{ num + 1 }}</div>

        <h3>-------- v-html -----------</h3>
        <!-- 将 span 的值转化为 html 插入到 div 中 -->
        <div v-html="span"></div>

        <h3>-------- v-on - 绑定事件 --------</h3>
        <!-- 绑定事件  -->
        <button v-on:click="say()">点击</button>


        <h3>-------- v-bind -绑定属性-------</h3>
        <!-- 绑定属性 到某个值  -->
        <div class="red" v-bind:class="color">color</div>
        <!-- @ 是 v-on 的简写方式 -->
        <button @click="change()">修改颜色</button>

        <h3>-------- { {message | filter} } - 过滤器 --------</h3>
        <div>{{message | filter}}</div>
        
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

        // 存放事件函数
        methods: {
            change() {
                this.color === 'blue' ? this.color = 'red' : this.color = 'blue';
            },
            say() {
                alert('hi');
            }
        },

        // 存放过滤器函数
        filters: {
            filter() {
                return '123456 filter';
            }
        }
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