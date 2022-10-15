import { mapState, mapGetters } from "vuex";

import img_email_validator from "@/assets/images/email-validator/favicon.png"
import img_geolocation from "@/assets/images/geolocation/favicon.png"
import img_horoscope from "@/assets/images/horoscope/favicon.png"
import img_pix from "@/assets/images/pix/favicon.png"

export default {
  computed: {
    ...mapState([
      'configs',
      'email',
      'ip',
      'horoscope',
      'pix'
    ]),
    ...mapGetters([
      'getCoordinates',
      'getIpCodeFormatted',
      'getEmailCodeFormatted',
      'getSigns',
      'getSignCodeFormatted'
    ]),
    isMobile(){
      return (this.$vuetify.breakpoint.name === 'xs' || this.$vuetify.breakpoint.name === 'sm')
    },
  },
  data(){
    return {
      logo: {
        img_email_validator: img_email_validator,
        img_geolocation: img_geolocation,
        img_horoscope: img_horoscope,
        img_pix: img_pix,
      },
      apis: [
        {
          icon: 'mdi-map-marker-radius-outline',
          avatar: 'geolocation',
          title: 'IP Geolocation',
          subtitle: '',
          text: 'API returns location data such as country, city, latitude, longitude, timezone, asn, currency, and +40 information about IP in JSON format.',
          to: '/ip'
        },
        {
          icon: 'mdi-email-check-outline',
          avatar: 'email_validator',
          title: 'Email Validator',
          text: 'Validate email addresses in real-time. Make sure a mailbox really exist. Checks for fake DNS as well and much more.',
          to: '/email'
        },
        {
          icon: 'mdi-qrcode-scan',
          avatar: 'pix',
          title: 'PIX Generator',
          text: 'QR Code generator for PIX payments. You make a POST request with some parameters and you get a base64 encoded image.',
          to: '/pix'
        },
        {
          icon: 'mdi-star-shooting-outline',
          avatar: 'horoscope',
          title: 'Horoscope',
          text: 'Access 12 horoscopes every day, written by professional astrologers. Important: Only Portuguese (PT) language is currently available.',
          to: '/horoscope'
        },
      ]
    }
  },
  methods:{
    normalizeHelper(payload) {
      return JSON.parse(JSON.stringify(payload))
    },
    refresh() {
      window.location.reload()
    },
    getCodeType(data, type) {
      if (data) {
        if (type === "ip") {
          return this.getIpCodeFormatted
        } else if (this.type === "email") {
          return this.getEmailCodeFormatted
        } else if (this.type === "sign") {
          return this.getSignCodeFormatted
        }
      }
    }
  },
}
