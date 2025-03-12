<template>
    <div class="flex flex-wrap gap-y-8">
        <div class="x-table w-full text-sm">
            <table>
                <thead class="whitespace-nowrap text-main-secondary font-bold">
                    <tr>
                        <th>Číslo faktury</th>
                        <th>Číslo objednávky</th>
                        <th>Cena celkem</th>
                        <th>Stažení</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in invoices" :key="item.invoice_number">
                        <td>{{ item.invoice_number }}</td>
                        <td>{{ item.order_number }}</td>
                        <td>{{ item.total_price }}</td>
                        <td>
                            <a class="x-link flex justify-center items-center gap-x-1 text-primary hover:underline" href="/"> 
                                <ArrowDownOnSquareStackIcon class="h-5 w-5 inline-block" />
                                Stáhnout
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-end w-full">
            <Pagination />
        </div>
    </div>
</template>
  
<script setup lang="ts">
    import { ref, onMounted } from 'vue'

    import { ArrowDownOnSquareStackIcon } from '@heroicons/vue/24/outline'

    import Pagination from '@/components/Pagination.vue'

    const invoices = ref<any[]>([])

    onMounted(async () => {
        try {
            const response = await fetch('/data/invoices.json')
            if (response.ok) {
                invoices.value = await response.json()
            } else {
                console.error('Chyba při načítání dat')
            }
        } catch (error) {
            console.error('Chyba při načítání dat:', error)
        }
    })
</script>