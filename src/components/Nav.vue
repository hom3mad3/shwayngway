<template>
  <nav class="nav">
    <g-link class="nav__link" to="/" v-if="">Subscribe</g-link>
    <g-link class="nav__link" to="/contact/">Contact</g-link>
    <g-link class="nav__link" to="/gdpr/">GDPR</g-link>
    <a class="nav__link" href="https://instagram.com/shwayngway" target="_blank" rel="noopener">
    Instagram
    </a>
  </nav>

</template>

<script>
  export default {
    name: 'Nav',
    methods: {
    isCurrent() {
        if( this.$router.currentRoute.path ) {
          return true
        } else {
          return false
        }
      }
    },
    mounted() {
      console.info('App this router:', this.$router)
      console.info('App currentRoute:', this.$router.currentRoute)
      console.log(this.$router.currentRoute.path); 
      console.log(this.$router.path); 
    }
  }
</script>

<style>
  .nav {
    font-size: calc(1em * var(--text-multiplier, 1.5));
    display: flex;
    justify-content: space-between;
  }

  .nav__link {
    color: black;
    text-transform: uppercase;
    text-decoration: none;
  }

  .nav__link--feature {
    color: #7AC943;
  }

  .nav__link:hover {
    color: #7AC943;
  }

  .active--exact {
    display: none;
  }


  @media (max-width: 760px) {
 
  }
</style>