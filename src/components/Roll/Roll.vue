<script setup lang="ts">
import Button from '../Button.vue';
import Header from '../Header.vue';
import LuckyNumber from './LuckyNumber.vue';
import Layout from '../Layout.vue';

import { state } from '../../state/state';

const {
    game: { eliminator },
} = state;

const roll = (): void => {
    eliminator.eliminatorFactor = Math.floor(Math.random() * 13) + 3;
};
</script>

<template>
    <Layout>
        <Header label="Roll Your Lucky Number" />
        <LuckyNumber :number="eliminator.eliminatorFactor" />
        <Button
            v-if="eliminator.eliminatorFactor"
            label="Continue"
            @click="state.game.nextScene()"
        />
        <Button label="Roll Your Lucky Number" v-else @click="roll()" />
    </Layout>
</template>
