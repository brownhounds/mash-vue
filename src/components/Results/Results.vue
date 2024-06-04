<script setup lang="ts">
import Button from '../Button.vue';
import Header from '../Header.vue';
import Layout from '../Layout.vue';
import Result from './Result.vue';

import { state } from '../../state/state';
const results = state.game.getResults();
</script>

<template>
    <Layout>
        <Header label="Results" />
        <p>
            You will marry <Result :label="results.LIFE_PARTNER?.value" />. You
            will live in a <Result :label="results.MASH?.value" /> in
            <Result :label="results.LOCATION?.value" />. You will have
            <Result :label="results.NUMBER_OF_KIDS?.value" /> children and you
            will drive a <Result :label="results.CAR?.value" /> and be a
            <Result :label="results.JOB?.value" />. Your pet will be
            <Result :label="results.PET?.value" /> .
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
