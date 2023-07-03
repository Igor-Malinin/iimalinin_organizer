<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MainButton"
}
</script>

<style lang="scss" scoped>

.btn {
  padding: 8px 10px;
  background: none;
  color: #0067af;
  border: 1px solid #0059b4;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    background: none;
    color: #777777;
    cursor: not-allowed;
  }
}
</style>