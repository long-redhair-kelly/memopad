import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    memos: []
  },
  getters: {
    getCount: (state) => {
      return state.memos.length
    },
    getAll: (state) => {
      return state.memos
    },
    getMemoById: (state) => (id) => {
      return state.memos.find((memo) => memo.id === id)
    }
  },
  mutations: {
    /**
     * メモを保存する
     */
    save(state, newMemo) {
      if (newMemo.id > 0) {
        // 編集の場合
        const editMemo = state.memos.find((memo) => memo.id === newMemo.id)
        editMemo.title = newMemo.title
        editMemo.content = newMemo.content
        return editMemo
      }

      // 新規の場合
      newMemo.id = ++state.count
      state.memos.unshift(newMemo)
    },
    delete(state, id) {
      state.memos = state.memos.filter((memo) => memo.id !== id)
    }
  },
  actions: {},
  modules: {}
})
