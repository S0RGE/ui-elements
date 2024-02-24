<template>
  <div class="input">
    <span v-if="$slots.prepend" class="input__prev-icon">
      <slot name="prepend" />
    </span>
    <span class="input__main-wrapper">
      <slot name="default">
        <label
          v-if="label"
          :for="id"
          class="input__label"
          :class="[(focused || model) && 'label-active']"
        >
          {{ label }}
        </label>
        <input
          @focus="onFocusHandler"
          @focusout="onFocusoutHandler"
          :id="id"
          type="text"
          v-model="model"
          class="input__main"
          :disabled="disabled"
        />
      </slot>
    </span>
    <span v-if="$slots.append" class="input__post-icon">
      <slot name="append" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface IProps {
  id: string | number;
  label?: string | number;
  disabled?: boolean;
}

const model = defineModel<string | number>();

const { id, label, disabled } = defineProps<IProps>();

const emit = defineEmits(["focus"]);

const focused = ref(false);

const onFocusHandler = () => {
  focused.value = true;
  emit("focus", focused.value);
};

const onFocusoutHandler = () => {
  focused.value = false;
  emit("focus", focused.value);
};
</script>

<style scoped>
.input {
  display: flex;
  align-items: center;
}

.input__main-wrapper {
    position: relative;
}

.input__main {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  outline: none;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

/* Label */
.input__label {
  position: absolute;
  top: 45%;
  left: 0.5rem;
  transform: translateY(-50%);
  transition: all 0.3s ease;
  z-index: 1;
  pointer-events: none;
  background-color: #fff;
  padding: 0 0.6rem;

  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.3;
  color: #495057;
}

.label-active {
  top: 0;
}

.input__prev-icon {
}
.input__post-icon {
}
</style>
