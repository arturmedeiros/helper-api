export const state = () => ({
  data: []
})

export const mutations = {
  SET_IP_INFORMATION(state, payload) {
    state.data = payload;
    // console.log(state.data, payload);
  },
}

export const getters = {
  getCoordinates: (state) => {
    return {
      latitude: state.data.location.latitude,
      longitude: state.data.location.longitude,
    }
  },
}

export const actions = {
  getIpInformation(context, payload){
    this.$axios.get("/ip").then(response => {
      context.commit('SET_IP_INFORMATION', response.data)
      // console.log('SET_IP_INFORMATION', response.data)
    })
  }
}
