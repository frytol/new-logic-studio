<template>
    <div class="flex flex-wrap">
        <h2 class="x-title w-full">Kontaktní údaje</h2>

        <div class="w-full grid grid-cols-2 gap-3">
            <Input type="text" name="Jméno" db="first_name" />
            <Input type="text" name="Příjmení" db="last_name" />
            <Input type="tel" name="Telefon" db="phone" />
            <Input type="email" name="E-mail" db="email" />
        </div>

        <h2 class="x-title w-full">Fakturační údaje</h2>
        <div class="w-full grid grid-cols-2 gap-3">
            <Input type="text" name="Jméno" db="first_name_2" />
            <Input type="text" name="Příjmení" db="last_name_2" />
            <div class="w-full grid grid-cols-4 gap-3 col-span-2">
                <Input type="text" name="Název firmy" db="company" class="col-span-2" />
                <Input type="text" name="IČ" db="ic" class="col-span-1" />
                <Input type="text" name="DIČ" db="dic" class="col-span-1" />
            </div>
            <Input type="text" name="Ulice a číslo popisné" db="address" />
            <Input type="text" name="Město" db="city" />
            <Input type="text" name="PSČ" db="post_code" />
            <Select name="Země" :options="countries" />
        </div>
        <Checkbox class="w-full" name="Nesouhlasím se zasláním dotazníku spokojenosti Ověřeno zákazníky" db="check_newsletter" />
        <Checkbox class="w-full" name="Přeji si dostávat informace o novinkách a slevách nebo inspiraci" db="check_newsletter2" />

        <div class="grid gap-x-3 grid-cols-[auto_auto_1fr] w-full">
            <button class="x-button primary p-3 h-[40px]">Uložit změny</button>
            <button class="x-button bordered accent-primary p-3 h-[40px]">Změnit heslo</button>
            <button class="x-button bordered accent-error p-3 h-[40px] ml-auto">Zrušit účet</button>
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