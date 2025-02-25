<template>
  <div class="comment-container">
    <h2 class="comment-title">Join the Discussion</h2>
    <ul class="comment-list">
      <li v-for="comment in comments" :key="comment.id" class="comment-item">
        <div class="comment-header">
          <img class="avatar" :src="getAvatar(comment.name)" alt="User Avatar" />
          <div>
            <p class="comment-author-name">{{ comment.name }}</p>
            <p class="comment-text">{{ comment.comment }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";

const comments = ref([]);

async function getComments() {
  const { data } = await supabase.from("comments").select();
  comments.value = data;
}

onMounted(() => {
  getComments();
});

// Placeholder avatar generator
const getAvatar = (name) => {
  return `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(
    name
  )}`;
};
</script>

<style scoped>
/* Container Styling */
.comment-container {
  width: 100%;
  max-width: 1100px; /* Adjust to your preference */
  margin: 30px;
  margin-left: auto; /* Push it to the right */
  margin-right: 180px; /* Adjust to control how far right it moves */
  padding: 20px;
  background: rgb(30, 31, 41); /* Discord-like dark theme */
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Title Styling */
.comment-title {
  font-size: 1.5em;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 15px;
  text-align: left;
}

/* Comment List Styling */
.comment-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* Comment Item */
.comment-item {
  padding: 13px 10px; /* Reduce padding inside each comment */
  border-bottom: 1px solid #40444b; /* Keep separator */
  display: flex;
  align-items: flex-start;
  gap: 6px; /* Reduce space between avatar & text */
}

.avatar {
  width: 32px; /* Slightly smaller avatar */
  height: 32px;
  margin-right: 8px; /* Reduce space between avatar and text */
}

.comment-author-name {
  font-size: 0.9em; /* Make name slightly smaller */
  margin-bottom: 1px; /* Less space under name */
}

.comment-text {
  font-size: 0.85em; /* Slightly smaller text */
  line-height: 1.2; /* Reduce line height for compactness */
  color: #dcddde;
}

</style>
