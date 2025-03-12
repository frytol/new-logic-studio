<template>
    <div class="x-control">
        <input :type="type" :id="name_db" :placeholder="placeholder">
        <label :for="name_db">{{name}}</label>
    </div>
</template>

<script setup lang="ts">
    interface Props {
        type?: string,
        name?: string,
        name_db?: string,
        placeholder?: string
    }

    withDefaults(defineProps<Props>(), {
        type: 'text',
        name: '',
        name_db: '',
        placeholder: ''
    })

    /* @future - Add emit data to parent */
</script>