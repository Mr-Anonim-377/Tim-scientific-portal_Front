import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
  state:{
    data: [],
    repo: "",
    owner: ""
  },
  mutations:{
    SET_DATA_TO_STATE: (state, data) => {
      state.data = data;
    },

  },
  actions:{
    GET_DATA_FROM_API({commit}) {
      return axios.get (' https://api.github.com/events', {
      })
        .then((data) => {
          commit('SET_DATA_TO_STATE', data);
          return data;
        })
        .catch((error) => {
          console.log(error)
          return error;
        })
    },
    POST_USER_FROM_API() {
      return axios.post ('https://api.github.com/repos/{owner}/{repo}/labels', {
        params: {key: '1'},
        owner: this.owner,
        repor: this.repo
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  getters:{
    DATA(state) {
      return state.data
    }
  }

});
export default store;
