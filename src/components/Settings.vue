<template>
  <div class="settings" v-if="settings">
    <div class="overlay"></div>
    <div class="modal card">
      <h2>Préférences</h2>
  
    </div>
  </div>
</template>

<script>
  export default {
    name: "Settings",
    props: ['reveleSettings'],
    data () {
      return {
    
        
      }
    },
    methods: {
      // locationMe(){
      //   return axiosClient
        // alert('localisation en cours tête de bite')
        // if("geolocation" in navigator) {
        //   navigator.geolocation.watchPosition((position) => {
        //     this.lat = position.coords.latitude;
        //     this.lon = position.coords.longitude;
        //   });
        //   console.log(this.lat +' and '+ this.lon );
        // }
      // }
    },
    // computed: {
    //   locationMe(){
    //     console.log(this.lat +' et '+ this.lon);
    //     return axiosClient
    //   },
    
    // }
  }
</script>

<style lang="scss" scoped>

.blocModal {
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display: flex;
  justify-content:center;
  align-items:center;
  z-index: 2;
}
.overlay {
  background: rgba(7, 47, 95, 0.9);
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
}
.modal {
  position: fixed;
  top:15%;
  left:0;
  right:0;
  width:100%;
  height:10rem;
  color: #333;
  // padding: 3rem 6rem;
  display: flex;
  flex-direction: column;
  align-items:center;
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
  justify-content:center;

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