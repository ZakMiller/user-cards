import Vue from "vue";
import Vuex from "vuex";
import pathify, { make } from "vuex-pathify";
Vue.use(Vuex);

const state = {
  users: [],
};

const mutations = make.mutations(state);

const actions = {
  ...make.actions(state),
};

export default new Vuex.Store({
  plugins: [pathify.plugin],
  state,
  mutations,
  actions,
  modules: {},
});
