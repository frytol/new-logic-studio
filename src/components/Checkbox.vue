<template>
    <div class="x-check">
        <input type="checkbox" :id="name_db">
        <label :for="name_db">{{name}}</label>
    </div>
</template>

<script setup lang="ts">
    interface Props {
        name?: string,
        name_db?: string
    }

    withDefaults(defineProps<Props>(), {
        name: '',
        name_db: ''
    })

    /* @future - Add emit data to parent */
</script>