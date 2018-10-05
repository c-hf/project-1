import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Demo1 from "./views/demo1.vue";
import Demo2 from "./views/demo2.vue";
import Demo3 from "./views/demo3.vue";
import Demo4 from "./views/demo4.vue";
import Demo5 from "./views/demo5.vue";
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
            path: "/test1",
            name: "test1",
            component: Test
        },
    ]
});