<script setup lang="ts">
const { isValid } = defineProps<{ isValid: boolean }>();
</script>

<template>
    <p v-if="!isValid">
        Make sure all the fields are populated. Make sure that every last answer
        is intentionally bad and super funny!
    </p>
</template>

<style scoped lang="scss">
@import '../../scss/base.scss';
p {
    color: $red;
}
</style>
