<template>
    <div>
        <h1>{{count}}</h1>
        <button type="button" @click="handleClick">click</button>
    </div> 
</template>
<script lang="ts">
  import Vue from "vue"
  import { head }from "lodash"
  head([1,2,3])
  import(/* webpackChunkName: "pagea" */ "./pagea").then((res) => {
      console.log(res)
  })
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