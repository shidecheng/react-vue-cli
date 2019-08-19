<template>
  <div class="demo3">
      {{message}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend<any, any, any>({
    data() {
        return {
            message: "123"
        }
    }
})
</script>
<style scoped>
    .demo3 {
        width: 100px;
        height: 100px;
        background: green;
    }
</style>