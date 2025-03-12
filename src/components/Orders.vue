<template>
    <div class="grid gap-y-8">
        <div class="grid grid-cols-4 grid-rows-auto gap-6 bg-white p-6 rounded-xl" v-for="item in orders" :key="item.order_number"> 
            <div class="col-span-3 flex flex-col flex-wrap gap-y-3">
                <div class="x-title">Číslo objednávky: {{item.order_number}}</div>
                <div class="flex flex-wrap gap-2">
                    <Image />
                    <Image />
                    <Image />
                </div>
            </div>
            <div class="col-start-4 flex justify-end">
                <TagStatus :status="item.status" />
            </div>
            <div class="col-span-2 row-start-2 flex flex-col flex-wrap">
                <span>Datum objednávky: {{item.order_date}}</span>
                <span>Cena celkem: {{item.total_price}}</span>
            </div>
            <div class="col-span-2 col-start-3 row-start-2 flex flex-col flex-wrap text-right">
                <span class="text-sm text-primary">Potřebujete poradit?</span>
                <span class="text-sm font-semibold">314 004 540 (po-pá 8:00-16:00)</span>
            </div>
            <div class="col-span-2 row-start-3">
                <router-link class="x-button h-[48px] px-12 py-3" to="/">Detail</router-link>
            </div>
            <div class="col-span-2 col-start-3 row-start-3 flex items-center justify-end gap-6">
                <button class="x-link flex items-center">
                    Zopakovat
                    <ArrowUturnLeftIcon class="h-5 w-5 ml-2 inline-block" />
                </button>
                <button class="x-link flex items-center">
                    Stornovat
                    <XMarkIcon class="h-5 w-5 ml-2 inline-block" />
                </button>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
    import { ref, onMounted } from 'vue'

    import Image from '@/components/Image.vue'
    import TagStatus from '@/components/TagStatus.vue'
    import { 
        ArrowUturnLeftIcon,
        XMarkIcon
    } from '@heroicons/vue/24/outline'

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