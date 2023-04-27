<script setup lang="ts">
import MemoForm from '@/components/MemoForm.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()
const id: number = Number(route.params.id)
const memo = computed(() => store.getters.getMemoById(id))
</script>

<template>
  <MemoForm v-if="memo" :memo="memo" />
  <p v-else>指定されたメモはありません。</p>
</template>
