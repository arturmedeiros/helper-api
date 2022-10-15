import Vue from 'vue'
import globalMixin from '~/mixins/global.js'
import VueHighlightJS from 'vue3-highlightjs'

Vue.mixin(globalMixin)
Vue.use(VueHighlightJS)
