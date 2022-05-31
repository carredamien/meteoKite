<template>
   <div class="blocModal" v-if="reveleFavorite">
    <div class="overlay"></div>
    <div class="modal card">
      <h2>Localisations préférées ?</h2>
      <ul>
        <li @click="toggleFavorite">- test</li>
       
      </ul>
      

    </div>
  </div>
</template>

<script>
  export default {
     name: "Favorite",
     props: ['reveleFavorite', 'toggleFavorite', ],
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
li {
  margin-top: 2rem;
  font-size: 1.5rem;
  color: #fff;
}

</style>