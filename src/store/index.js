import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: null,
  },
  getters: {
    getCharacters(state) {
      return state.characters;
    },
  },
  mutations: {
    setCharacters(state, newCharacters) {
      state.characters = newCharacters;
    },
  },
  actions: {
    async fetchCharacters({ commit }) {
      try {
        let response = await axios.get(
          `https://rickandmortyapi.com/api/character`
        );
        if (response.status == 200) {
          commit("setCharacters", response.data.results);
        }
        return response;
      } catch (err) {
        console.log(err);
        return err.response;
      }
    },
  },
  modules: {},
});
