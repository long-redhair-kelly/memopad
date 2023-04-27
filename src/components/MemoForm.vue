<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import type { Memo } from '@/interfaces/Memo'

const store = useStore()
const router = useRouter()
const props = defineProps(['memo'])
const memo: Memo = {
  id: props.memo ? props.memo.id : 0,
  title: props.memo ? props.memo.title : '',
  content: props.memo ? props.memo.content : ''
}

/**
 * メモ保存
 */
const save = () => {
  // メモ保存
  store.commit('save', memo)

  // topへ画面遷移
  router.push('/')
}

/**
 * メモ削除
 */
const remove = () => {
  // メモ削除
  store.commit('delete', memo.id)

  // topへ画面遷移
  router.push('/')
}
</script>

<template>
  <div>
    <div><input type="text" v-model="memo.title" /></div>
    <div><textarea v-model="memo.content" cols="30" rows="10"></textarea></div>
    <div class="center">
      <button @click="save">保存</button>
      <button v-if="memo.id > 0" @click="remove">削除</button>
    </div>
  </div>
</template>

<style scoped>
div {
  margin-bottom: 10px;
}
input[type='text'] {
  width: 100%;
}
textarea {
  width: 100%;
  height: 30em;
}
botton {
  width: 5em;
  margin: 4px;
}
.center {
  text-align: center;
}
button:hover {
  cursor: pointer;
}
</style>
