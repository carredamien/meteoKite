import axios from 'axios'

axios.defaults.baseURL =  process.env.VUE_APP_AXIOS_BASE_URL
// console.log('process.env.VUE_APP_AXIOS_BASE_URL', VUE_APP_AXIOS_BASE_URL);
// console.log('process.env.VUE_APP_AXIOS_BASE_URL', process.env.VUE_APP_AXIOS_BASE_URL);
// if("geolocation" in navigator) {
//   navigator.geolocation.watchPosition((position) => {
// //     this.lat = position.coords.latitude;
// //     this.lon = position.coords.longitude;
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=2b1d940e98362d0725b60eb9bcaf3f88&lang=fr&units=metric`
// //     // const url = `https://api.openweathermap.org/data/2.5/weather?lon=${this.lon}&lat=${this.lat}&appid=2b1d940e98362d0725b60eb9bcaf3f88&lang=fr&units=metric`
// //     console.log(this.lat);
// //     console.log(this.lon);
//   });
  
// }

export default axios;