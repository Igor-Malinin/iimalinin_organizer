<template>
  <input :value="modelValue" :style="style" @input="updateInput" class="input">
</template>

<script>
export default {
  name: "MainInput",
  props: {
    modelValue: [String, Number],
    style: String,
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid #2c3e50;
  border-radius: 3px;
  padding: 8px 10px;
  margin: 10px 0;
}
</style>