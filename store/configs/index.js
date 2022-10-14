export const state = () => ({
  data: []
})

export const mutations = {
  SET_API_INFORMATION(state, payload) {
    state.data = payload;
    // console.log(state.data, payload);
  },
}

export const getters = {}

export const actions = {
  getApiInformation(context, payload){
    this.$axios.get("/").then(response => {
      context.commit('SET_API_INFORMATION', response.data)
      console.log('SET_API_INFORMATION', response.data)
    })
  }
}
