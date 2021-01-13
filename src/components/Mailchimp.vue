<template>
  <mailchimp-subscribe
    url="https://shwayngway.us7.list-manage.com/subscribe/post-json"
    user-id="b510af7c8eb878be0580e2771"
    list-id="5a77d24fcc"
    @error="onError"
    @success="onSuccess"
  >
    <template v-slot="{ subscribe, setEmail, error, success, loading }">
      <form @submit.prevent="subscribe" class="subscribe__container">
        <label for="mc-subscribe" class="hidden">E-mail address</label>
        <input id="mc-subscribe" class="subscribe__input subscribe__input--reset" placeholder="e-mail address" type="email" @input="setEmail($event.target.value)" />
        <button class="subscribe__submit" type="submit" aria-label="Subscribe for good news">Subscribe for good news</button>
        <div v-if="error">{{ error }}</div>
        <div v-if="success">Thank you</div>
        <div v-if="loading">Loading…</div>
      </form>
    </template>
  </mailchimp-subscribe>
</template>

<script>
import MailchimpSubscribe from 'vue-mailchimp-subscribe'

export default {
  components: {
    MailchimpSubscribe,
  },
}
</script>

<style>
.subscribe__container {
  display: block;
  color: black;
  max-width: 400px;
  margin: 0 auto;
}

.subscribe__title {
  color: #7ac943;
  margin: 0;
  font-weight: normal;
  word-wrap: none;
}

.subscribe__input--reset {
  border: none;
}

.subscribe__input {
  color:#000000;
  font-size: calc(1em * var(--text-multiplier, 1));
  font-family: "Din";
  border-bottom: 1px black solid;
  line-height: 1.5;
  border-radius: 0;
  box-shadow: none;
  width: 100%;
  margin: 0;
  padding: 0;
}

.subscribe__input::placeholder {
  opacity: 1;
  text-transform: uppercase;
  color:#000000;
}

.subscribe__input:focus::placeholder {
  color: transparent;
}

.subscribe__submit {
  border: 0;
  border-radius: 30px;
  color: #ffffff;
  background-color: #7ac943;
  padding: 10px 20px;
  width: 100%;
  font-size: calc(1em * var(--text-multiplier, 1));
  font-family: "Din";
  border: 2px solid transparent;
  margin: 10px 0;
  text-transform: uppercase;
  cursor: grab;
}

.subscribe__submit:hover {
  color: #000000;
  background-color: #ffffff;
  border: 2px solid black;
}

.subscribeHidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

@media (max-width: 760px) {
  .subscribe__input,
  .subscribe__submit {
    font-size: calc(1.2em * var(--text-multiplier, 1));
  }
}

</style>