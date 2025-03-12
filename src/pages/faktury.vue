<template>
    <Header :title="pageTitle" />

    <div class="grid grid-cols-[1fr] lg:grid-cols-[256px_1fr] gap-x-8">
        <Aside />
        <Invoices />
    </div>
</template>
  
<script setup lang="ts">
    import Aside from '@/components/Aside.vue'
    import Header from '@/components/Header.vue'
    import Invoices from '@/components/Invoices.vue'
    

    const pageTitle = "Faktury"
</script>