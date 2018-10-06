<template>
    <div>
        <h1>demo - 9</h1>
        <h2>表单控件绑定</h2>
        <input type="text" v-model="message">
        <p>input: {{ message }}</p>

        <div>----------多选框--------------</div>
        <!-- 多选框 -->
        <label for="check-jack">Jack</label>
        <input type="checkbox" name="Jack" id="check-jack" value="Jack" v-model="checkBoxs">
        <br>
        <label for="check-boy">Boy</label>
        <input type="checkbox" name="Boy" id="check-boy" value="Boy" v-model="checkBoxs">
        <br>
        <label for="check-bob">Bob</label>
        <input type="checkbox" name="Bob" id="check-bob" value="Bob" v-model="checkBoxs">

        <br>
        <p>{{ checkBoxs }}</p>

        <div>----------选择列表--------------</div>
        <select name="select" id="selct" v-model="selected">
            <option value="请选择" disabled>请选择</option>
            <option value="A" selected>A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
        <p>{{ selected }}</p>


    </div>
</template>

<script>
    export default {
        data(){
			return{
                message: 'helloworld',
                checkBoxs: [],
                selected:'A'
            }
		},
		methods:{

		}
    }
</script>
