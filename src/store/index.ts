import Vue from "vue";
import Vuex from "vuex";
import pathify, { make } from "vuex-pathify";
import _ from "lodash";
Vue.use(Vuex);

const state = {
  users: [],
  sortBy: "Last name",
  sortDesc: true,
};

type State = typeof state;

const mutations = make.mutations(state);

const actions = {
  ...make.actions(state),
};

const getters = {
  getUsers(state: State) {
    const propertyNameToSortBy =
      state.sortBy === "Last name" ? "lastName" : "zipCode";
    const sortOrder = state.sortDesc ? "desc" : "asc";
    return _.orderBy(state.users, [propertyNameToSortBy], [sortOrder]);
  },
};

export default new Vuex.Store({
  plugins: [pathify.plugin],
  getters,
  state,
  mutations,
  actions,
  modules: {},
});
