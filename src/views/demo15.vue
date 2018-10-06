<template>
    <div>
        <h1>demo - 15</h1>
        <h2>slot 插槽 </h2>
        <!--  常用于组件调用中 -->
        <solts>
            <div>123</div>
            <p>456</p>

            <p slot="bottom">66666</p>
        </solts>
    </div>
</template>

<script>
    import solts from '@/components/solt.vue'

    export default {
        data(){
			return{

            }
        },

        methods: {

        },
        components: {
            solts
        }
    
    }
</script>
