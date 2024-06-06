<script setup lang="ts">
import QuestionForm from '../QuestionForm.vue';
import Button from '../Button.vue';
import Header from '../Header.vue';
import Layout from '../Layout.vue';
import ValidationError from './ValidationError.vue';

import { state } from '../../state/state';
import { Categories } from '../../state/categories';
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
        <div class="questions-flex">
            <template v-for="[_, value] in Object.entries(Categories)">
                <QuestionForm
                    v-if="value !== Categories.MASH"
                    :category="value"
                    :editable="true"
                />
            </template>
        </div>
        <Button label="Continue" @click="onNext()" :disabled="!isValid" />
        <ValidationError :is-valid="isValid" />
    </Layout>
</template>

<style scoped lang="scss">
.questions-flex {
    display: flex;
    column-gap: 24px;
}
</style>
