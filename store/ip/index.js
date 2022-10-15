const defaultState = {
  data: []
}

const mutations = {
  SET_IP_INFORMATION(state, payload) {
    state.data = payload;
    // console.log(state.data, payload);
  },
}

const getters = {
  getCoordinates: (state) => {
    return {
      latitude: state.data.location.latitude,
      longitude: state.data.location.longitude,
    }
  },
  getIpCodeFormatted: (state) => {
    if(state.data.ip){
      return `{
  "ip": ${state.data.ip},
  "language": ${state.data.language},
  "timezone": ${state.data.timezone},
  "location": {
        "latitude": ${state.data.location.latitude},
        "longitude": ${state.data.location.longitude},
        "accuracy": ${state.data.location.accuracy},
        "city": ${state.data.location.city},
        "region": ${state.data.location.region},
        "country": ${state.data.location.country},
        "country_capital": ${state.data.location.country_capital},
        "country_calling_code": ${state.data.location.country_calling_code},
        "continent": ${state.data.location.continent},
        "continent_region": ${state.data.location.continent_region},
        "continent_region_code": ${state.data.location.continent_region_code},
        "code_fips": ${state.data.location.code_fips},
        "code_iso2": ${state.data.location.code_iso2},
        "code_iso3": ${state.data.location.code_iso3},
        "code_isoNo": ${state.data.location.code_isoNo},
        "emoji": ${state.data.location.emoji},
        "currency": ${state.data.location.currency},
        "currency_symbol": ${state.data.location.currency_symbol},
  },
  "provider": {
        "name": ${state.data.provider.name},
        "isp": ${state.data.provider.isp},
        "asn": ${state.data.provider.asn},
  },
  "user_agent": ${state.data.user_agent},
  "browser": {
        "name": ${state.data.browser.name},
        "version": ${state.data.browser.version},
        "major": ${state.data.browser.major},
        "engine": ${state.data.browser.engine},
        "engine_version": ${state.data.browser.engine_version},
  },
  "os": {
        "name": ${state.data.os.name},
        "version": ${state.data.os.version},
        "comercial_name": ${state.data.os.comercial_name},
  },
  "device": {
        "type": ${state.data.device.type},
        "connection": {
          "downlink": ${state.data.device.connection.downlink},
          "effectiveType": ${state.data.device.connection.effectiveType},
          "rtt": ${state.data.device.connection.rtt},
        }
  },
  "maps": {
    "iframe": ${state.data.maps.iframe},
    "location": ${state.data.maps.location},
  },
  "api_version": ${state.data.api_version},
}`
    }
  },
}

const actions = {
  getIpInformation(context, payload){
    this.$axios.get("/ip").then(response => {
      context.commit('SET_IP_INFORMATION', response.data)
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
