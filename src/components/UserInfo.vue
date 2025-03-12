<template>
    <div class="flex flex-wrap justify-center" v-for="item in user">
        <span class="x-title text-main text-xl leading-relaxed">{{ item.name }}</span>
        <span class="text-main-tertiary text-sm">{{ item.email }}</span>
    </div>
</template>
  
<script setup lang="ts">
    import { ref, onMounted } from 'vue'

    const user = ref<any[]>([])

    onMounted(async () => {
        try {
            const response = await fetch('/data/user.json')
            if (response.ok) {
                user.value = await response.json()
            } else {
                console.error('Chyba při načítání dat')
            }
        } catch (error) {
            console.error('Chyba při načítání dat:', error)
        }
    })
</script>