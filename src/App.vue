<template>
 <Home></Home>
</template>
<script>
import Home from './views/Home.vue';
import { mapGetters } from "vuex";

  export default {
    name:"App",
    components: {
      Home
    },
    data() {
      
      },
     computed: {
    ...mapGetters(["getWeatherData","getError"]),
  
  }
  }
</script>
<style lang="scss">
@import "./assets/scss/_reset.scss";
@import "./assets/scss/_variables.scss";
@import "./assets/scss/_media.scss";
//home

html {
  font-size: 62.5%;
  color: var(--text-white);
  font-family: "helvetica";
}
.container {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
    @include lg { 
      grid-template-columns: 40rem;
      justify-content: center;
    }

  grid-template-rows: 10rem 1fr 10rem;
  gap:0.5rem;
  padding: 0 var(--padding-default);
  // background: var(--bg-primary);
  background:var(--bg-primary), url('../src/img/clouds.jpg') no-repeat top center;
}
// var(--bg-primary), 


main {
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr, 10rem;
  grid-template-areas: "article article"
                       "aside aside";
  gap: 1rem;
}

footer {
  grid-column: 1/-1;
}

</style>
