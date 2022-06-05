<template>
  <header class="day">
    <Modal :reveleModale="reveleModale" :toggleModale="toggleModale"></Modal>
    <Favorite
      :reveleFavorite="reveleFavorite"
      :toggleFavorite="toggleFavorite"
    ></Favorite>
    <!-- <Settings :reveleSettings="reveleSettings" :toggleSettings="toggleSettings" ></Settings> -->
    <!-- <div class="navOfDay"> -->
    <h1 class="dateOfDay">Le {{ date.toLocaleDateString() }} à {{ getHours() }}</h1>
    <svg
      @click="toggleSettings"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      class="iconify iconify--ri preference"
      width="32"
      height="32"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        class="svgPreferences"
        fill="currentColor"
        d="M2.132 13.63a9.942 9.942 0 0 1 0-3.26c1.102.026 2.092-.502 2.477-1.431c.385-.93.058-2.004-.74-2.763a9.942 9.942 0 0 1 2.306-2.307c.76.798 1.834 1.125 2.764.74c.93-.385 1.457-1.376 1.43-2.477a9.942 9.942 0 0 1 3.262 0c-.027 1.102.501 2.092 1.43 2.477c.93.385 2.004.058 2.763-.74a9.942 9.942 0 0 1 2.307 2.306c-.798.76-1.125 1.834-.74 2.764c.385.93 1.376 1.457 2.477 1.43a9.942 9.942 0 0 1 0 3.262c-1.102-.027-2.092.501-2.477 1.43c-.385.93-.058 2.004.74 2.763a9.942 9.942 0 0 1-2.306 2.307c-.76-.798-1.834-1.125-2.764-.74c-.93.385-1.457 1.376-1.43 2.477a9.942 9.942 0 0 1-3.262 0c.027-1.102-.501-2.092-1.43-2.477c-.93-.385-2.004-.058-2.763.74a9.942 9.942 0 0 1-2.307-2.306c.798-.76 1.125-1.834.74-2.764c-.385-.93-1.376-1.457-2.477-1.43zM12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"
      ></path>
    </svg>
    <!-- </div> -->
    <div class="search">
      <img @click="toggleModale" class="location" src="../img/location.svg" />
      <input @blur="getSearch" type="text" min="3" max="50" placeholder="ville ou spot" />
      <img @click="toggleFavorite" class="favorite" src="../img/Star.svg" />
    </div>
  </header>
</template>

<script>
import Modal from "../components/Modal";
import Favorite from "../components/Favorite";
// import { mapActions, mapGetters } from "vuex";
// import Settings from '../components/Settings'

export default {
  name: "Header",
  components: {
    Modal,
    Favorite,
    // Settings,
  },
  data() {
    return {
      date: new Date(),
      meteoDay: undefined,
      reveleModale: false,
      reveleFavorite: false,
      reveleSettings: false,
    };
  },
  methods: {
    /**
     * function search city
     */
    getSearch(event) {
      this.$store.commit("SET_SEARCH", event.target.value);
      this.$store.dispatch("weatherData", event.target.value);
    },
    /**
     * function show toggle page
     */
    toggleModale() {
      this.reveleModale = !this.reveleModale;
    },
    toggleFavorite() {
      this.reveleFavorite = !this.reveleFavorite;
    },
    toggleSettings() {
      this.reveleSettings = !this.reveleSettings;
    },
    /**
     * function for add 0 at time
     */
    getHours() {
      if (this.date.getMinutes < 10) {
        return this.date.getHours() + "h0" + this.date.getMinutes();
      } else {
        return this.date.getHours() + "h" + this.date.getMinutes();
      }
    },
  },
  computed: {
    // ...mapActions(["weatherData"]),
    // ...mapGetters(["getSearch(event.target.value)"]),
    // showMeteo(){
    //   return this.$store.state.meteoDay;
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_media.scss";

header {
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 4rem 1fr;
  place-items: center;
}

h1 {
  grid-column: 1/3;
  justify-self: start;
  font-size: 1.7rem;
  & > span {
    font-style: italic;
    font-size: 1.7rem;
  }
}

.preference {
  grid-column: 3/4;
  justify-self: end;
  width: 3rem;
  padding: 1rem 0 1rem 1rem;
  cursor: pointer;
}

.svgPreferences {
  transition: fill 0.3s ease-in-out;
  &:hover {
    fill: #888888;
  }
}

.search {
  grid-column: 1/4;
  position: relative;
  align-self: center;
  margin: 2rem;
  & input {
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 4px;
    background: rgba(178, 223, 251, 0.3);
    outline: none;
    display: flex;
    font-size: 1.8rem;
    color: var(--text-white);
    text-align: center;
    cursor: pointer;
    &::placeholder {
      text-align: center;
      font-size: 1.8rem;
    }
  }
}
.location {
  position: absolute;
  top: 0.3rem;
  left: -4.7rem;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0 1rem 1rem 2rem;
  cursor: pointer;
}
.favorite {
  position: absolute;
  top: 0.3rem;
  right: -4rem;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0 1rem 1rem 2rem;
  cursor: pointer;
}
</style>
