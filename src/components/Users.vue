<template>
  <v-container>
    <v-data-iterator :items="users">
      <template v-slot:header>
        <users-toolbar />
      </template>
      <template v-slot:default="props">
        <template v-for="item in props.items">
          <user-card :user="item" :key="item.id" />
        </template>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import UsersService from "@/services/users";
import { User } from "@/models/user";
import AlertService from "@/services/alert";
import UserCard from "./User.vue";
import UsersToolbar from "./UsersToolbar.vue";
export default Vue.extend({
  components: { UserCard, UsersToolbar },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
  },
});
</script>
