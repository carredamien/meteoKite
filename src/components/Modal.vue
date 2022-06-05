<template>
  <div class="blocModal" v-if="reveleModale">
    <div class="overlay"></div>
    <div class="modal card">
      <h2>Me Localiser ?</h2>
      <div class="button">
        <button @click="toggleModale" class="close">
          <img src="../img/close.svg" />
        </button>
        <button @click="locationMe" class="yes"><img src="../img/yes.svg" /></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";


 export default {
   name: "Modal",
   props: ['reveleModale', 'toggleModale', 'city'],
   data () {
     return {

     }
   },
   computed: {
     ...mapMutations(["SET_LOCATION"]),
     ...mapGetters(["getWeatherData"]),

    //  locationMe() {
      //  if("geolocation" in navigator) {
      //    navigator.geolocation.watchPosition((position) => {
      //      console.log("ca passe");
      //     //  lat : position.coords.latitude,
      //     //  lon : position.coords.longitude,
      //     //  return {
      //     //    this.$store.commit(["SET_LOCATION", lat]),
      //     //    this.$store.commit(["SET_LOCATION", lon]),
      //      }
      //     //  lat = p
      //     //  lon = position.coords.laongitude,
      //     //  });
      //     //  return this.$store.commit("SET_LOCATION", lat, lon )
      // }

     //   }
    //  },

   }
 }
</script>

<style lang="scss" scoped>
.blocModal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.overlay {
  background: rgba(7, 47, 95, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.modal {
  position: fixed;
  top: 15%;
  left: 0;
  right: 0;
  width: 100%;
  height: 10rem;
  color: #333;
  // padding: 3rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
}
h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #f1f1f1;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
}
.close {
  color: red;
  border: none;
  cursor: pointer;
  background: transparent;
  padding: 1rem;
}
.yes {
  color: gray;
  border: none;
  cursor: pointer;
  background: transparent;
  padding: 1rem;
}
</style>
