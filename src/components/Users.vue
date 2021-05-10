<template>
  <v-container>
    <v-data-iterator :items="users">
      <template v-slot:default="props">
        <template v-for="item in props.items">
          <UserCard :user="item" :key="item.id" />
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
export default Vue.extend({
  components: { UserCard },
  data() {
    return {
      users: [] as User[],
    };
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    async loadUsers() {
      try {
        this.users = await UsersService.getUsers();
        console.log(this.users);
      } catch {
        AlertService.alert("Something went wrong while loading the users.");
      }
    },
  },
});
</script>
