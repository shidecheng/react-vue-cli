export default [
    {
        path: "/", 
        component: () => import(/*webpackChunkName: "components/Demo" */"@/vueSource/components/Demo.vue"),
    },
    {
        path: "/demo2", 
        component: () => import(/*webpackChunkName: "components/Demo2" */"@/vueSource/components/Demo2.vue")
    },  
    // {
    //     path: "/demo3", 
    //     component: () => import(/*webpackChunkName: "components/Demo3" */"@/vueSource/components/Demo3.vue")
    // }
]