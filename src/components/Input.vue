<template>
    <div class="x-control rounded-lg">
        <input :type="type" :id="name_db" :placeholder="placeholder" :required="required">
        <label :for="name_db">{{name}}</label>
    </div>
</template>

<script setup lang="ts">
    interface Props {
        type?: string,
        name?: string,
        name_db?: string,
        placeholder?: string,
        required?: boolean
    }

    withDefaults(defineProps<Props>(), {
        type: 'text',
        name: '',
        name_db: '',
        placeholder: '',
        required: false
    })

    /* @future - Add emit data to parent */
</script>