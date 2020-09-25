import shop from '../../api/shop'

// initial state
const state = () => ({
  all: [],
  products:[],
  twoAdd:0,
  threeAdd:0,
    bigObj:{
      "a":{"aK":"aV"},
      "b":{
          "bbK":"bbV",
          "bbK":{
              "bbbK":"bbbV",
              "bbbK1":{
                  "bbbbK":"bbbbV"
              }
          }
      }
  },
    small:'a'
})

// getters
const getters = {}

// actions
const actions = {
    async getNewProducts({ commit, state }, params){
        console.info("重要：action参数{commit,state}的state在dispatch之前就已经改变了=》",state);
       let res = await shop.newProducts(params);
       if(res.code === '200'){
           commit("getNewProducts",res._products);
       }else{
           console.info(JSON.stringify(res))
       }
    },
    async twoAdd1 ({ commit }) {
        let res = await shop.newProducts("--");
        if(res.code === '200'){
            commit("twoAdd1",1);
        }else{
            console.info(JSON.stringify(res))
        }
    },
    async twoAdd2 ({ dispatch, commit }) {
        await dispatch('twoAdd1') // 等待 actionA 完成
        let res = await shop.newProducts("--");
        if(res.code === '200'){
            commit("twoAdd2",1);
        }else{
            console.info(JSON.stringify(res))
        }
    },
    async twoAdd3 ({ commit }) {
        let res = await shop.newProducts("--");
        if(res.code === '200'){
            commit("twoAdd3",3);
        }else{
            console.info(JSON.stringify(res))
        }
    },
    async twoAdd6 ({ commit }) {
        let res = await shop.newProducts("--");
        if(res.code === '200'){
            commit("twoAdd6",6);
        }else{
            console.info(JSON.stringify(res))
        }
    },
    _bigObj({ commit },promise) {
            commit("_bigObj",promise);
    },
    _small({ commit },promise) {
            commit("_small",promise);
    },
}

// mutations
const mutations = {
    getNewProducts(state,products){
        state.products = products
    },
    twoAdd1(state,count){
        state.twoAdd = state.twoAdd + count
    },
    twoAdd2(state,count){
        state.twoAdd = state.twoAdd + count
    },
    twoAdd3(state,count){
        state.threeAdd = state.threeAdd + count
    },
    twoAdd6(state,count){
        state.threeAdd = state.threeAdd + count
    },
    _bigObj(state,payload){
        state.bigObj = payload
    },
    _small(state,payload){
        state.small = payload
    },

}

export default {
  state,
  getters,
  actions,
  mutations
}
