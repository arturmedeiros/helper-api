<template>
  <v-card v-if="($store.state.ip.data.language && $route.fullPath === '/ip') || ($store.state.email.data && $route.fullPath === '/email')" dark>
    <div v-highlightjs>
      <code style="padding: 20px 30px 0px 30px;
                   max-height: 450px;
                   max-width: 100%;
                   overflow-y: auto;
                   overflow-x: auto;
                   width: 100%;
                   flex-wrap: inherit;"
            class="javascript">
  <pre>
  {{ getCodeType() }}
  </pre>
      </code>
    </div>
  </v-card>
</template>

<script>

export default {
  name: "Code",
  data(){
    return {
      links: []
    }
  },
  props: [
    'type'
  ],
  components:{
  },
  computed: {
    ipRequest(){
      if  (this.$store.state.ip.data.language) {
        return `
{
  "ip": ${this.$store.state.ip.data.ip},
  "language": ${this.$store.state.ip.data.language},
  "timezone": ${this.$store.state.ip.data.timezone},
  "location": {
        "latitude": ${this.$store.state.ip.data.location.latitude},
        "longitude": ${this.$store.state.ip.data.location.longitude},
        "accuracy": ${this.$store.state.ip.data.location.accuracy},
        "city": ${this.$store.state.ip.data.location.city},
        "region": ${this.$store.state.ip.data.location.region},
        "country": ${this.$store.state.ip.data.location.country},
        "country_capital": ${this.$store.state.ip.data.location.country_capital},
        "country_calling_code": ${this.$store.state.ip.data.location.country_calling_code},
        "continent": ${this.$store.state.ip.data.location.continent},
        "continent_region": ${this.$store.state.ip.data.location.continent_region},
        "continent_region_code": ${this.$store.state.ip.data.location.continent_region_code},
        "code_fips": ${this.$store.state.ip.data.location.code_fips},
        "code_iso2": ${this.$store.state.ip.data.location.code_iso2},
        "code_iso3": ${this.$store.state.ip.data.location.code_iso3},
        "code_isoNo": ${this.$store.state.ip.data.location.code_isoNo},
        "emoji": ${this.$store.state.ip.data.location.emoji},
        "currency": ${this.$store.state.ip.data.location.currency},
        "currency_symbol": ${this.$store.state.ip.data.location.currency_symbol},
  },
  "provider": {
        "name": ${this.$store.state.ip.data.provider.name},
        "isp": ${this.$store.state.ip.data.provider.isp},
        "asn": ${this.$store.state.ip.data.provider.asn},
  },
  "user_agent": ${this.$store.state.ip.data.user_agent},
  "browser": {
        "name": ${this.$store.state.ip.data.browser.name},
        "version": ${this.$store.state.ip.data.browser.version},
        "major": ${this.$store.state.ip.data.browser.major},
        "engine": ${this.$store.state.ip.data.browser.engine},
        "engine_version": ${this.$store.state.ip.data.browser.engine_version},
  },
  "os": {
        "name": ${this.$store.state.ip.data.os.name},
        "version": ${this.$store.state.ip.data.os.version},
        "comercial_name": ${this.$store.state.ip.data.os.comercial_name},
  },
  "device": {
        "type": ${this.$store.state.ip.data.device.device},
        "connection": {
          "downlink": ${this.$store.state.ip.data.device.connection.downlink},
          "effectiveType": ${this.$store.state.ip.data.device.connection.effectiveType},
          "rtt": ${this.$store.state.ip.data.device.connection.rtt},
        }
  },
  "maps": {
    "iframe": ${this.$store.state.ip.data.maps.iframe},
    "location": ${this.$store.state.ip.data.maps.location},
  },
  "api_version": ${this.$store.state.ip.data.api_version},
}
`
      }
      return []
    },
    emailValidator(){
      if (this.$store.state.email.data.data) {
        return `${JSON.stringify(this.$store.state.email.data.data, null, 2)}`
      }
      return []
    },
  },
  methods: {
    getCodeType(){
      if (this.type === "ip") {
        return this.ipRequest
      } else if (this.type === "email") {
        // console.log("Please enter", this.type)
        return this.emailValidator
      } else {
        return this.ipRequest
      }
    }
  },
  watch: {
  }
}
</script>

<style lang="sass">

code::-webkit-scrollbar-track
  width: 0 !important
  background: rgba(83, 19, 19, 0) !important

code::-webkit-scrollbar
  width: 0 !important
  background: rgba(83, 19, 19, 0) !important

code::-webkit-scrollbar-thumb
  width: 0 !important
  background: rgba(83, 19, 19, 0) !important


.hljs
  display: block
  overflow-x: auto
  padding: 0.5em
  background: #050507


.hljs-built_in,
.hljs-selector-tag,
.hljs-section,
.hljs-link
  color: #8be9fd


.hljs-keyword
  color: #ff79c6


.hljs,
.hljs-subst
  color: #f8f8f2


.hljs-title,
.hljs-attr,
.hljs-meta-keyword
  font-style: italic
  color: #50fa7b


.hljs-string,
.hljs-meta,
.hljs-name,
.hljs-type,
.hljs-symbol,
.hljs-bullet,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable
  color: #f8ed80


.hljs-comment,
.hljs-quote,
.hljs-deletion
  color: #6272a4


.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-title,
.hljs-section,
.hljs-doctag,
.hljs-type,
.hljs-name,
.hljs-strong
  font-weight: bold


.hljs-literal,
.hljs-number
  color: #bd93f9


.hljs-emphasis
  font-style: italic

/*.hljs {*/
/*  display: block;*/
/*  overflow-x: auto;*/
/*  padding: 0.5em;*/
/*  background: #092e50;*/
/*}*/

/*.hljs,*/
/*.hljs-subst {*/
/*  color: #0ff;*/
/*}*/

/*.hljs-string,*/
/*.hljs-attribute,*/
/*.hljs-symbol,*/
/*.hljs-bullet,*/
/*.hljs-built_in,*/
/*.hljs-builtin-name,*/
/*.hljs-template-tag,*/
/*.hljs-template-variable,*/
/*.hljs-addition {*/
/*  color: #ff0;*/
/*}*/

/*.hljs-keyword,*/
/*.hljs-selector-tag,*/
/*.hljs-section,*/
/*.hljs-type,*/
/*.hljs-name,*/
/*.hljs-selector-id,*/
/*.hljs-selector-class,*/
/*.hljs-variable {*/
/*  color: #fff;*/
/*}*/

/*.hljs-comment,*/
/*.hljs-quote,*/
/*.hljs-doctag,*/
/*.hljs-deletion {*/
/*  color: #888;*/
/*}*/

/*.hljs-number,*/
/*.hljs-regexp,*/
/*.hljs-literal,*/
/*.hljs-link {*/
/*  color: #0f0;*/
/*}*/

/*.hljs-meta {*/
/*  color: #008080;*/
/*}*/

/*.hljs-keyword,*/
/*.hljs-selector-tag,*/
/*.hljs-title,*/
/*.hljs-section,*/
/*.hljs-name,*/
/*.hljs-strong {*/
/*  font-weight: bold;*/
/*}*/

/*.hljs-emphasis {*/
/*  font-style: italic;*/
/*}*/
</style>
