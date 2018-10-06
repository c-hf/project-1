<template>
    <div>
        <h1>demo - 10</h1>
        <h2>自定义组件</h2>
        <div>----------------------------------</div>
        <count-down col="red" @end="ending"></count-down>

    </div>
</template>

<script>

    import CountDown from '@/components/countdown.vue'
    export default {
        data(){
			return{

            }
		},
		components: {       // 注册组件 'count-down' 是取的别名
            'count-down': CountDown
        },
        methods: {
            ending() {
                alert('end');
            }
        }
    }
</script>
