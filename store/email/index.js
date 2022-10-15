const defaultState = {
  data: []
}

const mutations = {
  SET_EMAIL(state, payload) {
    state.data = payload;
    // console.log(state.data, payload);
  },
}

const getters = {
  getEmailCodeFormatted: (state) => {
    return `${JSON.stringify(state.data, null, 2)}`
  },
}

const actions = {
  getEmailInformation(context, payload){
    this.$axios.post("/email/verify", payload).then(response => {
      context.commit('SET_EMAIL', response.data)
    }).catch(error => {
      // console.log(error.response.status);
      console.log(error.response);
      context.commit('SET_EMAIL', error.response.data)
    });
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
