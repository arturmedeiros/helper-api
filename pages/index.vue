<template>
  <v-container fluid>
    <v-row class="py-3" justify="center" align="center">
      <v-col cols="12" sm="12" md="12" class="text-center" shadow="none">
        <v-card elevation="0"
                style="border-radius: 10px; min-height: 200px;"
                class="py-7 px-4 bg_animated  text-center py-5" >
          <v-card-title class="text-center d-block pt-3"
                        style="font-size: 2.2rem;">
            <div class="pt-2 pb-4" style="font-size: 2.2rem;">🎉</div>
            Welcome to the Helper API!
          </v-card-title>
          <v-card-text>
            <p>The Helper API has the purpose of offering a functional, simple and accessible service.</p>
            <p></p>
            <div class="text-xs-right">
              <em><small>&mdash; Team <strong>ARJOS</strong> </small></em>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="px-0 pb-5" justify="center" align="center">
      <v-col v-for="(item, index) in this.apis"
             :key="`${item}${index}`"
             :cols="isMobile
                    ? 12 : 6"
             xs="12"
             sm="12"
             md="6"
             shadow="none"
             class="cursor-pointer"
      >
        <CardHomeDefault :title="item.title"
                         subtitle="Gratuita"
                         :text="item.text"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AvatarWithTextInline from "@/components/cards/AvatarWithTextInline";
import CardHomeDefault from "@/components/CardHomeDefault";

export default {
  name: 'IndexPage',
  components: {
    AvatarWithTextInline,
    CardHomeDefault
  },
  data() {
    return {
      info_api: []
    }
  },
  head() {
    return {
      title: "Helper API",
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

<style>
.bg_animated {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  /*height: 100vh;*/
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
