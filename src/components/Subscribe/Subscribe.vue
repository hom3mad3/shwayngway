<template>
  <div class="subscribe__container">
    <!-- <h2 class="subscribe__title" @click="subscribeVisible">subscribe for good news</h2> -->
    
    <!-- <div :id="elementId + 'mc_embed_signup'" v-bind:class="{subscribeHidden: isActive}"> -->
    <div :id="elementId + 'mc_embed_signup'" >
      <form
        :action="url"
        method="post"
        :id="elementId + 'mc-embedded-subscribe-form'"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
      >
      

        <div :id="elementId + 'mc_embed_signup_scroll'">
          <label class="subscribe-container__title hidden" for="mce-EMAIL" >
            E-mail address
          </label>

          <input
            type="email"
            name="EMAIL"
            class="subscribe__input--reset subscribe__input w-100"
            id="mce-EMAIL"
            placeholder="E-mail address"
            required
          />
          
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input
              type="text"
              name="b_5f0b91c96bbdf35913a136639_ddfba3375e"
              tabIndex="-1"
            />
          </div>

         
            <button
              type="submit"
              name="subscribe"
              :id="elementId + 'mc-embedded-subscribe'"
              class="subscribe__submit"
            >
              Subscribe for good news
            </button>
        
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subscribe",
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
    return {
      isActive: true
    };
  },
  methods: {
    subscribeVisible() {
      this.isActive = !this.isActive
    }
  }
};
</script>

<style>
.subscribe__container {
  display: block;
  color: black;
  font-size: calc(1em * var(--text-multiplier, 1));
  text-transform: uppercase;
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
  font-size: calc(0.8em * var(--text-multiplier, 1));
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
  font-size: calc(0.8em * var(--text-multiplier, 1));
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