import shop from '../../api/shop'

// initial state
const state = () => ({
  all: [],
    products:[],
})

// getters
const getters = {}

// actions
const actions = {
    async getNewProducts({ commit, state }, params){
       let res = await shop.newProducts(params);
       if(res.code === '200'){
           this.commit("getNewProducts",res._products);
       }else{
           console.info(JSON.stringify(res))
       }
    },
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

// mutations
const mutations = {
    getNewProducts(state,products){
        state.products = products
    },
  setProducts (state, products) {
    state.all = products
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
