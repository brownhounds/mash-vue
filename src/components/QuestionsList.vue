<script setup lang="ts">
import QuestionForm from './QuestionForm.vue';

import { Categories } from '../state/categories';

const { editable } = defineProps<{ editable: boolean }>();
</script>

<template>
    <div>
        <template v-for="[_, value] in Object.entries(Categories)">
            <QuestionForm
                v-if="value !== Categories.MASH"
                :category="value"
                :editable="editable"
            />
        </template>
    </div>
</template>

<style scoped lang="scss">
@import '../scss/base.scss';
div {
    display: flex;
    column-gap: 24px;
}
</style>
