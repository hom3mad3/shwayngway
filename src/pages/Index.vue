<template>
  <Layout>
    <h1 class="hidden">Shwayngway, Source d'Espoir</h1>
    <a href="/"
      ><Logo /><span class="hidden"
        >shwayngway, whole leaf, single estate</span
      ></a
    >

    <Mailchimp />
  </Layout>
</template>

<script>
import Logo from "../components/Logo.vue";
import Mailchimp from "../components/Mailchimp.vue";

export default {
  metaInfo: {
    title: "source d’espoir",
  },
  components: {
    Logo,
    Mailchimp,
  },
};
</script>

<style></style>
