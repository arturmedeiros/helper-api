import Vuex from 'vuex';
import ip from './ip';
import configs from './configs';
import email from './email';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      ip: ip,
      configs: configs,
      email: email,
    }
  });
};

export default createStore
