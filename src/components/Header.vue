<script setup lang="ts">
const { label } = defineProps<{ label: string }>();
</script>

<template>
    <h1>{{ label }}</h1>
</template>

<style scoped lang="scss">
@import '../scss/base.scss';
h1 {
    font-size: 64px;
    color: $blue;
    margin-top: 0;
    margin-bottom: 24px;
    @include mouse-memoirs-regular;
}
</style>
