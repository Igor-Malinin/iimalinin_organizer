<template>
  <div class="wrapper">
    <the-sidebar :sideVisible="sideVisible"/>
    <div class="header_n_content">
      <the-header
        v-model:show="sideVisible"
      />
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "@/components/TheSidebar.vue";

export default {
  components: {TheHeader, TheSidebar},
  data() {
    return {
      sideVisible: false
    }
  }
}
</script>

<style lang="scss">

@font-face {
  font-family: 'icomoon';
  src:  url('@/fonts/icomoon.eot?1zea9l');
  src:  url('@/fonts/icomoon.eot?1zea9l#iefix') format('embedded-opentype'),
  url('@/fonts/icomoon.ttf?1zea9l') format('truetype'),
  url('@/fonts/icomoon.woff?1zea9l') format('woff'),
  url('@/fonts/icomoon.svg?1zea9l#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-home:before {
  content: "\f015";
}
.icon-list-alt:before {
  content: "\f022";
}
.icon-calendar:before {
  content: "\f073";
}
.icon-bars:before {
  content: "\f0c9";
}
.icon-user-circle-o:before {
  content: "\f2be";
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrapper {
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
}

.header_n_content {
  width: 100%;
}

a {
  color: #2c3e50;
}
a:hover {
  color: #26a4ff;
}
a:active {
  color: #097cce;
}

</style>