<script setup lang="ts">
import { state } from '../../state/state';
const { game } = state;

const mashModel = game.getMashModel();
</script>

<template>
    <div>
        <span
            v-for="model in mashModel"
            :class="{ eliminated: model.eliminated, current: model.current }"
            >{{ model.value }}</span
        >
    </div>
</template>

<style scoped lang="scss">
@import '../../scss/base.scss';

span {
    font-size: 35px;
    text-align: center;
    border-radius: 4px;
    padding: 5px;
    border: 2px solid transparent;
    @include mouse-memoirs-regular;
}

.eliminated {
    @include eliminated;
}

.current {
    @include current;
}
</style>
