import LocalStorage from '../services/LocalStorage'

export const state = () => ({
  list: LocalStorage.getObject('history') || []
})

export const mutations = {
  add(state, item) {
    state.list.unshift(item)
  }
}

export const actions = {
  addHistory({ state, commit }, payload) {
    if (!state.list.some((obj) => obj.id === payload.id)) {
      commit('add', payload)
      LocalStorage.setObject('history', state.list)
    }
  }
}
