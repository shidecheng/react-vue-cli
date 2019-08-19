<template>
    <div>
        <h1 class="demo">{{count}}</h1>
        <demo3/>
        <button type="button" @click="handleClick">click</button>
    </div> 
</template>
<script lang="ts">
  import Vue from "vue"
  import Demo3 from "@/vueSource/components/Demo3.vue"
  import { rand1 } from "@/vueSource/utils/rand.ts" /* 如果用映射地址一定要跟后缀，用相对路径就不用跟后缀，因为编译器检测不到*/
  export default Vue.extend<any, any, any>({
      data() {
          return {
              count: 1
          }
      },
      components: {
          Demo3
      },
      methods: {
          handleClick() {
            //   this.count++
            this.$router.push('./demo2')
            this.$fn()
          }
      }
  })
</script>
<style scoped>
    .demo {
        width: 100px;
        height: 100px;
        background: red;
    }
</style>