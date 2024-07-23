<template>
    <Header />
    <Sidebar />
    <router-view></router-view>
</template>

<script>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
export default {
  name: 'PrincipalPage',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style scoped>

</style>
