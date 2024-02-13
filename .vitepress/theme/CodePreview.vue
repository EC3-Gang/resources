<script setup>
import { ref, useSlots } from "vue";
const slot = ref(null);

const slots = useSlots();

</script>

<template>
  <div ref="slot">
    <slot />
  </div>
  <h4>Preview:</h4>
  <div v-html="slot?.children?.[0].children?.[2]?.textContent" />
</template>