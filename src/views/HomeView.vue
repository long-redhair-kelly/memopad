<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const hasMemos = computed(() => store.getters.getCount)
const memos = computed(() => store.getters.getAll)
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
  padding-left: 14px;
  margin-bottom: 10px;
}
li:hover {
  border-bottom: 4px solid #eee;
  border-left: 10px solid #aaa;
  padding-left: 4px;
  margin-bottom: 8px;
}

li a {
  color: #999;
  text-decoration: none;
  width: 100%;
  display: block;
}
</style>

<template>
  <div class="home">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id">
        <router-link :to="{ name: 'edit', params: { id: memo.id } }">
          {{ memo.title }}
        </router-link>
      </li>
    </ul>
    <p v-else>メモはありません。</p>
  </div>
</template>
