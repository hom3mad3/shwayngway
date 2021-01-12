<template>
  <MailchimpSubscribe
    url="https://xxx.xxx.list-manage.com/subscribe/post-json"
    user-id="xxx"
    list-id="xxx"
    @error="onError"
    @success="onSuccess"
  >
    <template v-slot="{ subscribe, setEmail, error, success, loading }">
      <form @submit.prevent="subscribe" action="/.netlify/functions/form-handler">
        <input type="email" @input="setEmail($event.target.value)" />
        <button type="submit" v-on:submit="/.netlify/functions/hello">Submit</button>
        <div v-if="error">{{ error }}</div>
        <div v-if="success">Yay!</div>
        <div v-if="loading">Loading…</div>
      </form>
    </template>
  </MailchimpSubscribe>
</template>

<script>
import MailchimpSubscribe from './mailchimp-subscribe'

export default {
  components: {
    MailchimpSubscribe,
  },
  methods: {
    onError() {
      console.log("error");
    },
    onSuccess() {
      console.log("allgood");
    },
  },
}
</script>