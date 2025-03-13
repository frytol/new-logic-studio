<template>
    <div class="w-full">
        <!-- @FUTURE - Use v-for and json -->
        <ul class="flex flex-wrap gap-y-3">
            <li class="w-full">
                <router-link 
                    class="x-button flex justify-between items-center gap-x-2 w-full h-[40px] rounded-lg p-3 hover:text-white" 
                    :to="`/moje-objednavky`"
                    :class="{
                        'accent-primary': $route.path === '/moje-objednavky',
                        'accent-light text-dark': $route.path !== '/moje-objednavky'
                    }"
                >
                    <ShoppingBagIcon class="h-5 w-5 inline-block" />
                    <span class="flex-1 text-left">Moje objednávky</span>
                    <ChevronRightIcon class="h-5 w-5 inline-block" />
                </router-link>
            </li>
            <li class="w-full">
                <router-link 
                    class="x-button flex justify-between items-center gap-x-2 w-full h-[40px] rounded-lg p-3 font-semibold hover:text-white" 
                    :to="`/faktury`"
                    :class="{
                        'accent-primary': $route.path === '/faktury',
                        'accent-light text-dark': $route.path !== '/faktury'
                    }"
                >
                    <DocumentCheckIcon class="h-5 w-5 inline-block" />
                    <span class="flex-1 text-left">Faktury</span>
                    <ChevronRightIcon class="h-5 w-5 inline-block" />
                </router-link>
            </li>
            <li class="w-full">
                <router-link 
                    class="x-button flex justify-between items-center gap-x-2 w-full h-[40px] rounded-lg p-3 font-semibold hover:text-white" 
                    :to="`/`"
                    :class="{
                        'accent-primary': $route.path === '/',
                        'accent-light text-dark': $route.path !== '/'
                    }"
                >
                    <HeartIcon class="h-5 w-5 inline-block" />
                    <span class="flex-1 text-left">Seznam přání</span>
                    <ChevronRightIcon class="h-5 w-5 inline-block" />
                </router-link>
            </li>
            <li class="w-full">
                <router-link 
                    class="x-button flex justify-between items-center gap-x-2 w-full h-[40px] rounded-lg p-3 font-semibold hover:text-white" 
                    :to="`/`"
                    :class="{
                        'accent-primary': $route.path === '/',
                        'accent-light text-dark': $route.path !== '/'
                    }"
                >
                    <CircleStackIcon class="h-5 w-5 inline-block" />
                    <span class="flex-1 text-left">Věrnostní program</span>
                    <ChevronRightIcon class="h-5 w-5 inline-block" />
                </router-link>
            </li>
            <li class="w-full">
                <router-link 
                    class="x-button flex justify-between items-center gap-x-2 w-full h-[40px] rounded-lg p-3 font-semibold hover:text-white" 
                    :to="`/`"
                    :class="{
                        'accent-primary': $route.path === '/',
                        'accent-light text-dark': $route.path !== '/'
                    }"
                >
                    <TagIcon class="h-5 w-5 inline-block" />
                    <span class="flex-1 text-left">Slevové kódy</span>
                    <ChevronRightIcon class="h-5 w-5 inline-block" />
                </router-link>
            </li>
            <li class="w-full">
                <router-link 
                    class="x-button flex justify-between items-center gap-x-2 w-full h-[40px] rounded-lg p-3 font-semibold hover:text-white" 
                    :to="`/`"
                    :class="{
                        'accent-primary': $route.path === '/',
                        'accent-light text-dark': $route.path !== '/'
                    }"
                >
                    <MagnifyingGlassIcon class="h-5 w-5 inline-block" />
                    <span class="flex-1 text-left">Hlídané zboží</span>
                    <ChevronRightIcon class="h-5 w-5 inline-block" />
                </router-link>
            </li>
            <li class="w-full">
                <router-link 
                    class="x-button flex justify-between items-center gap-x-2 w-full h-[40px] rounded-lg p-3 font-semibold hover:text-white" 
                    :to="`/nastaveni-uctu`"
                    :class="{
                        'accent-primary': $route.path === '/nastaveni-uctu',
                        'accent-light text-dark': $route.path !== '/nastaveni-uctu'
                    }"
                >
                    <Cog6ToothIcon class="h-5 w-5 inline-block" />
                    <span class="flex-1 text-left">Nastavení účtu</span>
                    <ChevronRightIcon class="h-5 w-5 inline-block" />
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
        Cog6ToothIcon,
        ChevronRightIcon 
    } from '@heroicons/vue/24/outline'
</script>