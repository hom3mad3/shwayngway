<template>
  <Layout>
    <Logo/>
    <h1 class="hidden">Contact</h1>
    <h2 class="m-0">e-mail address</h2>
    <p class="m-0">konnichiwa@shwayngway.com</p>
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
</style>