<template>
    <div :class="'x-badge muted rounded-sm ' + getModifyClass">{{getText}}</div>
</template>
  
<script setup lang="ts">
    import { computed } from 'vue'

    interface Props {
        status?: string
    }

    const props = withDefaults(defineProps<Props>(), {
        status: 'default'
    })


    const getModifyClass = computed(() => {
        switch (props.status) {
            case 'pending':
                return 'accent-warning'
            case 'paid':
                return 'accent-success'
            case 'cancelled':
                return 'accent-error'
            default:
                return 'accent-main'
        }
    })

    const getText = computed(() => {
        switch (props.status) {
            case 'pending':
                return 'Čekající'
            case 'paid':
                return 'Zaplaceno'
            case 'cancelled':
                return 'Zrušeno'
            default:
                return 'Neznámá hodnota'
        }
    })
</script>