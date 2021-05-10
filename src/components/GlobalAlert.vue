<template>
  <v-snackbar top middle :value="snackbar" :color="type">
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="closeSnackbar">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    text() {
      return this.$store.get("snackbar/text");
    },
    snackbar() {
      return this.$store.get("snackbar/snackbar");
    },
    type() {
      return this.$store.get("snackbar/type");
    },
  },
  methods: {
    closeSnackbar() {
      return this.$store.set("snackbar/snackbar", false);
    },
  },
});
</script>
