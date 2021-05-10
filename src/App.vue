<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>
    <v-main>
      <global-alert />
      <users />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import GlobalAlert from "./components/GlobalAlert.vue";
import Users from "./components/Users.vue";
import AlertService from "./services/alert";
import UsersService from "./services/users";

export default Vue.extend({
  name: "App",
  components: {
    Users,
    GlobalAlert,
  },
  mounted() {
    try {
      UsersService.getUsers();
    } catch {
      AlertService.alert("Couldn't load users", true);
    }
  },
});
</script>
