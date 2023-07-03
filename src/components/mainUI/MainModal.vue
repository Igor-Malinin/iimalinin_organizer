<template>
  <div class="modal" v-if="show" @click.stop="hideModal">
    <div @click.stop class="modal__content" :class="{'width': msg}">
      <slot></slot>
      <h4 v-if="msg">{{ msg }}</h4>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "MainModal",
  mixins: [toggleMixin],
  props: {
    msg: String
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  z-index: 10;
}

.modal__content {
  padding: 20px;
  margin: auto;
  background-color: #fff;
  border-radius: 5px;
  min-height: 50px;
  max-height: 500px;
  min-width: 400px;
  max-width: 500px;
  overflow-x: scroll;
}

.width {
  min-width: 300px;
}

h4 {
  text-align: center;
  color: #5ca400;
}

</style>