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

const getAvatar = (name) => {
  return `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(
    name
  )}`;
};
</script>

<style scoped>
/* Comment Box Styling */
.comment-container {
  width: 100%;
  max-width: 1000px; /* Matches comment form */
  margin: 30px auto; /* Centers it properly */
  padding: 20px;
  background: rgb(30, 31, 41);
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  left: 40px; /* Slight shift to match form alignment */
}

/* Ensure No Overlap with Navbar */
body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  margin-top: 120px; /* Pushes it down from the navbar */
  width: 100%;
  display: flex;
  justify-content: center;
}

/* Title */
.comment-title {
  font-size: 1.5em;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 15px;
  text-align: left;
}

/* Comment List */
.comment-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* Individual Comment */
.comment-item {
  padding: 13px 10px;
  border-bottom: 1px solid #40444b;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

/* Avatar */
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

/* Author Name */
.comment-author-name {
  font-size: 1em;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 3px;
}

/* Comment Text */
.comment-text {
  font-size: 0.95em;
  color: #dcddde;
  line-height: 1.4;
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .comment-container {
    max-width: 85%;
    left: 0; /* Reset left positioning */
    margin-top: 150px; /* Ensures spacing */
  }
}

@media (max-width: 768px) {
  .comment-container {
    max-width: 90%;
    margin-top: 180px; /* More spacing */
  }
}

@media (max-width: 480px) {
  .comment-container {
    width: 95%;
    margin-top: 200px;
  }

  .comment-title {
    font-size: 1.2em;
    text-align: center;
  }

  .comment-item {
    flex-direction: row;
    align-items: center;
  }

  .avatar {
    width: 35px;
    height: 35px;
  }

  .comment-author-name,
  .comment-text {
    font-size: 0.85em;
  }
}
</style>
