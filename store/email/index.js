export const state = () => ({
  data: []
})

export const mutations = {
  SET_EMAIL(state, payload) {
    state.data = payload;
    // console.log(state.data, payload);
  },
}

export const getters = {
}

export const actions = {
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
