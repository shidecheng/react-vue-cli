<template>
    <div>
        <div class="abc">ffefefe</div>
       <router-view/>
    </div>
</template>
<script lang="ts">
import "@/assets/styles/style"
import Vue from 'vue'
export default Vue.extend<any, any, any>({ /* 给类型是为了在Vue上增加全局属性时不会报错 */
    data() {
        return {
            message: 'hello world!'
        }
    }, 
    created() {
        console.log("http", this.$http)
        this.$fn()
    }
})
</script>
<style>
  .abc {
      color: green;
  }
</style>

