<script setup lang="ts">
import { ref } from "vue";
import Input from "../shared/Input/";

const inp = ref("");
</script>

<template>
  <div>
    <h1>Input</h1>
    <Input label="Label" id="input" v-model="inp">
      <template #prepend> test1</template>
      <template #append> asdfasdfasdf </template>
    </Input>
  </div>
</template>

<style scoped></style>
