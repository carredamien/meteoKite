<template>
  <article class="meteo">
    <div class="bloc-logo">
      <img
        :src="`/img/${getWeatherData.icon}.svg`"
        alt="logo du temps qu'il fait"
        class="logo-meteo"
      />
    </div>
    <div class="bloc-info" v-if="this.$store.state.search.length > 3">
      <p class="localisation">{{ this.$store.state.search.toUpperCase() }}</p>
      <p>{{ getWeatherData.temp }}°</p>
      <!-- <p class="localisation noLocation">{{ meteoToday }}</p> -->
      <p class="temps">{{ getWeatherData.description }}</p>
      <!-- <p class="temperature"><span>{{ meteoDay.main.temp }}°</span></p> -->
    </div>
    <div class="error" v-if="getError">Désolé, il n'y a pas de résultats.</div>
  </article>
  <aside>
    <div class="conditions" v-if="getWeatherData.windSpeed">
      <h2>Conditions actuelles</h2>
      <div class="wrapper--conditionWind">
        <img src="../img/wind.svg" alt="logo du vent" />
        <div class="conditionWind">
          <!-- <p>moyen: {{showWind}}km/h</p> -->
          <p>moy: {{ getWeatherData.windSpeed }} noeuds</p>
          <p v-if="getWeatherData.windSpeedGust">
            max: {{ getWeatherData.windSpeedGust }} noeuds
          </p>
        </div>
        <div class="compass">
          <img class="compassExt" src="../img/compass1.svg" alt="Boussole" />
          <img
            class="compassInt"
            :class="{ showDeg: winDeg }"
            src="../img/compassInt.svg"
            alt="Boussole"
          />
        </div>
        <!-- <p>vent= {{this.meteoToday.wind.speed}}km/h</p> -->
        <p>{{ getWeatherData.windDeg }}°</p>
      </div>
    </div>
    <div class="sports" v-if="getWeatherData.windSpeed">
      <h2>Sports</h2>
      <ul>
        <li v-if="getWeatherData.windSpeed <= 7">
          Plage: <img src="../img/HandUp.svg" alt="Pouce levé: ok" />
        </li>
        <li v-if="getWeatherData.windSpeed <= 9">
          Paddle: <img src="../img/HandUp.svg" alt="Pouce levé: ok" />
        </li>
        <li v-if="getWeatherData.windSpeed > 10">
          Kitesurf: <img src="../img/HandUp.svg" alt="Pouce levé: ok" />
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MeteoOfDay",
  data() {
    return {
      showDeg: "",
    };
  },

  methods: {
    winDeg() {
      // 'rotate(0deg)'
      return (this.showDeg = "transform: rotate(120deg)");
      // console.log(this.$store.getters.getWeatherData.windDeg);
      // return this.$store.getters.getWeatherData.windDeg;
    },
  },
  computed: {
    ...mapGetters(["getWeatherData", "getError"]),
  },
};
</script>

<style lang="scss" scoped>
article {
  grid-column: 1/-1;
  grid-row: 1/2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "logo info";
}

.bloc-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: logo;
  height: 15rem;
  overflow: hidden;
  & img {
    height: 20rem;
  }
}

.bloc-info {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  grid-area: info;
  font-size: var(--fs-h2-m);
  & p:nth-child(2) {
    margin: 0.5rem 0;
  }
}

aside {
  grid-area: aside;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "conditions sports";

  //   grid-column: 1/2;
  //   grid-template-columns: repeat(4, 1fr);
  & h2 {
    font-size: var(--fs-h3-m);
    margin-bottom: 1rem;
  }
  & .sports h2 {
    margin-bottom: 0;
  }
}
.conditions {
  grid-area: conditions;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d0d0d0;
}

.wrapper--conditionWind {
  display: flex;
  & img {
    width: 3rem;
  }
  & .conditionWind {
    margin-left: 1rem;
    margin-right: 2rem;
    font-size: 1.5rem;
  }
}
.compass {
  position: relative;
  width: 5rem;
  height: 5rem;
  & .compassExt {
    position: absolute;
    top: 0;
    left: 0;
    width: 5rem;
    height: 5rem;
  }
  & .compassInt {
    position: absolute;
    top: 28%;
    left: 30%;
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 2rem;
    // transform-origin: center;
  }
}

.sports {
  grid-area: sports;
  margin-left: 0.5rem;
  & li {
    font-size: 1.5rem;
    & img {
      margin-top: 0.5rem;
      color: rgb(11, 131, 11);
    }
  }
}

.error {
  color: #ff4700;
  font-size: 1.8rem;
}
</style>
