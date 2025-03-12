<template>
    <div class="grid gap-y-8">
        <div class="grid bg-white p-6 rounded-xl" v-for="item in orders" :key="item.order_number"> 
            <div class="x-title">Číslo objednávky: {{item.order_number}}</div>
            
            <TagStatus :status="item.status" />

            <div class="flex flex-wrap gap-2">
                <Image />
                <Image />
                <Image />
            </div>


            <div>
                <span>
                    Datum objednávky: {{item.order_date}}
                </span>
                <span>
                    Cena celkem: {{item.total_price}}
                </span>
            </div>

            <router-link class="x-button" to="/">Detail</router-link>

            <span>Potřebujete poradit?</span>
            <span>314 004 540 (po-pá 8:00-16:00)</span>

            <button class="x-link">Zopakovat</button>
            <button class="x-link">Stornovat</button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
    import { ref, onMounted } from 'vue'

    import Image from '@/components/Image.vue'
    import TagStatus from '@/components/TagStatus.vue'

    const orders = ref<any[]>([])

    onMounted(async () => {
        try {
            const response = await fetch('/data/orders.json')
            if (response.ok) {
                orders.value = await response.json()
            } else {
                console.error('Chyba při načítání dat')
            }
        } catch (error) {
            console.error('Chyba při načítání dat:', error)
        }
    })
</script>