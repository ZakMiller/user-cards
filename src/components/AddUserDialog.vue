<template>
  <v-card>
    <v-card-title>Add User</v-card-title>
    <v-card-text>
      <settings description="The user's full name." title="Name">
        <v-text-field />
      </settings>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import Settings from "./Settings.vue";
export default Vue.extend({
  components: { Settings },
});
</script>
