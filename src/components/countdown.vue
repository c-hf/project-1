<template>
	<p :style="{color: col}">{{time}}</p>
</template>


<script>
	export default{
		data() {
			return {
				time: 10
			}
		},
		mounted() {
			let vm = this;
			let t = setInterval(function(){
				vm.time--;
				if(vm.time == 0){
                    clearInterval(t);
				    vm.$emit("end");    // => this.$emit() 自定义事件 事件名字与发生地点
				}
			},1000)
		},
		props: {    // 定义属性
			col:{
				type: String,   // 定义传入值的类型
				default: '#000' // 定义默认值
			}
		}
	}
</script>