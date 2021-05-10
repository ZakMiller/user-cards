<template>
  <v-btn color="primary" @click="openDialog">
    <v-icon left>mdi-plus</v-icon>
    Add User
  </v-btn>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    openDialog: {
      type: Function,
    },
  },
});
</script>
