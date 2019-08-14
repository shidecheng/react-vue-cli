import Vue from "vue"
import App from "@/vueSource/App.vue"
new Vue({
    el: "#app",
    render: (h: any) => h(App),
    data() {
        return {
            a: 123
        }
    },
    template: '<h1>{{a}}</h1>'
})

