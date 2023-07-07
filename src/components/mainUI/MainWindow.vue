<template>
  <div class="main_window">
    <div class="main_window__inner">
      <h2 class="main_window__title">{{ msg }}</h2>
      <div class="slot_style" :style="style">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainWindow",
  props: {
    msg: String,
    style: String
  }
}
</script>

<style scoped>

.main_window__inner {
  padding: 30px 80px 40px;
}

.main_window__title {
  text-align: center;
  margin: 10px 0 30px;
}

.slot_style {
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 30px rgb(0, 0, 0, .25);
  border-radius: 4px;
}

</style>