<script setup lang="ts">
import { computed } from 'vue';

import { state } from '../state/state';
import { CategoriesType, getCategoryDescription } from '../state/categories';

const { category } = defineProps<{
    category: CategoriesType;
    editable: boolean;
}>();

const models = state.game.model.get(category);

const title = computed(() => getCategoryDescription(category));
</script>

<template>
    <div class="container">
        <h2>{{ title }}</h2>
        <ul>
            <li v-for="(_, index) in models">
                <input
                    v-if="editable"
                    type="text"
                    v-model="models![index].value"
                />
                <p
                    v-else
                    :class="{ eliminated: models![index].eliminated, current: models![index].current }"
                >
                    {{ models![index].value }}
                </p>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@import '../scss/base.scss';

.container {
    display: block;
    margin-bottom: 24px;
}

input {
    width: 200px;
    border: 3px solid lighten($text, 35);
    padding: 10px 15px;
    font-size: 18px;
    border-radius: 8px;
    margin-bottom: 16px;
}

h2 {
    @include mouse-memoirs-regular;
    text-align: center;
    font-size: 36px;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
    & li {
        max-width: 200px;
        font-size: 18px;
        text-align: center;
        & p {
            border-radius: 4px;
            padding: 5px;
            border: 2px solid transparent;
        }
    }
}

.eliminated {
    @include eliminated;
}

.current {
    @include current;
}
</style>
