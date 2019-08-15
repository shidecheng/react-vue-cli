<template>
    <div id="a" class="abc">
        {{message}}
        <Demo/>
        <Demo2/>
    </div>
</template>
<script lang="ts">
import "@/assets/styles/style"
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            message: 'hello world!'
        }
    }, 
    components: {
        Demo: () => import("@/vueSource/components/Demo.vue"),
        Demo2: () => import("@/vueSource/components/Demo2.vue")
    }
})
</script>
<style scoped>
  .abc {
      color: "green";
  }
</style>

