<template>
    <div>
        <h1 class="h1">{{count}}</h1>
        <button type="button" @click="handleClick">click</button>
    </div> 
</template>
<script lang="ts">
  import Vue from "vue"
  import { rand1 } from "@/vueSource/utils/rand"
 console.log(rand1)
//   import { head } from "lodash"
//   head([1,2,3])
//   import("./pagea").then((res) => {
//       console.log(res)
//   })
  export default Vue.extend({
      data() {
          return {
              count: 1
          }
      },
      methods: {
          handleClick() {
              this.count++
          }
      }
  })
</script>
<style scoped>
    .h1 {
        width: "100px";
        height: "100px";
        background: "red";
    }
</style>