import { mapState, mapGetters } from "vuex";

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
      },
      apis: [
        {
          icon: 'mdi-map-marker-radius-outline',
          avatar: '',
          title: 'IP Geolocation',
          to: '/ip'
        },
        {
          icon: 'mdi-email-check-outline',
          avatar: '',
          title: 'Email Validator',
          to: '/email'
        },
        {
          icon: 'mdi-qrcode-scan',
          avatar: '',
          title: 'PIX Generator',
          to: '/pix'
        },
        {
          icon: 'mdi-star-shooting-outline',
          avatar: '',
          title: 'Horoscope',
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
