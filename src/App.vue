<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>

    <v-main>
      <users />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Users from "./components/Users.vue";
import UsersService from "./services/users";

export default Vue.extend({
  name: "App",
  components: {
    Users,
  },
  mounted() {
    UsersService.getUsers();
  },
});
</script>
