<template>
  <div>
    <v-card ripple
            style="border-radius: 10px; box-shadow: none;"
            width="100%"
            class="mx-auto"
    >
<!--:style="`background: ${'linear-gradient(230deg,#759bff,#843cf6);'}`">-->
      <div style="background: linear-gradient(230deg,#0adaff,#60ef91);">
        <v-card-title class="pt-3">
          <AvatarWithTextInline :title="'IP Geolocation'"
                                :circle="false"
                                :subtitle="''"
                                :image="`${'https://rapidapi.com/cdn/images?url=https://rapidapi-prod-apis.s3.amazonaws.com/0950a51c-edc0-4a08-bb62-c919b4be7c6e.png'}`"
                                :image_size="image_size"
                                :title_size="title_size"
                                :subtitle_size="subtitle_size"/>
        </v-card-title>
      </div>
      <div>
        <v-card outlined style="border-radius: 0 0 10px 10px;" class="px-6 pt-6 pb-3">
          <p class="mt-1">
            API returns location data such as country, city, latitude, longitude, timezone, asn, currency, and +40 informations about IP in JSON format.
          </p>
        </v-card>

      </div>

      <!--      <v-card-->
      <!--        width="100%"-->
      <!--        class="mx-auto rounded-0"-->
      <!--        color="#f10000"-->
      <!--        dark-->
      <!--      >-->
      <!--        <AvatarWithTextInline :title="title"-->
      <!--                              :subtitle="subtitle"-->
      <!--                              :image="image"-->
      <!--                              :image_size="image_size"-->
      <!--                              :title_size="title_size"-->
      <!--                              :subtitle_size="subtitle_size"-->

      <!--        />-->
      <!--      </v-card>-->
    </v-card>
  </div>

</template>

<script>
import AvatarWithTextInline from "@/components/cards/AvatarWithTextInline";

export default {
  name: 'CardHomeDefault',
  components: {
    AvatarWithTextInline
  },
  props: [
    'title',
    'subtitle',
    'image',
    'image_size',
    'title_size',
    'subtitle_size',
    'circle'
  ]
}
</script>
<style scoped>
</style>
