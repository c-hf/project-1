<template>
    <div>
        <h1>demo - 11</h1>
        <h2>DOM操作</h2>

        <div ref="head"></div>
        <div ref="test">1</div>
        <div ref="test">2</div>
        <div ref="test">3</div>
    </div>
</template>

<script>

    export default {
        data(){
			return{

            }
        },
        
        mounted() {
            // DOM已经生成
            this.$refs.head.innerHTML = 'helloworld';
            this.$refs.test.innerHTML = 'test';
            console.log(this.$refs.head);
            console.log(this.$refs.test);   // 同名的ref 会返回最后一个
        },

        methods: {

        }
    }
</script>
