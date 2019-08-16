import Vue from "vue"
import App from "@/vueSource/App.vue"
// import VueRouter from "vue-router"
// import router from "@/vueSource/vueRouter"
// Vue.use(VueRouter)
new Vue({
    el: "#app",
    // router,
    render: (h: any) => h(App),
    data() {
        return {
            a: "hello world"
        }
    },
    template: '<h1>{{a}}</h1>'
})

