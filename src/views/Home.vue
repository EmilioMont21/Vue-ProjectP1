<template>
    <div>
        <Users/>
        <Create/>       
    </div>
</template>

<script>
import Create from '@/components/Create.vue';
import Users from '@/components/Users.vue';
export default {
    name: 'HomeView',
    components: {
        Create,
        Users
        },
}
</script>