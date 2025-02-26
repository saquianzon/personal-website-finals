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
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

/* Ensure form stretches fully */
.comment-form-container form {
  width: 100%;
  max-width: 700px;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  box-sizing: border-box;
}

/* Adjust the form layout for large screens */
@media (min-width: 769px) {
  .comment-form-container {
    margin-left: 230px;
    max-width: none;
    width: 100%;
  }

  .comment-form-container form {
    max-width: 60%; /* Allow form to expand */
  }
}

/* Adjust for smaller screens */
@media (max-width: 768px) {
  .comment-form-container {
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    max-width: 95%;
  }
}

/* Make inputs stretch properly */
.w3-input {
  width: 100% !important;
  max-width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background: white;
}

/* Textarea styling */
.w3-input[style="resize:vertical"] {
  min-height: 100px;
  resize: vertical;
}

/* Button styling */
.w3-button {
  width: 100% !important;
  border-radius: 5px;
  padding: 10px;
  font-weight: bold;
}

.w3-button:hover {
  background-color: #ddd !important;
}
</style>

