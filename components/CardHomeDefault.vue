<template>
  <div>
    <v-card ripple
            outlined
            style="border-radius: 10px; box-shadow: none;"
            width="100%"
            height="100%"
            class="mx-auto"
    >
      <div style="">
        <v-card-title class="pt-3">
          <AvatarWithTextInline :title="title"
                                :circle="false"
                                :subtitle="''"
                                :image="`${'https://rapidapi.com/cdn/images?url=https://rapidapi-prod-apis.s3.amazonaws.com/0950a51c-edc0-4a08-bb62-c919b4be7c6e.png'}`"
                                :image_size="image_size"
                                :title_size="title_size"
                                :subtitle_size="subtitle_size"/>
        </v-card-title>
      </div>
      <v-divider/>
      <div>
        <v-card elevation="0"
                style="border-radius: 0 0 10px 10px;"
                class="px-6 pt-6 pb-3">
          <p class="mt-1">
            {{text}}
          </p>
        </v-card>

      </div>

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
    'circle',
    'text'
  ]
}
</script>
<style scoped>
</style>
