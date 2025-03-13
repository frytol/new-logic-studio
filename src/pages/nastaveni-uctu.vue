<template>
    <Header :title="pageTitle" />

    <main class="grid grid-cols-[1fr] lg:grid-cols-[256px_1fr] gap-8">
        <Aside />
        <section class="w-full">
            <Form />
        </section>
    </main>
</template>
  
<script setup lang="ts">
    import Aside from '@/components/Aside.vue'
    import Form from '@/components/Form.vue'
    import Header from '@/components/Header.vue'

    const pageTitle = "Nastavení účtu"
</script>