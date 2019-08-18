<template>
    <div>
        <ul class="demo2">
            <li v-for="(val, key) in list" :key="key">
                {{val}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
console.log("process", process.env.NODE_ENV)
 import Vue from "vue"
 import { rand1 } from "@/vueSource/utils/rand"
 console.log(rand1)
 export default Vue.extend({
    data(){
        return {
            list: [
                1,
                2,
                3,
                4,
            ]
        }
    }
})
</script>
<style scoped> 
    .demo2 {
    width: 300px;
    height: 300px;
    border: 1px solid red;
    background: url("../../assets/images/_Search.svg") no-repeat;
  }
</style>