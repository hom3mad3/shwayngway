<template>
  <Layout>
    <Logo/>
    <h1 class="hidden">Contact</h1>
    <p class="m-0 t-c">konnichiwa@shwayngway.com</p>
  </Layout>
</template>

<script>
import Logo from '../components/Logo.vue';

export default {
  metaInfo: {
    title: 'contact'
  },
  components: {
    Logo
  },
}
</script>

<style>
  .m-0 {
    margin: 0;
  }

  .t-c {
    text-align: center;
  }
</style>