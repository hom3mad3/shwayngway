<template>

  <form id="newsletter" class="subscribe" action="/.netlify/functions/form-handler" method="post">
    <input type="email" id="inputEmail" name='email' v-model="emailInput" placeholder="Enter email to subscribe for FREE" class="email" required autofocus>
    <button class="button" type="submit" v-on:submit="{ submitEmail(emailInput) }">Subscribe</button>
  </form>

</template>

<script>
export default {
  name: "SubscribeTest",
  props: {
    elementId: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },

  },
  data() {
    emailInput: ''
    return {
      isActive: true
    };
  },
  methods: {
    subscribeVisible() {
      this.isActive = !this.isActive
    },

    submitEmail(emailInput) {
    fetch('/.netlify/functions/form-handler', {
        method: 'post',
        body: JSON.stringify({
          email: email
        })
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        messageDiv = document.getElementById('message');
        messageDiv.innerText = 'Confirmation email has been sent!'
      });
    }

  },

};
</script>

<style>
.subscribe__container {
  display: block;
  color: black;
  font-size: calc(1em * var(--text-multiplier, 1));
  text-transform: uppercase;
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
  font-size: calc(1em * var(--text-multiplier, 1.2));
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
  font-size: calc(1em * var(--text-multiplier, 1.2));
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

</style>