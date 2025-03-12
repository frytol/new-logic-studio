<template>
    <component class="x-heading text-2xl leading-[40px]" :is="as">{{title}}</component>
</template>

<script setup lang="ts">
    interface Props {
        as?: string
        title?: string
    }

    withDefaults(defineProps<Props>(), {
        as: 'div',
        title: ''
    })
</script>