<template>
  <Layout>
    <h1 class="hidden">Shwayngway, Source d'Espoir</h1>
    <Logo></Logo>

<form id="newsletter" class="subscribe" action="/.netlify/functions/form-handler" method="post">
  <input type="email" id="inputEmail" name='email' placeholder="Enter email to subscribe for FREE" class="email" required autofocus>
  <button class="button" type="submit">Subscribe</button>
</form>

  </Layout>
</template>

<script>
import Logo from '../components/Logo.vue';

export default {
  metaInfo: {
    title: 'shwayngway source d’espoir'
  },
  components: {
    Logo
  },
}
</script>

<style>

</style>
