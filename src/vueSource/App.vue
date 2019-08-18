<template>
    <!-- <div id="a" class="abc">
        {{message}}
        <Demo/>
        <Demo2/>
    </div> -->
    <router-view/>
</template>
<script lang="ts">
// import "@/assets/styles/style"
import Vue from 'vue'
// import Demo from "@/vueSource/components/Demo.vue"
// import Demo2 from "@/vueSource/components/Demo2.vue"
export default Vue.extend({
    data() {
        return {
            message: 'hello world!'
        }
    }, 
    created() {
        console.log("http", this.$http)
    }
    // components: {
    //     Demo,
    //     Demo2,
    // }
})
</script>
<style scoped>
  .abc {
      color: green;
  }
</style>

