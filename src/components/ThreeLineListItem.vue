<template>
  <v-list-item>
    <v-list-item-icon>
      <v-icon color="indigo">
        {{ icon }}
      </v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>{{ value }}</v-list-item-title>
      <v-list-item-title> {{ value2 }} </v-list-item-title>
      <v-list-item-subtitle>{{ label }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    icon: {
      type: String,
    },
    value: {
      type: String,
    },
    value2: {
      type: String,
    },
    label: {
      type: String,
    },
  },
});
</script>
