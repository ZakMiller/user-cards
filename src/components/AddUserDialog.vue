<template>
  <v-card>
    <v-card-title>Add User</v-card-title>
    <v-card-text>
      <v-form @submit="save" ref="form" v-model="valid">
        <settings description="The user's full name." title="Name">
          <v-text-field dense v-model="name" :rules="nameRules" />
        </settings>
        <settings description="The user's username." title="Username">
          <v-text-field dense v-model="username" />
        </settings>
        <settings description="The user's website." title="Website">
          <v-text-field dense v-model="website" />
        </settings>
        <v-subheader>Contact Information</v-subheader>
        <settings description="The user's email." title="Email">
          <v-text-field dense v-model="email" :rules="emailRules" />
        </settings>
        <settings description="The user's phone number." title="Phone">
          <v-text-field dense v-model="phone" />
        </settings>
        <!-- <v-subheader>Company</v-subheader>
         <settings description="The company ." title="Phone">
          <v-text-field dense v-model="phone" />
        </settings> -->
        <settings description="The user's address." title="Address">
          <v-row>
            <v-col>
              <v-text-field
                label="Street"
                dense
                v-model="street"
                :rules="streetAddressRules"
              />
            </v-col>
            <v-col>
              <v-text-field label="Suite #" dense v-model="suite" />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                label="City"
                dense
                v-model="city"
                :rules="cityRules"
              />
            </v-col>
            <v-col>
              <v-text-field
                label="Zip code"
                dense
                v-model="zipcode"
                :rules="zipcodeRules"
              />
            </v-col>
          </v-row>
        </settings>
        <v-subheader>Company</v-subheader>
        <settings description="The company's name." title="Name">
          <v-text-field dense v-model="companyName" :rules="companyNameRules" />
        </settings>
        <settings
          description="The company's catch phrase."
          title="Catch phrase"
        >
          <v-text-field
            dense
            v-model="companyCatchPhrase"
            :rules="catchPhraseRules"
          />
        </settings>
        <settings description="The company's bs." title="BS">
          <v-text-field dense v-model="companyBS" :rules="bsRules" />
        </settings>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="primary" :disabled="!valid" type="submit">Save</v-btn>
      <v-btn text @click="() => closeDialog()">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
import Settings from "./Settings.vue";
import FormRules from "@/services/form-validation";
export default Vue.extend({
  props: {
    closeDialog: {
      type: Function,
    },
  },
  components: { Settings },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      website: "",
      street: "",
      city: "",
      zipcode: "",
      suite: "",
      companyName: "",
      nameRules: FormRules.name,
      emailRules: FormRules.email,
      zipcodeRules: FormRules.address.zipcode,
      streetAddressRules: FormRules.address.street,
      cityRules: FormRules.address.city,
      companyNameRules: FormRules.company.name,
      catchPhraseRules: FormRules.company.catchPhrase,
      bsRules: FormRules.company.bs,
      //   phoneRules: FormRules.phone,
    };
  },
  methods: {
    save(e: Event) {
      e.preventDefault();
      this.closeDialog();
    },
  },
});
</script>
