<template>
  <Layout>
    <h1 class="hidden">Shwayngway, Source d'Espoir</h1>
    <Logo></Logo>
    <Subscribe 
      :elementId="'mc-embedded-subscribe-form'"
      :url="'https://shwayngway.us7.list-manage.com/subscribe/post?u=b510af7c8eb878be0580e2771&amp;id=5a77d24fcc'"
    />
  </Layout>
</template>

<script>
import Logo from '../components/Logo.vue';
import Subscribe from '../components/Subscribe/Subscribe.vue';

export default {
  metaInfo: {
    title: 'shwayngway source d’espoir'
  },
  components: {
    Logo,
    Subscribe
  },
}
</script>

<style>

</style>
