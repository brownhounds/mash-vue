<script setup lang="ts">
type ButtonProps = {
    label: string;
    disabled?: boolean;
};

const { label, disabled } = defineProps<ButtonProps>();
</script>

<template>
    <button :disabled="disabled">{{ label }}</button>
</template>

<style scoped lang="scss">
@import '../scss/base.scss';
button {
    max-width: 300px;
    background-color: $orange;
    color: white;
    border: 0;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    border: 4px solid darken($orange, 10);
    transition: 0.2s all ease-in-out;
    scale: 1;
    @include mouse-memoirs-regular;

    &[disabled] {
        background-color: lighten($orange, 15);
        border: 4px solid lighten($orange, 15);
        &:hover {
            cursor: default;
            scale: 1;
            background-color: lighten($orange, 15);
        }
    }
    &:hover {
        cursor: pointer;
        background-color: darken($orange, 10);
        scale: 1.1;
    }
}
</style>
