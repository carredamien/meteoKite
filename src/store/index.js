import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({

  state: {
    apiBase: 'https://api.openweathermap.org/data/2.5/',
    apiCode: '2b1d940e98362d0725b60eb9bcaf3f88',
    defaultSearch: "vauvert",
    search:'',
    weatherData: {},
    isError: false,
    lat:'',
    lon:'',
  },

  getters: {
    getError(state) {
      return state.isError;
    },
  
    isSearched(state) {
      return state.search !== "";
    },
    getWeatherData(state) {
      const { temp,tempMin, tempMax, feelsLike, description, icon,main, info, windSpeed, windSpeedGust, windDeg, lat, lon } = state.weatherData;
      return {
        temp,
        tempMin,
        tempMax,
        feelsLike,
        description,
        main,
        info,
        icon,
        windSpeed,
        windSpeedGust,
        windDeg,
        lat,
        lon,
      };
      
    },
    
  },

  mutations: {
    ["SET_SEARCH"](state, search) {
      state.search = search;
    },
    ["SET_WEATHER_DATA"](state, data) {
      state.weatherData = data;
    },
    ["SET_LOCATION"](state, lat, lon) {
      state.lat = lat;
      state.lon = lon;
    },
    ["SET_ERROR"](state, value) {
      state.isError = value;
    },
    //   MAJ(state, city) {
    //     state.city = city;   
    // },

  },
  actions: {
    async weatherData({ commit, state }, search){
      
        commit("SET_SEARCH", search);
      try {
         const response = await axios
            .get(`${state.apiBase}weather?q=${search}&lang=fr&units=metric&appid=${state.apiCode}`)
            
        const newWeatherData = {
          name: response.data.name,
          temp: response.data.main.temp,
          tempMin: response.data.main.temp_min,
          tempMax: response.data.main.temp_max,
          feelsLike: response.data.main.feels_like,
          description: response.data.weather[0].description,
          main: response.data.weather[0].main,
          icon: response.data.weather[0].icon.substring(0, 3),
          info: response.data.weather[0].main,
          windSpeed: response.data.wind.speed,
          windSpeedGust: response.data.wind.gust,
          windDeg: response.data.wind.deg,
          humidity: response.data.main.humidity,
          clouds: response.data.clouds.all,
          country: response.data.sys.country,
        };   

        
        commit("SET_WEATHER_DATA", newWeatherData);
        commit("SET_ERROR", false);
      } catch (error) {
        commit("SET_ERROR", true);
        commit("SET_WEATHER_DATA", {});
      } 
    
    
    },
    async weatherDataLocation({ commit, state }, lat, lon){
      
      commit("SET_LOCATION", lat, lon);
    try {
       const response = await axios
          .get(`${state.apiBase}weather?lat=${lat}&lon=${lon}&lang=fr&units=metric&appid=${state.apiCode}`)
          
      const newWeatherData = {
        name: response.data.name,
        temp: response.data.main.temp,
        tempMin: response.data.main.temp_min,
        tempMax: response.data.main.temp_max,
        feelsLike: response.data.main.feels_like,
        description: response.data.weather[0].description,
        main: response.data.weather[0].main,
        icon: response.data.weather[0].icon.substring(0, 3),
        info: response.data.weather[0].main,
        windSpeed: response.data.wind.speed,
        windSpeedGust: response.data.wind.gust,
        windDeg: response.data.wind.deg,
        humidity: response.data.main.humidity,
        clouds: response.data.clouds.all,
        country: response.data.sys.country,
      };   

      
      commit("SET_WEATHER_DATA", newWeatherData);
      commit("SET_ERROR", false);
    }catch (error) {
      commit("SET_ERROR", true);
      commit("SET_WEATHER_DATA", {});
    } 
  
    },   
  },
  modules: {
  }
})


//apikeys: 2b1d940e98362d0725b60eb9bcaf3f88