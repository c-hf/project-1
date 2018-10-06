import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Demo1 from "./views/demo1.vue";
import Demo2 from "./views/demo2.vue";
import Demo3 from "./views/demo3.vue";
import Demo4 from "./views/demo4.vue";
import Demo5 from "./views/demo5.vue";
import Demo6 from "./views/demo6.vue";
import Demo7 from "./views/demo7.vue";
import Demo8 from "./views/demo8.vue";
import Demo9 from "./views/demo9.vue";
import Demo10 from "./views/demo10.vue";
import Demo11 from "./views/demo11.vue";
import Demo12 from "./views/demo12.vue";
import Demo13 from "./views/demo13.vue";
import Demo14 from "./views/demo14.vue";
import Demo15 from "./views/demo15.vue";
import Test from "./views/test.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import( /* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/demo1",
            name: "demo1",
            component: Demo1
        },
        {
            path: "/demo2",
            name: "demo2",
            component: Demo2
        },
        {
            path: "/demo3",
            name: "demo3",
            component: Demo3
        },
        {
            path: "/demo4",
            name: "demo4",
            component: Demo4
        },
        {
            path: "/demo5",
            name: "demo5",
            component: Demo5
        },
        {
            path: "/demo6",
            name: "demo6",
            component: Demo6
        },
        {
            path: "/demo7/:userId",  // 表示传入一个参数
            name: "demo7",
            component: Demo7
        },
        {
            path: "/demo8",
            name: "demo8",
            component: Demo8
        },
        {
            path: "/demo9",
            name: "demo9",
            component: Demo9
        },
        {
            path: "/demo10",
            name: "demo10",
            component: Demo10
        },
        {
            path: "/demo11",
            name: "demo11",
            component: Demo11
        },
        {
            path: "/demo12",
            name: "demo12",
            component: Demo12
        },
        {
            path: "/demo13",
            name: "demo13",
            component: Demo13
        },
        {
            path: "/demo14",
            name: "demo14",
            component: Demo14
        },
        {
            path: "/demo15",
            name: "demo15",
            component: Demo15
        },
        {
            path: "/test1",
            name: "test1",
            component: Test
        },
    ]
});