<template>
  <v-card :key="user.id" class="ma-4">
    <v-card-title>{{ user.name }}</v-card-title>
    <v-divider></v-divider>
    <v-list two-line>
      <two-line-list-item
        icon="mdi-phone"
        :value="user.phone"
        label="Phone Number"
      />
      <v-divider inset></v-divider>
      <two-line-list-item
        icon="mdi-email"
        :value="user.email"
        label="Email"
        :link="`mailto:${user.email}`"
      />
      <v-divider inset></v-divider>
      <three-line-list-item
        icon="mdi-map-marker"
        :value="user.address.street"
        :value2="user.address.suite"
        :label="cityZip"
      />
      <v-divider inset></v-divider>
      <two-line-list-item
        icon="mdi-web"
        :value="user.website"
        label="Website"
      />
      <v-divider inset></v-divider>
      <two-line-list-item
        icon="mdi-domain"
        :value="user.company.name"
        label="Company"
      />
    </v-list>
  </v-card>
</template>
<script lang="ts">
import { User } from "@/models/user";
import Vue, { PropType } from "vue";
import TwoLineListItem from "./TwoLineListItem.vue";
import ThreeLineListItem from "./ThreeLineListItem.vue";
export default Vue.extend({
  components: { TwoLineListItem, ThreeLineListItem },
  props: {
    user: {
      type: Object as PropType<User>,
    },
  },
  computed: {
    cityZip() {
      return `${this.user.address.city} ${this.user.address.zipcode}`;
    },
  },
});
</script>
