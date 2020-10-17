<template>
  <div>
    <span>{{ hashTagText }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      required: true,
    },
  },
  computed: {
    hashTagText() {
      return `#${this.item}`;
    },
  },
};
</script>

<style scoped>
div {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 24px;
  margin-right: 8px;
  border-radius: 8px;
  font-size: 0.7rem;
  color: #ffffff;
  background-color: #2e88db;
}
</style>
