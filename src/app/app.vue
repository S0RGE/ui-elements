<script setup lang="ts">
import { ref } from "vue";
import Input from "@/shared/Input";
import Button from "@/shared/Button";

const inp = ref("");
</script>

<template>
  <div>
    <h1>Input</h1>
    <Input label="Label" id="input" v-model="inp">
      <template #prepend> test1</template>
      <template #append> asdfasdfasdf </template>
    </Input>
    <br />
    <Button type="warning" disabled>test</Button>
  </div>
</template>
