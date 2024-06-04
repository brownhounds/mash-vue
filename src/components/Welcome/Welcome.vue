<script setup lang="ts">
import Layout from '../Layout.vue';
import Button from '../Button.vue';
import Logo from '../Logo.vue';

import { state } from '../../state/state';
const { game } = state;
</script>

<template>
    <Layout>
        <Logo />
        <Button label="Start New Game" @click="game.nextScene()" />
    </Layout>
</template>

<style scoped lang="scss"></style>
