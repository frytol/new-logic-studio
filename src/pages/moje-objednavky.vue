<template>
    <Header :title="pageTitle" />

    <main class="grid grid-cols-[1fr] lg:grid-cols-[256px_1fr] gap-8">
        <Aside />
        <section class="w-full">
            <Orders />
        </section>
    </main>
</template>
  
<script setup lang="ts">
    import Aside from '@/components/Aside.vue'
    import Header from '@/components/Header.vue'
    import Orders from '@/components/Orders.vue'

    const pageTitle = "Moje objednávky"
</script>