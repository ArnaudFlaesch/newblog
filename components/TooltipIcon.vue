<template>
  <v-tooltip :text="props.tooltip" location="top">
    <template v-slot:activator="{ props }">
      <v-icon v-bind="props"><slot name="icon"></slot></v-icon>
    </template>
  </v-tooltip>
</template>

<script lang="ts" setup>
const props = defineProps({
  tooltip: String
});
</script>
