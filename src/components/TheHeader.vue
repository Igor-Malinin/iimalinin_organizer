<template>
  <div class="header">
    <button :class="{'btn__menu_side': !show, 'btn__menu_cross': show}" @click="$emit('update:show', !show)"></button>
    <router-link to="/">Органайзер</router-link>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    show: Boolean
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  position: relative;
  font-size: 20px;
  font-weight: 600;
  line-height: 60px;
  padding-left: 20px;
  border-bottom: 2px solid #2c3e50;
  background-color: #ffffff;
  z-index: 2;
}

.btn__menu_side:before {
  position: absolute;
  bottom: -8px;
  left: 0;
  font-family: "icomoon";
  font-size: 30px;
  content: "\f0c9";
}
.btn__menu_side {
  position: relative;
  padding-left: 40px;
  border: none;
  cursor: pointer;
}

.btn__menu_cross:before {
  position: absolute;
  bottom: -8px;
  left: 0;
  font-family: "icomoon";
  font-size: 30px;
  content: "✕";
}
.btn__menu_cross {
  position: relative;
  padding-left: 40px;
  border: none;
  cursor: pointer;
}
</style>