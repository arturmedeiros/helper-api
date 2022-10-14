import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(['configs']),
    ...mapGetters([]),
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
          icon: 'mdi-apps',
          avatar: '',
          title: 'IP Geolocation',
          to: '/ip'
        },
        {
          icon: 'mdi-chart-bubble',
          avatar: '',
          title: 'Email Validator',
          to: '/email'
        },
        {
          icon: 'mdi-chart-bubble',
          avatar: '',
          title: 'PIX Generator',
          to: '/pix'
        },
        {
          icon: 'mdi-chart-bubble',
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
  },
}
