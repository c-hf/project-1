<template>
    <div>
        <h1>demo - 5</h1>
        <h2>Class 与 style 绑定</h2>

        <h3>-------- v-bind -- Class 绑定----------</h3>
        <h4> 第一种绑定方式</h4>
        <div v-bind:class="{'active': isActive, 'text-danger': hasError}">
            class
        </div>
        <button @click="change">切换为错误</button>

        <h4>第二种</h4>
        <div :class="classObject">
            class - 2
        </div>
        <button @click="change2">切换为错误</button>

        <!-- .... -->
		<div>-----------Style 绑定-------------</div>
		
		<div style="color: red; fontSize: 36px">123</div>

		<div v-bind:style="{ 'color': activeColor, 'fontSize': fontSize + 'px' }">style1</div>

		<div v-bind:style="styleObject">style2</div>

		<div v-bind:style="[baseStyles, overridingStyles]">style3</div>


    </div>
</template>

<script>
    export default {
        // data() 中存放模板中所有的变量
        data() {
            return {
                isActive: true,
                hasError: false,
                // 第一种比较好
                classObject: {
                    'active': true,
                    'text-danger': false,
                },


                activeColor: 'black',
				fontSize: 30,

				styleObject:{
					'color': 'red',
					'fontSize': '43px'
				},

				baseStyles:{
					color: 'red'
				},
				overridingStyles:{
					fontSize: '53px'
				}
            }
        },

        methods: {
            change(e) {
                this.hasError? this.hasError = false : this.hasError = true;
            },
            change2(e) {
                this.classObject['text-danger']? this.classObject['text-danger'] = false : this.classObject['text-danger'] = true;
            }
        },

    }
</script>

<style lang="less">
    .active {
        color: blue;
    }
    .text-danger {
        background: red;
    }
</style>