<template>
  <div class="comment-form-container w3-padding-large">
    <h2 class="w3-text-white">Have feedback to share? Comment below</h2>
    <form class="w3-container w3-card-4 w3-padding" @submit.prevent="submitComment">
      <p>
        <label class="w3-text-white">Name</label>
        <input class="w3-input w3-border w3-round" type="text" v-model="name" required>
      </p>
      <p>
        <label class="w3-text-white">Comment</label>
        <textarea class="w3-input w3-border w3-round" v-model="comment" required style="resize:vertical"></textarea>
      </p>
      <p>
        <button class="w3-button w3-white w3-border w3-border-white w3-round" type="submit">Submit</button>
      </p>
      <div v-if="submissionStatus" class="w3-margin-top w3-text-white">
        {{ submissionStatus }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '../lib/supabaseClient'

const name = ref('');
const comment = ref('');
const submissionStatus = ref(null);

const tableName = 'comments'; // Name of your Supabase table

async function submitComment() {
  submissionStatus.value = "Submitting...";
  try {
    const { error } = await supabase
      .from(tableName)
      .insert([{ name: name.value, comment: comment.value }]);

    if (error) {
      console.error("Error inserting comment:", error);
      submissionStatus.value = "Error submitting comment. Please try again.";
    } else {
      submissionStatus.value = "Comment submitted successfully!";
      name.value = ''; // Clear form fields
      comment.value = '';
    }
  } catch (err) {
    console.error("An unexpected error occurred:", err);
    submissionStatus.value = "An unexpected error occurred. Please try again later.";
  }
}
</script>

<style scoped>
.comment-form-container {
  background-color: #241727; /* Match the comment section background */
  padding-top: 20px;
  margin-right: 30px; /* Keep default margin-right */
  display: flex;         /* Keep flexbox for container */
  flex-direction: column; /* Keep flex direction column */
  align-items: stretch;     /* **CHANGE: align-items to stretch to fill width** */
}

/* Media query for screens larger than 769px (PC screens and larger) */
@media (min-width: 769px) {
  .comment-form-container {
    margin-left: 230px; /* **RE-INTRODUCE: margin-left for PC screens (adjust as needed)** */
    max-width: none;     /* **REMOVE: max-width for PC screens - allow stretching** */
    width: auto;         /* **REMOVE: width: auto for PC screens - allow stretching** */
    align-items: flex-start; /* **CHANGE: align-items back to flex-start for left alignment on PC** */
  }
}


/* Media query for screens smaller than 768px (typical tablet/mobile breakpoint) - Keep mobile styles */
@media (max-width: 768px) {
  .comment-form-container {
    margin-left: auto;     /* Keep auto margins for smaller screens */
    margin-right: auto;    /* Keep auto margins for smaller screens */
    padding-left: 10px;    /* Keep padding adjustments for smaller screens */
    padding-right: 10px;   /* Keep padding adjustments for smaller screens */
    max-width: 95%;      /* Keep max-width for smaller screens */
    width: auto;          /* Keep width auto for smaller screens */
    align-items: stretch;   /* Keep stretch for smaller screens */
  }
}

/* Media query for even smaller screens (e.g., phones, less than 600px) - Optional extra adjustment if needed - Keep mobile styles */
@media (max-width: 600px) {
  .comment-form-container {
    margin-left: auto;     /* Keep auto margins for very small screens */
    margin-right: auto;    /* Keep auto margins for very small screens */
    padding-left: 5px;     /* Keep padding adjustments for very small screens */
    padding-right: 5px;    /* Keep padding adjustments for very small screens */
    max-width: 100%;     /* Keep max-width for very small screens */
    width: auto;          /* Keep width auto for very small screens */
    align-items: stretch;   /* Keep stretch for very small screens */
  }
}

.comment-form {
  /* w3-card-4, w3-padding, w3-white classes are already in template */
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
}

.form-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.avatar-placeholder {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ddd;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: #aaa;
}

.form-title {
  flex-grow: 1;
}

.form-title label {
  font-weight: bold;
  color: #333;
}

.form-content textarea {
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
  padding-left: 0;
  padding-right: 0;
  width: 100%;
  box-sizing: border-box;
}

.form-content textarea:focus {
  outline: none;
  border-bottom-color: #aaa;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  flex-direction: column;
  align-items: stretch;
}


@media (max-width: 600px) {
  .form-actions {
    flex-direction: column;
    align-items: stretch;
  }
}


.form-actions input[type="text"] {
  flex-grow: 1;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 10px;
  margin-right: 0;
  width: 100%;
  box-sizing: border-box;
}


@media (max-width: 600px) {
  .form-actions input[type="text"] {
    margin-bottom: 10px;
    margin-right: 0;
  }
}


.form-actions button {
  padding: 8px 16px;
  width: 100%;
}

.w3-text-green { /* Define green text class if W3.CSS doesn't have one you like */
  color: green !important;
}
</style>