const defaultState = {
  data: [],
  baseUrl: 'https://helpers.arjos.com.br/',
  // baseUrl: 'http://localhost:3336/',
  loading: false,
  menu_sidebar: {
    items: [
      {
        icon: 'mdi-apps',
        title: 'Welcome',
        to: '/'
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Inspire',
        to: '/inspire'
      }
    ],
  }
}

const mutations = {
  SET_API_INFORMATION(state, payload) {
    state.data = payload;
    // console.log(state.data, payload);
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
    // console.log(state.data, payload);
  },
  SET_MENU(state, payload) {
    // state.menu_sidebar.drawer = payload;
    // console.log(state.data, payload);
  },
}

const getters = {}

const actions = {
  getApiInformation(context, payload){
    this.$axios.get("/").then(response => {
      context.commit('SET_API_INFORMATION', response.data)
      console.log('SET_API_INFORMATION', response.data)
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
