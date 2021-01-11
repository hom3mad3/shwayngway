<template>
  <Layout>
    <h1 class="hidden">Shwayngway, Source d'Espoir</h1>
    <Logo></Logo>
    <SubTest/>
  </Layout>
</template>

<script>
import Logo from '../components/Logo.vue';
import SubTest from '../components/SubTest.vue';

export default {
  metaInfo: {
    title: 'shwayngway source d’espoir'
  },
  components: {
    Logo,
    SubTest
  },
}
</script>

<style>

</style>
