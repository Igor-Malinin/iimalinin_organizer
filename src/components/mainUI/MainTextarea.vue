<template>
  <div class="textarea_container">
    <textarea rows="1" :value="modelValue" :style="style" @input="updateInput" class="textarea" :readonly="readonly" :maxlength="maxLength"></textarea>
    <span class="remaining_characters" v-if="!readonly">{{ remainingCharacters }}</span>
  </div>
</template>

<script>
export default {
  name: "MainTextarea",
  props: {
    modelValue: [String, Number],
    style: String,
    maxLength: Number,
    readonly: Object
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
  computed: {
    remainingCharacters() {
      return this.maxLength - this.modelValue.length;
    },
  }
}
</script>

<style scoped>
.textarea {
  width: 100%;
  border: 1px solid #2c3e50;
  border-radius: 3px;
  padding: 8px 12px;
  margin: 10px 0 5px;
  resize: none;
}

.textarea_container {
  position: relative;
}
.remaining_characters {
  position: absolute;
  right: 10px;
  bottom: 16px;
}
</style>