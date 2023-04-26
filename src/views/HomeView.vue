<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const hasMemos = computed(() => store.getters.getCount)
const memos = computed(() => store.getters.getAll)
</script>

<template>
  <div class="home">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id">{{ memo.title }}</li>
    </ul>
    <p v-else>メモはありません。</p>
  </div>
</template>
