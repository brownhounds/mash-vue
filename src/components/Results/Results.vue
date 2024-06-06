<script setup lang="ts">
import Button from '../Button.vue';
import Header from '../Header.vue';
import Layout from '../Layout.vue';
import Result from './Result.vue';

import { Categories } from '../../state/categories';
import { state } from '../../state/state';
const { game } = state;
</script>

<template>
    <Layout>
        <Header label="Results" />
        <p>
            You will marry
            <Result :label="game.getResults(Categories.LIFE_PARTNER)" />. You
            will live in a
            <Result :label="game.getResults(Categories.MASH)" /> in
            <Result :label="game.getResults(Categories.LOCATION)" />. You will
            have
            <Result :label="game.getResults(Categories.NUMBER_OF_KIDS)" />
            children and you will drive a
            <Result :label="game.getResults(Categories.CAR)" /> and be a
            <Result :label="game.getResults(Categories.JOB)" />. Your pet will
            be <Result :label="game.getResults(Categories.PET)" /> .
        </p>
        <Button label="Finish" @click="state.newGame()" />
    </Layout>
</template>

<style scoped lang="scss">
p {
    font-size: 24px;
    max-width: 748px;
    line-height: 48px;
}
</style>
