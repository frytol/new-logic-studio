<template>
    <div class="py-8">
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