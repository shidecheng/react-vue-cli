<template>
    <div>
        {{message}}
        <Demo/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            message: 'hello world!'
        }
    }, 
    components: {
        Demo: () => import(/* webpackChunkName: "Demo" */ "@/vueSource/components/Demo.vue")
    }
})
</script>

