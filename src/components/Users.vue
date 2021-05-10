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
  computed: {
    users() {
      return this.$store.get("users");
    },
  },
});
</script>
