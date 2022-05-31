import { createStore } from 'vuex'
// import axiosClient from '../utils/axiosClient'
import axios from 'axios'

const searchUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiCode = '2b1d940e98362d0725b60eb9bcaf3f88';


export default createStore({
  state: {
    meteoDay: {
      name:"",
    },
    city: ''
    
  },
  mutations: {
    // meteoCity(state, meteoDay) {
    //   state.meteoDay = meteoDay;
    // }
    viewCity(state, meteoDay){
        state.meteoDay.name = meteoDay.name;
    }

  },
  actions: {
    goMeteo(city){
      if(this.city.length > 3){
        axios
          .get(`${searchUrl}q=${city}&lang=fr&units=metric&appid=${apiCode}`)
          .then(res => {
            this.meteoDay = res.data;
            console.log(this.meteoDay);
            console.log(this.meteoDay.name);
         
          })
          .catch((error => {'error = '+ error}))
        
      }
    },
    viewCity( {commit},  city){
        commit('viewCity', city);
    }
  },
  modules: {
  }
})


//apikeys: 2b1d940e98362d0725b60eb9bcaf3f88