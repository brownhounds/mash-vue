<script setup lang="ts">
import Button from '../Button.vue';
import Header from '../Header.vue';
import Layout from '../Layout.vue';
import ValidationError from './ValidationError.vue';
import QuestionsList from '../QuestionsList.vue';

import { state } from '../../state/state';
import { computed } from 'vue';
const { game } = state;

const isValid = computed(() => game.isModelValid());

const onNext = (): void => {
    if (isValid) game.nextScene();
};
</script>

<template>
    <Layout>
        <Header label="Questions" />
        <QuestionsList :editable="true" />
        <Button label="Continue" @click="onNext()" :disabled="!isValid" />
        <ValidationError :is-valid="isValid" />
    </Layout>
</template>
