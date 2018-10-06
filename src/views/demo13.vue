<template>
    <div>
        <h1>demo - 13</h1>
        <h2>路由 router-link</h2>

        <div>-------------路由用法一---------</div>
        <router-link to="/demo8">Demo8 - 事件处理器</router-link>

        <div>-------------路由用法二---------</div>
        <router-link :to="{name: 'demo7', params: {userId: 123}}">Demo7</router-link>
        <!-- 这里的 name 指的是我们在 路由 router.js 中取得页面别名 name -->



        <div>-------------路由用法三---------</div>
        <router-link :to="{ name: 'demo7', params: {userId: 456}, query: {plan: 'private'} }">Demo7</router-link>

        <!-- http://10.10.123.226:8080/demo7/123?plan=private-->


        <div>-------------路由用法四---------</div>
        <button @click="toURL">跳转页面</button>


    </div>
</template>

<script>

    export default {
        data(){
			return{

            }
        },

        methods: {
            toURL() {
                // this.$router.push({ path: '/demo8' });
                this.$router.push({ name: 'demo7', params: {userId: 456}, query: {plan: 'private'} });
            }
        },
        
    
    }
</script>
