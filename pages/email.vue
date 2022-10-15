<template>
  <v-container fluid>
    <v-row class="py-3" justify="center" align="center">
      <v-col cols="12" sm="12" md="8" lg="8" shadow="none">
        <v-card outlined style="border-radius: 10px;" class="pa-4">
          <v-card-title class="flex-fill">
            <div class="mr-3">
              <v-icon>mdi-email</v-icon>
            </div>
            Enter email address
          </v-card-title>
          <v-card-text>
            <v-text-field v-model="email_search"
                          label="Example: user@mail.com"
                          :append-icon="true ? 'mdi-magnify' : ''"
                          @click:append="email_search ? searchEmail() : ''"
            ></v-text-field>
          </v-card-text>
          <v-card-text v-if="error">
            {{ error }}
          </v-card-text>
        </v-card>
      </v-col>
      <!--  Email Valid  -->
      <v-col v-if="$store.state.email.data.status === true" cols="12" sm="12" md="8" lg="8" shadow="none">
        <v-card outlined style="border-radius: 10px;" class="pa-4">
          <v-card-title class="flex-fill">
            <div class="mr-3">
              <v-icon>mdi-information-outline</v-icon>
            </div>
            Email information
          </v-card-title>
          <v-card-text class="">
            <v-alert
              dense
              text
              color="success"
            >
              {{ $store.state.email.data.message }}
            </v-alert>
          </v-card-text>
          <v-card-text>
            <Code type="email"/>
          </v-card-text>
          <v-card-text>
            <div class="text-xs-right">
              <em><small>&mdash; Free API</small></em>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <!--  Email Invalid  -->
      <v-col v-if="$store.state.email.data.status === false" cols="12" sm="12" md="8" lg="8" shadow="none">
        <v-card outlined style="border-radius: 10px;" class="pa-4 d-block text-center">
          <v-card-text class="">
            <v-alert
              dense
              text
              color="error"
            >
              <div class="pt-4 text-center ">
                <v-icon color="error">mdi-alert</v-icon>
              </div>
              <div class="pt-3 pb-4 font-weight-bold">
                {{ $store.state.email.data.message }}
              </div>
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Code from "@/components/Code";

export default {
  name: 'Email',
  components: {
    Code
  },
  /* SSR */
  head() {
    return {
      title: "Email Validator - Helper API",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Helper API with several FREE options: Geolocation by IP, Email Validator, Email List Validator, PIX QR-Code Generator, Horoscope and much more.'
        }
      ]
    }
  },
  data() {
    return {
      email_search: "",
      error: ""
    }
  },
  mounted() {
  },
  methods: {
    searchEmail(){
      this.error = ""
      if (this.email_search && this.email_search.length > 2 && this.validateEmail(this.email_search)) {
        this.$store.commit('email/SET_EMAIL', [])
        this.$store.dispatch('email/getEmailInformation', {
          email: this.normalizeHelper(this.email_search)
        })
      } else {
        this.error = "Type a valid email address."
      }
    },
    validateEmail(email) {
      let re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  }
}
</script>
