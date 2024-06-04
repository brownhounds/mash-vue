<script setup lang="ts">
import { onMounted } from 'vue';

import QuestionForm from '../QuestionForm.vue';
import MashOptions from './MashOptions.vue';
import Button from '../Button.vue';
import Logo from '../Logo.vue';
import Layout from '../Layout.vue';

import { state } from '../../state/state';
import { Categories } from '../../state/categories';
const { game } = state;

onMounted(() => {
    game.eliminator.run();
});
</script>

<template>
    <Layout>
        <Logo :size="64" />
        <MashOptions />
        <div class="questions-flex">
            <template v-for="[_, value] in Object.entries(Categories)">
                <QuestionForm
                    v-if="value !== Categories.MASH"
                    :category="value"
                    :editable="false"
                />
            </template>
        </div>
        <Button
            label="View Your Fortune"
            @click="game.nextScene()"
            :disabled="game.eliminator.isRunning"
        />
    </Layout>
</template>

<style scoped lang="scss">
.questions-flex {
    display: flex;
    column-gap: 24px;
}
</style>
