const defaultState = {
  data: [],
  api: []
}

const mutations = {
  SET_HOROSCOPE_API(state, payload) {
    state.api = payload;
    // console.log(state.data, payload);
  },
  SET_HOROSCOPE_BY_SIGN(state, payload) {
    state.data = payload;
    // console.log(state.data, payload);
  },
}

const getters = {
  getSigns: (state) => {
    return state.api.url_parameters
  },
  getSignCodeFormatted: (state) => {
    if(state.data.title){
      return `${JSON.stringify(state.data, null, 2)}`
    } else {
      return "Falhou"
    }
  },
}

const actions = {
  getHoroscopeApi(context, payload){
    this.$axios.get("/horoscope").then(response => {
      context.commit('SET_HOROSCOPE_API', response.data)
      // console.log('SET_IP_INFORMATION', response.data)
    })
  },
  getHoroscopeBySign(context, payload){
    this.$axios.get(`/horoscope/pt/${payload}`).then(response => {
      context.commit('SET_HOROSCOPE_BY_SIGN', response.data)
      context.commit('SET_LOADING', false)
      // console.log('SET_IP_INFORMATION', response.data)
    })
  }
}

const inBrowser = typeof window !== 'undefined';
// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__.page : defaultState;

export default {
  state,
  actions,
  mutations,
  getters
}
