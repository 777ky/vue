<template>
  <div class="VueToNuxtLogo">
    <div class="Triangle Triangle--two"/>
    <div class="Triangle Triangle--one"/>
    <div class="Triangle Triangle--three"/>
    <div class="Triangle Triangle--four"/>
  </div>
</template>

<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: calc(180px/2);
  width: calc(245px/2);
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle--one {
  border-left: calc(105px/2) solid transparent;
  border-right: calc(105px/2) solid transparent;
  border-bottom: calc(180px/2) solid #41B883;
}

.Triangle--two {
  top: calc(30px/2);
  left: calc(35px/2);
  animation: goright 0.5s linear forwards 3.5s;
  border-left: calc(87.5px/2) solid transparent;
  border-right: calc(87.5px/2) solid transparent;
  border-bottom: calc(150px/2) solid #3B8070;
}

.Triangle--three {
  top: calc(60px/2);
  left: calc(35px/2);
  animation: goright 0.5s linear forwards 3.5s;
  border-left: calc(70px/2) solid transparent;
  border-right: calc(70px/2) solid transparent;
  border-bottom: calc(120px/2) solid #35495E;
}

.Triangle--four {
  top: calc(120px/2);
  left: calc(70px/2);
  animation: godown 0.5s linear forwards 3s;
  border-left: calc(35px/2) solid transparent;
  border-right: calc(35px/2) solid transparent;
  border-bottom: calc(60px/2) solid #fff;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: calc(180px/2);
  }
}

@keyframes goright {
  100% {
    left: calc(70px/2);
  }
}
</style>

