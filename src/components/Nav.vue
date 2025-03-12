<template>
    <div class="w-full">
        <!-- @FUTURE - Use v-for -->
        <ul class="flex flex-wrap gap-y-3">
            <li class="w-full">
                <router-link class="x-link w-full h-[48px] rounded-lg p-3" :to="`/moje-objednavky`">
                    <ShoppingBagIcon class="h-5 w-5 mr-2 inline-block" />
                    Moje objednávky
                </router-link>
            </li>
            <li class="w-full">
                <router-link class="x-link w-full h-[48px] rounded-lg p-3" :to="`/faktury`">
                    <DocumentCheckIcon class="h-5 w-5 mr-2 inline-block" />
                    Faktury
                </router-link>
            </li>
            <li class="w-full">
                <router-link class="x-link w-full h-[48px] rounded-lg p-3" :to="`/`">
                    <HeartIcon class="h-5 w-5 mr-2 inline-block" />
                    Seznam přání
                </router-link>
            </li>
            <li class="w-full">
                <router-link class="x-link w-full h-[48px] rounded-lg p-3" :to="`/`">
                    <CircleStackIcon class="h-5 w-5 mr-2 inline-block" />
                    Věrnostní program
                </router-link>
            </li>
            <li class="w-full">
                <router-link class="x-link w-full h-[48px] rounded-lg p-3" :to="`/`">
                    <TagIcon class="h-5 w-5 mr-2 inline-block" />
                    Slevové kódy
                </router-link>
            </li>
            <li class="w-full">
                <router-link class="x-link w-full h-[48px] rounded-lg p-3" :to="`/`">
                    <MagnifyingGlassIcon class="h-5 w-5 mr-2 inline-block" />
                    Hlídané zboží
                </router-link>
            </li>
            <li class="w-full">
                <router-link class="x-link w-full h-[48px] rounded-lg p-3" :to="`/nastaveni-uctu`">
                    <Cog6ToothIcon class="h-5 w-5 mr-2 inline-block" />
                    Nastavení účtu
                </router-link>
            </li>
        </ul>
    </div>
</template>
  
<script setup lang="ts">
    import { 
        ShoppingBagIcon, 
        DocumentCheckIcon, 
        HeartIcon, 
        CircleStackIcon, 
        TagIcon, 
        MagnifyingGlassIcon, 
        Cog6ToothIcon 
    } from '@heroicons/vue/24/outline'
</script>