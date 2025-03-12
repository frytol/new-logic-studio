<template>
    <div class="flex flex-wrap self-start bg-white px-6 py-8 rounded-xl gap-y-6">
        <UserInfo />
        <Nav />
        <Logout />
    </div>
</template>
  
<script setup lang="ts">
    import UserInfo from '@/components/UserInfo.vue'    
    import Nav from '@/components/Nav.vue'
    import Logout from '@/components/Logout.vue'
</script>