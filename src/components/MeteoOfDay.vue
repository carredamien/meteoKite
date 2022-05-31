<template>
  <article class="meteo">
    <div class="bloc-logo" >
      <!-- <img :src="`../img/jour/.${meteoDay}.weather.${icon}.svg`" alt="logo du temps qu'il fait" class="logo-meteo"> -->
    </div>
    <div class="bloc-info">
       <p class="localisation" >{{ this.$store.state.city }}</p>
     <!-- <p class="localisation noLocation">{{ meteoToday }}</p> -->
      <!-- <p class="temps">{{ meteoDay.weather[0].description }}</p> -->
      <!-- <p class="temperature"><span>{{ meteoDay.main.temp }}°</span></p> -->
    </div>
  </article>
  <aside>
    <div class="conditions">
      <h2>Conditions actuelles</h2>
      <div class="wrapper--conditionWind">
        <img src="../img/wind.svg" alt="logo du vent">
        <div class="conditionWind">

          <!-- <p>moyen: {{showWind}}km/h</p> -->
          <p>min: 12 noeuds</p>
          <p>max: 20 noeuds</p>
        </div>
        <img class="compass" src="../img/Compass.svg" alt="Boussole">
        <!-- <p>vent= {{this.meteoToday.wind.speed}}km/h</p>
        <p>orientation= {{this.meteoToday.wind.deg}}°</p> -->
      </div>

    </div>
    <div class="sports">
      <h2>Sports</h2>
      <ul>
        <li>Kitesurf <img src="../img/HandUp.svg" alt="Pouce levé: ok">
           </li>
      </ul>
    </div>
  
  </aside>
</template>

<script>
// import axios from 'axios';
export default {
  name: "MeteoOfDay",
  data() {
    return {
      lat: '',
      lon:'',
  

      // noLocation: false,
      // position:{
        //   latitude: null,
      //   longitude: null
      // }, 
      // icon:null,
      // temp:null,
      // tempMin:null,
      // tempMax:null,
      // pressure:null,
      // wind:null,
      // deg:null,
      // humidity:null,
      // description:null,
    };
  },
  props: ['name','city','meteoDay'],

  methods:{
    // showPosition(position){
    //   var vm = this
    //   vm.position.latitude = position.coords.latitude
    //   vm.position.longitude = position.coords.longitude
    //   console.log(vm.position.latitude);
    // },
    test(){
      console.log(this.meteoDay);
      console.log(this.meteoDay.name);
    },
    showWind(){
      return this.meteoToday.wind.speed * 1.852;
    },
  },
  // mounted(){
  //   if("geolocation" in navigator) {
  //     navigator.geolocation.watchPosition((position) => { 
  //       this.lat = position.coords.latitude;
  //       this.lon = position.coords.latitude;
  //       axios
  //       .get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=2b1d940e98362d0725b60eb9bcaf3f88&lang="fr"&units="metric"`)
  //       .then(res => {
  //         console.log(res.data);
  //         this.meteoDay = res.data;
  //       })
  //     });
  //   }
  // }
  
  
    
    
    //   choiceCity () {
    //     if("geolocation" in navigator) {
    //       navigator.geolocation.watchPosition((position) => { 
    //           console.log(this.latitude);
    //           // console.log(this.longitude);
    //       });


    //     }
    //     else { 
    //       this.city = 'Vauvert';

    //     }
    //   }
    // },
  }
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
  height:15rem;
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
    font-size:var(--fs-h3-m);
    margin-bottom: 1rem;
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
    margin-left:1rem;
    margin-right: 2rem;
    font-size: 1.5rem;
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
.nolocation{
  color: orange;
  font-size: 1.5rem;
}
</style>