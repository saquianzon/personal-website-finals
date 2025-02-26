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
/* Main comment form container */
.comment-form-container {
  background-color: #241727;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px; /* Keep max width for control */
  margin: 0 auto;
}

/* Allow full width for larger screens */
@media (min-width: 769px) {
  .comment-form-container {
    margin-left: 230px; /* Shift to the right */
    max-width: none;
    width: auto;
    align-items: flex-start; /* Align to the left */
  }
}

/* Responsive settings for tablets & smaller devices */
@media (max-width: 768px) {
  .comment-form-container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
    max-width: 95%;
    width: auto;
    align-items: stretch;
  }
}

/* Further adjustments for very small screens */
@media (max-width: 600px) {
  .comment-form-container {
    padding-left: 5px;
    padding-right: 5px;
    max-width: 100%;
  }
}

/* Comment form */
.comment-form {
  padding: 16px;
  width: 100%;
  max-width: 700px; /* Ensure reasonable width */
  background: rgba(255, 255, 255, 0.1); /* Light contrast */
  border-radius: 8px;
  box-sizing: border-box;
}

/* Header section */
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
  color: #fff; /* Ensure readability */
}

/* Textarea styling */
.form-content textarea {
  width: 100%;
  min-height: 120px;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  border-radius: 5px;
}

.form-content textarea:focus {
  outline: none;
  border-bottom-color: #aaa;
}

/* Form action buttons */
.form-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  flex-direction: row;
}

@media (max-width: 600px) {
  .form-actions {
    flex-direction: column;
    align-items: stretch;
  }
}

/* Name input field */
.form-actions input[type="text"] {
  flex-grow: 1;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

/* Submit button */
.form-actions button {
  padding: 10px 16px;
  width: 100%;
  border: none;
  background: #fff;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.form-actions button:hover {
  background: #ddd;
}

/* Submission status message */
.w3-text-green {
  color: green !important;
}
</style>
