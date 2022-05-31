<template>
  <section class="days">
      <h2>Méteo à la semaine</h2>
      <!-- <div class="containerTimePerTime">
        <div>
          <p class="timePerTime">15h</p>
          <p class="tempet">15°</p>
        </div>
        <div>
          <p class="timePerTime">16h</p>
          <p class="tempet">15°</p>
        </div>
        <div>
          <p class="timePerTime">17h</p>
          <p class="tempet">15°</p>
        </div>
      </div> -->

      <div class="slideday-container" @mousedown = "mousedown($event)" @mousemove = "mousemove($event)" @mouseup = "mouseup" @mouseleave = "mouseleave" @touchstart = "touchstart($event)" @touchmove = "touchmove($event)" @touchend = "touchend">
      <div class="slideshow">
        <div class="slide s1"  >
          <div class="overlay"></div>
          <h2>Lundi</h2>
          <a>21°</a>
        </div>
        <div class="slide s2">
          <div class="overlay"></div>
          <h2>Mardi</h2>
          <a>21°</a>
        </div>
        <div class="slide s3">
          <div class="overlay"></div>
          <h2>Mercredi</h2>
          <a>21°</a>
        </div>
        <div class="slide s4">
          <div class="overlay"></div>
          <h2>Jeudi</h2>
          <a>21°</a>
        </div>
        <div class="slide s5">
          <div class="overlay"></div>
          <h2>Vendredi</h2>
          <a>21°</a>
        </div>
        <div class="slide s5">
          <div class="overlay"></div>
          <h2>Samedi</h2>
          <a>21°</a>
        </div>
        <div class="slide s5">
          <div class="overlay"></div>
          <h2>Dimanche</h2>
          <a>21°</a>
        </div>
      </div>
    </div>

  </section>
</template>

<script>

  export default {
    name: "SevenDay",
  
      data () {
        return {
        holding: false,
        firstClickX: null,
        alreadyLeftScrolled: null,
        velocity: null,
        rafID: null,
      }
    },
    methods: {
      mousedown: function(e) {
        const slider = this.$el.querySelector('.slideday-container');
        this.holding = true;
        this.firstClickX = e.pageX - slider.offsetLeft;
        this.alreadyLeftScrolled = slider.scrollLeft;
        this.stopTransition();
      },
      mouseup: function() {
        this.holding = false;
        this.startTransition()
      },
      mouseleave: function() {
        this.holding = false;
      },
      mousemove: function(e) {
        const slider = this.$el.querySelector('.slideday-container');
        if(!this.holding) return;
        const x = e.pageX - slider.offsetLeft;
        const scrolled = (x - this.firstClickX) * 2;
        const prevScrollLeft = slider.scrollLeft
        slider.scrollLeft = this.alreadyLeftScrolled - scrolled;
        this.velocity = slider.scrollLeft - prevScrollLeft;
      },
      startTransition: function(){
        this.stopTransition();
        this.rafID = requestAnimationFrame(this.decreasingTransition);
      },
      stopTransition: function() {
        cancelAnimationFrame(this.rafID)
      },
      decreasingTransition: function(){
        const slider = this.$el.querySelector('.slideday-container');
        slider.scrollLeft += this.velocity;
        this.velocity *= 0.95;
        if(Math.abs(this.velocity) > 0.5){
          this.rafID = requestAnimationFrame(this.decreasingTransition)
        }
      },
      touchstart: function(e) {
        const slider = this.$el.querySelector('.slideday-container');
        this.holding = true;
        // pageX => la largeur entre mon click et le DOCUMENT
        this.firstClickX = e.targetTouches[0].pageX - slider.offsetLeft;
        this.alreadyLeftScrolled = slider.scrollLeft;
        this.stopTransition()
      },
      touchend: function(){
        this.holder = false;
        this.startTransition()
      },
      touchmove: function(e){
        const slider = this.$el.querySelector('.slideday-container');
        if(!this.holding) return;

        const x = e.targetTouches[0].pageX - this.slider.offsetLeft;

        const scrolled = (x - this.firstClickX) * 2;

        const prevScrollLeft = slider.scrollLeft;

        slider.scrollLeft = this.alreadyLeftScrolled - scrolled;

        this.velocity = slider.scrollLeft - prevScrollLeft;
      },
    }
  }

</script>

<style lang="scss" scoped>

.days {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem 6rem;
  grid-template-areas: "h2"
                       "containerTimePerTime";
  margin-top: 2rem;

  & h2 {
    grid-area: h2;
    font-size:var(--fs-h3-m);
    margin-top: .8rem;
    margin-bottom: 1rem;
    justify-self: center;
  }

  & .slideday-container {
    grid-area: containerTimePerTime;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .timePerTime {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-right: 1.5px solid #d0d0d0;
    font-size: 1.1rem;
    padding: 0.3rem;
  }
  & .tempet {
    grid-area: tempet;
     display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-right: 1.5px solid #d0d0d0;
    font-size: 1.5rem;
    padding: 0.3rem;
  }
}
.slideday-container {
  margin-top: 4vw;
  overflow: hidden;
  min-height: 15vmin;
  cursor: grab;
  position: relative;
}
.slideday-container:active {
  cursor: grabbing;
}
.slideshow {
  position: absolute;
  height: 100%;
  display: flex;
  pointer-events: none;
}
.slide {
  flex-shrink: 0;
  height: 100%;
  width: 15vmin;
  color: #fff;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  position: relative;
}
.slide:not(:nth-child(1)){
  margin-left: 4px;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.15);
}
.slide h2, .slide a {
  text-shadow: 0 0 5px rgba(0,0,0,0.39);
}
.slide h2 {
  position: absolute;
  top: -5px;
  left: 5px;
  font-size: 1.5rem;
  font-weight: 300;
}
.slide a {
  position: absolute;
  bottom: 3px;
  left: 5px;
  font-size: 1.5rem;
  font-weight: 300;
  color: #fff;
  pointer-events: auto;
}


.s1 {
  background-image: url("../img/jour/01d.svg");
}
.s2 {
  background-image: url("../img/jour/02d.svg");
}
.s3 {
  background-image: url("../img/jour/03d.svg");
}
.s4 {
  background-image: url("../img/jour/04d.svg");
}
.s5 {
  background-image: url("../img/jour/09d.svg");
}
#app {
  position: relative;
}
.tns-item {
  font-size: 3rem;
  font-family: Arial;
  text-align: center;
  padding: 2em;
  background:#fafafb;
}
.tns-item:nth-child(odd) {  
  background: #c8e1ff;
}

</style>