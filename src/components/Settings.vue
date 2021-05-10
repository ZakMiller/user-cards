<template>
  <v-row>
    <v-col cols="6">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ title }}</v-list-item-title>
          <v-list-item-subtitle class="text-wrap">{{
            description
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-col>
    <v-col cols="6">
      <slot></slot>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>
