<template>
    <div>
        <h1>demo - 14</h1>
        <h2>状态管理 vuex</h2>
        <div>{{ msg }}</div>
        <div>{{ num }}</div>
        <button @click="change">change</button>
    </div>
</template>

<script>

    export default {
        data(){
			return{
                msg: this.$store.state.count,
                num: this.$store.state.num
            }
        },

        methods: {
            change(e) {
                // 修改公共数据
                this.$store.dispatch('inc', 10000);
                // vuex 取数据
                this.msg = this.$store.state.count;
                this.num = this.$store.state.num;
            }
        },
        
    
    }
</script>
