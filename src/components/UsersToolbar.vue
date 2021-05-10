<template>
  <v-toolbar flat class="mb-1">
    <v-spacer></v-spacer>
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
        large
        depressed
        :value="false"
        @change="() => updateSortOrder(false)"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
      <v-btn
        large
        depressed
        :value="true"
        @change="() => updateSortOrder(true)"
      >
        <v-icon>mdi-arrow-down</v-icon>
      </v-btn>
    </v-btn-toggle>
  </v-toolbar>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      keys: ["Last name", "Zip code"],
    };
  },
  computed: {
    sortBy() {
      return this.$store.get("sortBy");
    },
    sortDesc() {
      return this.$store.get("sortDesc");
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
