<template>
  <v-toolbar flat class="mb-1">
    <v-select
      class="px-2"
      :value="sortBy"
      flat
      hide-details
      :items="keys"
      label="Sort by"
      @change="updateSortBy"
    ></v-select>
    <v-btn-toggle :value="sortDesc" mandatory>
      <v-btn
        :large="buttonSize === 'large'"
        :small="buttonSize === 'small'"
        depressed
        :value="false"
        @change="() => updateSortOrder(false)"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
      <v-btn
        :large="buttonSize === 'large'"
        :small="buttonSize === 'small'"
        depressed
        :value="true"
        @change="() => updateSortOrder(true)"
      >
        <v-icon>mdi-arrow-down</v-icon>
      </v-btn>
    </v-btn-toggle>
    <v-spacer />
    <add-user-button :openDialog="() => (dialog = true)" />
    <v-dialog v-model="dialog" max-width="600px">
      <add-user-dialog :closeDialog="() => (dialog = false)" />
    </v-dialog>
  </v-toolbar>
</template>
<script lang="ts">
import Vue from "vue";
import AddUserButton from "./AddUserButton.vue";
import AddUserDialog from "./AddUserDialog.vue";
export default Vue.extend({
  components: { AddUserButton, AddUserDialog },
  data() {
    return {
      keys: ["Last name", "Zip code"],
      dialog: false,
    };
  },
  computed: {
    sortBy() {
      return this.$store.get("sortBy");
    },
    sortDesc() {
      return this.$store.get("sortDesc");
    },
    buttonSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "small";
        case "sm":
          return "small";
        case "md":
          return "medium";
        case "lg":
          return "large";
        case "xl":
          return "large";
        default:
          return "medium";
      }
    },
  },
  methods: {
    updateSortOrder(sortDesc: boolean) {
      this.$store.set("sortDesc", sortDesc);
    },
    updateSortBy(sortBy: string) {
      this.$store.set("sortBy", sortBy);
    },
  },
});
</script>
