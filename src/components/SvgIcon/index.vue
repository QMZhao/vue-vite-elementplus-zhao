<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  iconClass: {
    type: String,
    default: "icon"
  },
  color: {
    type: String,
    default: "#333"
  }
});

const symbolId = computed(() => `#icon-${props.iconClass}`);
</script>

<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<style scoped>
.svg-icon {
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
