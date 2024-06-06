<script setup lang="ts">
import { onMounted } from 'vue';

import MashOptions from './MashOptions.vue';
import Button from '../Button.vue';
import Logo from '../Logo.vue';
import Layout from '../Layout.vue';
import QuestionsList from '../QuestionsList.vue';

import { state } from '../../state/state';
const { game } = state;

onMounted(() => {
    game.eliminator.run();
});
</script>

<template>
    <Layout>
        <Logo :size="64" />
        <MashOptions />
        <QuestionsList :editable="false" />
        <Button
            label="View Your Fortune"
            @click="game.nextScene()"
            :disabled="game.eliminator.isRunning"
        />
    </Layout>
</template>
