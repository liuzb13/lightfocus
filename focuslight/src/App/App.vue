<style src="./App.scss" lang="scss"></style>
<script src="./App.ts" lang="ts"></script>




<template>
  <div class="root" @mousemove="mouseEvent($event)">
    <!-- <div id="hide">I'm hidden!</div> -->
    <div class="bck-img">
      <img src="../assets/image/bck.png" />
    </div>
    <canvas id="canvas" ref="canvas" v-show="canvasTag"></canvas>
    <div class="cover"></div>
    <!-- <div class="circle" ref="circle"></div> -->
    <div class="direction">
      <img src="../assets/image/font.png" />
    </div>
    <div class="cow-logo">
      <img src="../assets/image/cowsupport white.png">
    </div>
    <div class="btn">点击阅读更多</div>
    <div @click.stop="suspend()" class="play" v-show="playTag">
      <img src="../assets/image/Play.png" />
    </div>
    <transition name="fadein">
      <video v-show="videoShowTag" src="https://background.cowtransfer.com/asset/Fly_me.m4v" ref="videos"></video>
    </transition>
    <div class="backTag" v-show="backTag" @click.stop="replay()"><img src="../assets/image/back.png"></div>
  </div>
</template>