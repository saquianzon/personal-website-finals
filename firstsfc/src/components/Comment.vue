<template>
  <div class="comment-container">
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">{{ comment.name }} {{ comment.comment }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const comments = ref([])

async function getComments() {
  const { data } = await supabase.from('comments').select()
  comments.value = data
}

onMounted(() => {
  getComments()
})
</script>

<style scoped>
.comment-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 100px; /* Adjust this value if needed to avoid overlapping with the navbar */
}

.comment-container > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightyellow;
}
</style>
