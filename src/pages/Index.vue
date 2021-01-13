<template>
  <Layout>
    <h1 class="hidden">Shwayngway, Source d'Espoir</h1>
    <a href="/"><Logo /></a>

    <Mailchimp />
  </Layout>
</template>

<script>
import Logo from "../components/Logo.vue";
import Mailchimp from "../components/Mailchimp.vue";

export default {
  metaInfo: {
    title: "shwayngway source d’espoir",
  },
  components: {
    Logo,
    Mailchimp,
  },
};
</script>

<style></style>
