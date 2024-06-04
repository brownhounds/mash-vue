<script setup lang="ts">
const { label } = defineProps<{ label?: string }>();
</script>

<template>
    <span>{{ label }}</span>
</template>

<style scoped lang="scss">
@import '../../scss/base.scss';
span {
    font-size: 28px;
    @include mouse-memoirs-regular;
}
</style>
