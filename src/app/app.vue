<script setup lang="ts">
import { ref } from 'vue';
import Input from '@/shared/UiInput';
import UiButton from '@/shared/UiButton';

const inp = ref('');
</script>

<template>
  <div>
    <h1>Input</h1>
    <Input label="Label" id="input" v-model="inp">
      <template #prepend> test1</template>
      <template #append> asdfasdfasdf </template>
    </Input>
    <br />
    <ui-button type="warning">test</ui-button>
  </div>
</template>
