<template>
    <div>
        <img src="./icon.png" />
        {{name}}
    </div>
</template>

<script lang="ts">
    const name: string = "123";
    export default {
        data() {
            return {
                name
            }
        },
    }
</script>

<style scoped>

</style>