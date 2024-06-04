<script setup lang="ts">
const { number } = defineProps<{ number?: number }>();
</script>

<template>
    <div>
        <span>{{ number || '???' }}</span>
    </div>
</template>

<style scoped lang="scss">
@import '../../scss/base.scss';
div {
    font-size: 136px;
    margin-bottom: 36px;

    & span {
        @include mouse-memoirs-regular;
    }
}
</style>
