<template>
  <main>
    <MeteoOfDay></MeteoOfDay>
    <Time></Time>
    <SevenDay></SevenDay>
    
    

  </main>
</template>

<script>
import MeteoOfDay from '../components/MeteoOfDay.vue';
import Time from '../components/Time.vue';
import SevenDay from '../components/SevenDay.vue';

  export default {
    name: "Main",
    components : {
      MeteoOfDay,
      Time,
      SevenDay
     
    }
    
  }
</script>

<style lang="scss" scoped>
main { 
  display: flex;
  flex-direction: column;
}

</style>