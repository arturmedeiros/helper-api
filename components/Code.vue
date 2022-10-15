<template>
  <v-card elevation="0" dark>
    <Loading v-if="loading" :height="type === 'sign' ? '150px' : '450px'"/>
    <div v-else>
      <div id="code" v-highlightjs>
        <code style="padding: 20px 30px 10px 30px;
                   max-height: 450px;
                   max-width: 100%;
                   overflow-y: auto;
                   overflow-x: auto;
                   width: 100%;
                   flex-wrap: inherit;"
              class="javascript">
  <pre>
  {{ getCodeType(data, type) }}
  </pre>
        </code>
      </div>
    </div>
  </v-card>
</template>

<script>

export default {
  name: "Code",
  data(){
    return {
      loading: true,
    }
  },
  props: [
    'type',
    'data'
  ],
  mounted() {
    this.setLoading()
  },
  watch: {
    'data': function () {
      /*console.log("Change data: ", this.data)*/
      this.$store.commit('SET_EMAIL', [])
      if(this.type === 'sign'){
        this.loading = true
        this.setLoading()
      }
    },
  },
  components:{},
  computed: {},
  methods: {
    setLoading(){
      setTimeout(() => {
        if (this.type === 'sign') {
          if(this.$store.state.horoscope.data.title) {
            this.loading = false
          } else {
            this.setLoading()
          }
        }
        else if (this.type !== 'sign') {
          this.loading = false
        }
      }, 1300)
    },
    clearCode(){
        let code = document.getElementById("code")
        if (code) {
          code.remove();
        }
    },
  },
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
</style>
