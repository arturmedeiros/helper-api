<template>
  <v-list-item class="">
    <v-list-item-avatar :size="image_size"
                        :tile="!circle">
      <v-img
        class=""
        alt=""
        :src="image ? image : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'"
      ></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title
        :style="title_size ? `font-size: ${title_size}` : ''"
      >
        {{ title ? title : "Artur" }}
      </v-list-item-title>
      <v-list-item-subtitle
        class=""
        :style="subtitle_size ? `font-size: ${subtitle_size}` : ''"
      >
        {{ subtitle ? subtitle : "Developer" }}
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
  ]
}
</script>

<style scoped>

</style>
