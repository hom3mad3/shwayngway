<template>
  <div>
    <header>
    </header>

    <main>
      <section>
        <slot />
      </section>
      
    </main>

    <footer>
      <Nav />
    </footer>
  </div>
</template>

<script>
import Nav from "~/components/Nav.vue";

export default {
  components: {
    Nav
  },
};
</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
  @font-face {
    font-family: Din;
    src: url(../../public/fonts/din.woff2) format("woff2"),
      url(../../public/fonts/din.woff) format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @media (min-width: 48rem) {
    :root {
      --text-multiplier: 1.25;
    }
  }

  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    font-weight: 400;
  }

  body {
    font-family: "Din", -apple-system, system-ui, BlinkMacSystemFont, Roboto,
      "Helvetica Neue", Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    --main-spacing: 15px 5px 10px 5px;
    --header-footer-spacing: 10px 5px; 
    font-size: calc(1em * var(--text-multiplier, 1));
  }

  h1 {
    font-size: calc(1.5em * var(--text-multiplier, 1));
  }

  h2 {
    font-size: calc(0.9em * var(--text-multiplier, 1));
  }

#app {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    'header'
    'main'
    'footer';
}

@supports (-webkit-touch-callout: none) {
  #app {
    height: -webkit-fill-available;
  }
}

#app > header {
  grid-area: header;
}

#app > main {
  grid-area: main;
  overflow: auto;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: minmax(0, 760px);
  justify-content: center;
  padding: 20px;
}

#app > footer {
  grid-area: footer;
  padding: 10px;
  border-top: 1px solid;
}

#app > section {
  grid-area: 1 / 2 / 1;
}

.hidden {
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