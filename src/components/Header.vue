<template>
    <div class="px-8 py-4">
        <Heading as="h1" :title="title" />
    </div>
</template>
  
<script setup lang="ts">
    import Heading from '@/components/Heading.vue'

    interface Props {
        title?: string
    }

    withDefaults(defineProps<Props>(), {
        title: ''
    })
</script>