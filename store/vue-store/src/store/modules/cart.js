
const state = {
    Data:"default"
}
const mutations = {
    //查询理赔
    addData: (state, promiseData) => {
        state.Data = promiseData;
    },
}
const actions = {
  //理赔查询：
  async addData({ commit }, promise) {
    commit("addData", promise);
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
