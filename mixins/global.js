import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(['configs']),
    ...mapGetters([]),
    isMobile(){
      return (this.$vuetify.breakpoint.name === 'xs' || this.$vuetify.breakpoint.name === 'sm')
    }
  },
  data(){
    return {
      logo: {
      },
      global: "ok"
    }
  },
  methods:{
    normalizeHelper(payload) {
      return JSON.parse(JSON.stringify(payload))
    },
    refresh() {
      window.location.reload()
    },},
}
