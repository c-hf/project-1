<template>
    <div>
        <h1>demo - 8</h1>
        <h2>事件处理器</h2>
		<div id="example-1">
			<button v-on:click="counter = counter + 1">增加 1</button>
			<p>这个按钮被点击了 {{ counter }} 次。</p>
		</div>

        <br>		
		<div>---------------------------------</div>
		<div id="example-2">
		  	<!-- `greet` 是在下面定义的方法名 -->
		    <button @click="greet">Greet</button>
		</div>

		<br>
		<div>---------------------------------</div>

		<div id="example-3">
		  	<!-- `say` 是在下面定义的方法名 -->
		    <button @click="say('hi')">say</button>
		</div>

		<br>
		<div>-------------阻止事件冒泡-- .stop---------------</div>
		<div @click="dothis1" class="dothis1">
            dothis1
            <br>
			<button @click.stop="doThis2" class="doThis2">
				dothis2
			</button>
		</div>

        <a href="www.baidu.com" @click="a">baidu</a>


    </div>
</template>

<script>
    export default {
        data(){
			return{
				counter : 0
			}
		},
		methods:{
			greet(){
				this.counter = this.counter + 1;
				this.counter = this.counter - 1;
				this.counter = this.counter * 2;
				this.counter = this.counter * 2;
				this.counter = this.counter * 2;
				this.counter = this.counter * 2;
				this.counter = this.counter * 2;
				this.counter = this.counter * 2;

			},
			say(h){
				alert(h)
			},

			dothis1(){
				alert('dothis1')
			},

			doThis2(e){
                alert('dothis2');
            },
            a(e) {
                alert('a');
                e.preventDefault(); // 阻止默认行为
            }
		}

    }
</script>

<style lang="less">
    .dothis1 {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        border: 1px solid red;
    }
    .doThis2 {
        width: 80px;
        height: 40px;
        margin: 20px auto;
    }
</style>
