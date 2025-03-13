<template>
    <div class="x-control">
        <select>
            <option value="">{{ name }}</option>
            <option v-for="(option, index) in options" :key="index" :value="option.value">
                {{ option.name }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
    interface Options {
        name?: string,
        value?: string
    }

    interface Props {
        name?: string,
        options?: Options[]
    }

    withDefaults(defineProps<Props>(), {
        name: '',
        options: () => [] as Options[]
    })

    /* @future - Add emit data to parent */
</script>