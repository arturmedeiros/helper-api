import Vuex from 'vuex';
import ip from './ip';
import configs from './configs';
import email from './email';
import horoscope from "./horoscope";
import pix from "./pix";

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      ip: ip,
      configs: configs,
      email: email,
      horoscope: horoscope,
      pix: pix,
    }
  });
};

export default createStore
