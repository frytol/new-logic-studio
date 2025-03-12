<template>
    <div class="flex flex-wrap">
        <h2 class="x-title w-full">Kontaktní údaje</h2>

        <Input type="text" name="Jméno" db="first_name" />
        <Input type="text" name="Příjmení" db="last_name" />
        <Input type="text" name="Telefon" db="phone" />
        <Input type="text" name="E-mail" db="email" />

        <h2 class="x-title w-full">Fakturační údaje</h2>
        <Input type="text" name="Jméno" db="first_name_2" />
        <Input type="text" name="Příjmení" db="last_name_2" />

        <Input type="text" name="Název firmy" db="company" />
        <Input type="text" name="IČ" db="ic" />
        <Input type="text" name="DIČ" db="dic" />
        <Input type="text" name="Ulice a číslo popisné" db="address" />
        <Input type="text" name="Město" db="city" />
        <Input type="text" name="PSČ" db="post_code" />

        <Select name="Země" :options="countries" />
    </div>
</template>

<script setup lang="ts">
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