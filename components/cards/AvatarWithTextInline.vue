<template>
  <v-list-item class="">
    <v-list-item-avatar :size="image_size"
                        :tile="!circle">
      <v-img
        class=""
        alt=""
        :src="getImg(image)"
      ></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title
        :style="title_size ? `font-size: ${title_size}` : ''"
      >
        {{ title ? title : "" }}
      </v-list-item-title>
      <v-list-item-subtitle
        class=""
        style="color: seagreen"
        :style="subtitle_size ? `font-size: ${subtitle_size}` : ''"
      >
        {{ subtitle ? subtitle : "" }}
      </v-list-item-subtitle>
    </v-list-item-content>
    <!--  //  -->
    <v-row
      v-if="false"
      align="center"
      justify="end"
    >
      <v-icon class="mr-1">
        mdi-heart
      </v-icon>
      <span class="subheading mr-2">256</span>
      <span class="mr-1">·</span>
      <v-icon class="mr-1">
        mdi-share-variant
      </v-icon>
      <span class="subheading">45</span>
    </v-row>
  </v-list-item>
</template>

<script>
export default {
  name: "AvatarWithTextInline",
  props: [
    'title',
    'subtitle',
    'image',
    'image_size',
    'title_size',
    'subtitle_size',
    'circle'
  ],
  methods: {
    getImg(api) {
      if (api === 'email_validator') {
        return this.logo.img_email_validator
      } else if (api === 'geolocation') {
        return this.logo.img_geolocation
      } else if (api === 'pix') {
        return this.logo.img_pix
      } else if (api === 'horoscope') {
        return this.logo.img_horoscope
      } else {
        'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
      }
    }
  }
}
</script>

<style scoped>

</style>
