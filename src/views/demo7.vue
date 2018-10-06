<template>
    <div>
        <h1>demo - 7</h1>
        <h2>列表渲染</h2>

        <h3>-------- v-for ---"item in items"-------</h3>
        <ul id="example-1">
            <li v-for="item in items" :key="item.id">
                {{ item.message }}
            </li>
        </ul>


        <h3>-------- v-for ---"(item, index) in items"-------</h3>
        <ul id="example-2">
            <li v-for="(item, index) in items" :key="index">
                {{ item.message }}
                {{ index }}
            </li>
        </ul>

        <h3>-------- v-for ---"(item, index) in obj"-------</h3>
        <ul id="example-2">
            <li v-for="(value, key) in obj" :key="key">
                {{ key }}:
                {{ value }}
            </li>
        </ul>


    </div>
</template>

<script>
    export default {
        // data() 中存放模板中所有的变量
        data() {
            return {
                items: [{
                    id: 1,
                    message: "foo"
                }, {
                    id: 2,
                    message: "bar"
                }],

                obj: {
                    firstName: 'John',
                    lastName: 'Doe',
                    age: 30
                }
            }
        },
        mounted() {
            alert(this.$route.params.userId);
            alert(this.$route.query.plan);
            this.router
        }
    }
</script>
