<template>
    <div class="flex flex-wrap w-full gap-y-8 overflow-x-auto">
        <div class="x-table w-full text-sm">
            <table>
                <thead class="whitespace-nowrap text-main-secondary font-bold">
                    <tr class="border-b border-body-secondary">
                        <th>Číslo faktury</th>
                        <th>Číslo objednávky</th>
                        <th>Cena celkem</th>
                        <th class="flex justify-end">Stažení</th>
                    </tr>
                </thead>
                <!-- @note - In figma is spacing 1.5rem(top) and 1rem(bottom) /new-logic-studio/src/style.css (--x-table-cell-spacing-y, --x-table-cell-spacing-x) -->
                <tbody>
                    <tr v-for="item in invoices" :key="item.invoice_number">
                        <td>{{ item.invoice_number }}</td>
                        <td>{{ item.order_number }}</td>
                        <td>{{ item.total_price }}</td>
                        <td>
                            <a class="x-link flex justify-end items-center gap-x-1 text-primary hover:underline" href="/"> 
                                <ArrowDownOnSquareStackIcon class="h-5 w-5 inline-block" />
                                Stáhnout
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="grid gap-y-6 grid-cols-1 w-full lg:grid-cols-3 lg:gap-x-3">
            <div class="col-span-1 text-center hidden lg:block"></div>
            <div class="col-span-1 text-center">
                <button class="x-button primary px-6 py-3 h-[48px]">Načíst další</button>
            </div>
            <div class="flex justify-center col-span-1 text-center lg:justify-end">
                <Pagination />
            </div>
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