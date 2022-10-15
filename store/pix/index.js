const defaultState = {
  data: [],
  // pix: {
  //   key_type: null, //'telefone', 'cnpj', 'cpf'
  //   key: null, // numero do telefone, cnpj ou cpj
  //   name: null, // nome do destinatário (recebedor)
  //   city: null, // cidade
  //   amount: null, // valor
  //   reference: null, // comentário ou código
  //   qrcode_base64: null, // Recebo da request
  //   code: null, // Recebo da request
  // },
  pix_keys: [
    "Telefone",
    "E-mail",
    "CPF",
    "CNPJ",
    "Outro"
  ],

}

const mutations = {
  SET_PIX(state, payload) {
    state.data = payload;
  },
}

const getters = {
  getPixKey: (state) => (key, value) => {
    const object = state.pix_keys.find(item => {
      return item[`${key}`] === value;
    });
    return object === undefined ? {} : object;
  },
}

const actions = {
  getPixQRCode(context, payload) {
    this.$axios.post("/pix/generate", payload).then(response => {
      if (!response.data.reference) {
        response.data.reference = null
      }
      if (!response.data.amount) {
        response.data.amount = null
      }
      context.commit('SET_PIX', response.data)
      // console.log('SET_PIX', response.data)
    }).catch(error => {
      // console.log(error.response.status);
      console.log(error.response);
      context.commit('SET_PIX', error.response.data)
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
