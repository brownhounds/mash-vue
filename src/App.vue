<script setup lang="ts">
import { state } from './state/state';
</script>

<template>
    <component :is="state.game.scene" />
</template>

<style scoped lang="scss"></style>
