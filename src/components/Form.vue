<template>
    <div class="flex flex-wrap gap-y-8 bg-white p-6 rounded-xl">
        <h2 class="x-title w-full text-lg">Kontaktní údaje</h2>

        <div class="w-full grid grid-cols-2 grid-rows-auto gap-3 lg:grid-cols-4">
            <Input class="col-span-2" type="text" name="Jméno" db="first_name" />
            <Input class="col-span-2" type="text" name="Příjmení" db="last_name" />
            <Input class="col-span-2" type="tel" name="Telefon" db="phone" />
            <Input class="col-span-2" type="email" name="E-mail" db="email" />
        </div>

        <hr class="h-px bg-body-secondary border-0 dark:bg-body-secondary">

        <h2 class="x-title w-full text-lg">Fakturační údaje</h2>
        <div class="w-full grid grid-cols-2 grid-rows-auto gap-3 lg:grid-cols-4">
            <Input class="col-span-2" type="text" name="Jméno" db="first_name_2" />
            <Input class="col-span-2" type="text" name="Příjmení" db="last_name_2" />
            <Input class="col-span-2" type="text" name="Název firmy" db="company" />
            <Input class="col-span-1" type="text" name="IČ" db="ic" />
            <Input class="col-span-1" type="text" name="DIČ" db="dic" />
            <Input class="col-span-2" type="text" name="Ulice a číslo popisné" db="address" />
            <Input class="col-span-2" type="text" name="Město" db="city" />
            <Input class="col-span-2" type="text" name="PSČ" db="post_code" />
            <Select class="col-span-2" name="Země" :options="countries" />
        </div>

        <div class="flex flex-wrap gap-y-3">
            <Checkbox class="w-full" name="Nesouhlasím se zasláním dotazníku spokojenosti Ověřeno zákazníky" db="check_newsletter" />
            <Checkbox class="w-full" name="Přeji si dostávat informace o novinkách a slevách nebo inspiraci" db="check_newsletter2" />
        </div>

        <div class="grid gap-3 grid-cols-[auto_auto] w-full lg:grid-cols-[auto_auto_1fr]">
            <button class="x-button primary py-3 px-6 h-[40px]">Uložit změny</button>
            <button class="x-button bordered accent-primary py-3 px-6 h-[40px]">Změnit heslo</button>
            <button class="x-button bordered accent-error py-3 px-6 h-[40px] col-span-2 lg:ml-auto lg:col-span-1">Zrušit účet</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Checkbox from '@/components/Checkbox.vue'
    import Input from '@/components/Input.vue'
    import Select from '@/components/Select.vue'

    const countries: { name: string, value: string }[] = [
        {
            name: 'Česko',
            value: 'cesko'
        },
        {
            name: 'Slovensko',
            value: 'slovensko'
        },
        {
            name: 'Německo',
            value: 'nemecko'
        }
    ]
</script>