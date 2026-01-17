<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="currentIconSize.width"
    :height="currentIconSize.height"
    viewBox="0 0 20 20"
    fill="none"
    :stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface IIconSize {
  width: number;
  height: number;
}

interface IProps {
  size?: IIconSize;
  color?: string;
}

const props = defineProps<IProps>();

const currentIconSize = computed<IIconSize>(() => {
  if (props.size) {
    return props.size;
  }
  return { width: 16, height: 16 };
});

const currentColor = computed(() => {
  if (props.color) {
    return props.color;
  }
  return '#000';
});
</script>
