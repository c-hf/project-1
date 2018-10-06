<template>
    <div>
        <h1>demo - 6</h1>
        <h2>条件渲染</h2>

        <h3>-------- v-if ------------</h3>
        <div v-if="ok">看见我了</div>
        <button @click="setOk">点击</button>

        <h3>-------- v-else ------------</h3>
        <h3>-------- v-else-if ------------</h3>
        <div v-if="type === 'A'">
            v-if - A
        </div>
        <div v-else-if="type === 'B'">
            v-else-if - B
        </div>
        <div v-else-if="type === 'C'">
            v-else-if - C
        </div>
        <div v-else>
            v-else - not A/B/C
        </div>
        <button @click="setTypeA">A</button>
        <button @click="setTypeB">B</button>
        <button @click="setTypeC">C</button>
        <button @click="setTypeD">D</button>


        <h3>-------- v-show ------------</h3>
        <div v-if="show">看见我了</div>
        <button @click="setShow">点击</button>
    </div>
</template>

<script>
    export default {
        // data() 中存放模板中所有的变量
        data() {
            return {
                ok: true,
                type: 'D',
                show: true
            }
        },

        methods: {
            setOk(e) {
                console.log(e);
                this.ok ? this.ok = false : this.ok = true;
            },
            setTypeA(e) {
                this.type = 'A';
            },
            setTypeB(e) {
                this.type = 'B';
            },
            setTypeC(e) {
                this.type = 'C';
            },
            setTypeD(e) {
                this.type = 'D';
            },
            setShow(e) {
                this.show ? this.show = false : this.show = true;
            }
        },

    }
</script>