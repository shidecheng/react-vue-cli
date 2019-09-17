<template>
    <div>
        {{message}}
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component
export default class DemoDecorator extends Vue{
    constructor() {
        super()
    }
    message: string = "abc";
    
}
</script>

<style>

</style>