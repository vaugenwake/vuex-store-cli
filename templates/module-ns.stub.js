import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};

/**
 * Add this module to your store to begin using it.
 * https://vuex.vuejs.org/guide/modules.html
 */
