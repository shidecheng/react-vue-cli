<template>
    <div>
        <ul class="demo">
            <li v-for="(val, key) in list" :key="key">
                {{val}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts`">
 import Vue from "vue"
 export default Vue.extend({
    data(){
        return {
            list: [
                1,
                2,
                3
            ]
        }
    }
})
</script>
<style scoped> 
    .demo {
    width: '300px';
    height: "300px";
    border: "1px solid red"
  }
</style>