<template>
  <v-form @submit="save" ref="form" v-model="valid">
    <v-card>
      <v-card-title>Add User</v-card-title>
      <v-card-text>
        <settings description="The user's full name." title="Name">
          <v-text-field dense v-model="user.name" :rules="nameRules" />
        </settings>
        <settings description="The user's username." title="Username">
          <v-text-field dense v-model="user.username" />
        </settings>
        <settings description="The user's website." title="Website">
          <v-text-field dense v-model="user.website" :rules="websiteRules" />
        </settings>
        <v-subheader>Contact Information</v-subheader>
        <settings description="The user's email." title="Email">
          <v-text-field dense v-model="user.email" :rules="emailRules" />
        </settings>
        <settings description="The user's phone number." title="Phone">
          <v-text-field
            dense
            v-model="user.phone"
            type="tel"
            :rules="phoneRules"
            v-mask="[
              '(###) ###-####',
              '(###) ###-#### x###',
              '(###) ###-#### x####',
              '(###) ###-#### x#####',
            ]"
          />
        </settings>
        <settings description="The user's address." title="Address">
          <v-row>
            <v-col>
              <v-text-field
                label="Street"
                dense
                v-model="user.address.street"
                :rules="streetAddressRules"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                label="Apartment or Suite #"
                dense
                v-model="user.address.suite"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                label="City"
                dense
                v-model="user.address.city"
                :rules="cityRules"
              />
            </v-col>
            <v-col>
              <v-text-field
                label="Zip code"
                dense
                v-model="user.address.zipcode"
                :rules="zipcodeRules"
              />
            </v-col>
          </v-row>
        </settings>
        <v-subheader>Company</v-subheader>
        <settings description="The company's name." title="Name">
          <v-text-field
            dense
            v-model="user.company.name"
            :rules="companyNameRules"
          />
        </settings>
        <settings
          description="The company's catch phrase."
          title="Catch phrase"
        >
          <v-text-field
            dense
            v-model="user.company.catchPhrase"
            :rules="catchPhraseRules"
          />
        </settings>
        <settings description="The company's bs." title="BS">
          <v-text-field dense v-model="user.company.bs" :rules="bsRules" />
        </settings>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary" :disabled="!valid" type="submit"
          >Save</v-btn
        >
        <v-btn text @click="() => closeDialog()">Cancel</v-btn>
      </v-card-actions>
    </v-card></v-form
  >
</template>
<script lang="ts">
import Vue from "vue";
import Settings from "./Settings.vue";
import FormRules from "@/services/form-validation";
import { mask } from "vue-the-mask";
import UsersService from "@/services/users";
import AlertService from "@/services/alert";
import { UserDto, UserDtoWithoutId } from "@/models/user";
export default Vue.extend({
  directives: { mask },
  props: {
    closeDialog: {
      type: Function,
    },
  },
  components: { Settings },
  data() {
    return {
      valid: false,
      user: {
        name: "Z",
        email: "zak@gmail.com",
        phone: "7274817160",
        website: "example",
        address: {
          street: "fwaef",
          city: "waf",
          zipcode: "awf",
          suite: "awef",
        },
        company: {
          name: "2234",
          catchPhrase: "waf",
          bs: "awfaw",
        },
        username: "e",
      } as UserDtoWithoutId,

      nameRules: FormRules.name,
      emailRules: FormRules.email,
      zipcodeRules: FormRules.address.zipcode,
      streetAddressRules: FormRules.address.street,
      cityRules: FormRules.address.city,
      companyNameRules: FormRules.company.name,
      catchPhraseRules: FormRules.company.catchPhrase,
      bsRules: FormRules.company.bs,
      phoneRules: FormRules.phone,
      websiteRules: FormRules.website,
    };
  },
  methods: {
    save(e: Event) {
      e.preventDefault();
      console.log("here");
      UsersService.addUser(this.user);
      AlertService.alert("User added", false);
      this.closeDialog();
    },
  },
});
</script>
