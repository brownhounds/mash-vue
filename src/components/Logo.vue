<script setup lang="ts">
const { size } = defineProps<{ size?: number }>();
</script>

<template>
    <h1 :style="{ fontSize: size ? `${size}px` : '136px' }">
        <span>M</span>
        <span>A</span>
        <span>S</span>
        <span>H</span>
    </h1>
</template>

<style scoped lang="scss">
@import '../scss/base.scss';
h1 {
    margin-top: 0;
    margin-bottom: 24px;

    & span {
        color: $blue;
        margin-right: 20px;
        margin-left: 20px;
        @include mouse-memoirs-regular;
    }
}
</style>
