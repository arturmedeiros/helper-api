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
<!--            <v-text-field v-model="email_search"-->
<!--                          label="Example: user@mail.com"-->
<!--                          :append-icon="true ? 'mdi-magnify' : ''"-->
<!--                          @click:append="email_search ? searchEmail() : ''"-->
<!--            ></v-text-field>-->
          </v-card-text>
          <v-card-text v-if="error">
            {{ error }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Code from "@/components/Code";

export default {
  name: 'Pix',
  components: {
    Code
  },
  data() {
    return {
      error: ""
    }
  },

  mounted() {
  },

  head() {
    return {
      title: "PIX QR-Code Generator - Helper API",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Helper API with several FREE options: Geolocation by IP, Email Validator, Email List Validator, PIX QR-Code Generator, Horoscope and much more.'
        }
      ]
    }
  }
}
</script>
