<template>
  <div class="custom-input">
    <span class="custom-input__main-wrapper">
      <span v-if="$slots.prepend" class="custom-input__prev-icon">
        <slot name="prepend" />
      </span>
      <label
        v-if="label"
        :for="customId"
        class="custom-input__label"
        :class="customLabelClasses"
      >
        {{ label }}
      </label>
      <input
        @focus="onFocusHandler"
        @focusout="onFocusoutHandler"
        :id="customId"
        type="text"
        v-model="model"
        class="custom-input__main"
        :class="customInputClasses"
        :disabled="disabled"
      />
    </span>
    <span v-if="$slots.append" class="custom-input__post-icon">
      <slot name="append" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';
import { generateUniqueId } from '@/utils/random';

interface IProps {
  id?: string;
  label?: string;
  disabled?: boolean;
  classes?: string | string[];
}

const model = defineModel<string>();

const { id, label, disabled, classes } = defineProps<IProps>();

const emit = defineEmits(['focus']);

const focused = ref(false);

const customId = computed(() => id || generateUniqueId());

const slots = useSlots();

const customInputClasses = computed(() => {
  const currentClasses = [];
  if (Array.isArray(classes)) {
    currentClasses.push(...classes);
  } else if (typeof classes === 'string') {
    currentClasses.push(classes);
  }

  if (slots.prepend) {
    currentClasses.push('custom-input__icon-prepend');
  }
  return currentClasses;
});

const customLabelClasses = computed(() => {
  const currentClasses = [(focused.value || model.value) && 'label-active'];

  if (slots.prepend) {
    currentClasses.push('custom-input__icon-prepend');
  }
  return currentClasses;
});

const onFocusHandler = () => {
  focused.value = true;
  emit('focus', focused.value);
};

const onFocusoutHandler = () => {
  focused.value = false;
  emit('focus', focused.value);
};
</script>

<style>
.custom-input {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.custom-input__main-wrapper {
  position: relative;
}

.custom-input__main {
  padding: 0.5em 1em;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  outline: none;

  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  transition: all 0.15s ease-in-out;
}

.custom-input__main.custom-input__icon-prepend {
  padding-left: 2em;
}

/* Label */
.custom-input__label {
  position: absolute;
  top: 50%;
  left: 0.5em;
  transform: translateY(-50%);
  transition: all 0.3s ease;
  z-index: 1;
  pointer-events: none;
  background-color: #fff;
  padding: 0 0.6em;

  font-size: 1em;
  font-weight: 400;
  line-height: 1.3;
  color: #495057;
}

.label-active {
  top: 0;
}

.custom-input__label.custom-input__icon-prepend {
  left: 1.5em;
}

.custom-input__prev-icon {
  position: absolute;
  top: 50%;
  left: 0.5em;
  transform: translateY(-50%);
  z-index: 1;
  pointer-events: none;
}
.custom-input__post-icon {
}
</style>
