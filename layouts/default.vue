<template>
  <div id="abc_layout" class="abc-layout">
      <nuxt-logo />
      <side-bar class="side-bar"></side-bar>
      <nuxt />
  </div>
</template>

<script lang="ts" src="./default.ts"></script>
<style>
html {
    height: 100%;
}
body {
    height: 100%;
}
.side-bar {
    float: left;
    width: 30%;
}
#__nuxt {
    width: 100%;
}

.abc-layout {
  background-color: #000;
  color: #fff;
  height: 100%;
}
</style>
