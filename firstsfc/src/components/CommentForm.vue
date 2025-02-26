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
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  left: 40px; /* Shift the whole container slightly right */
  align-items: center; /* Ensures contents stay centered */
}

/* Ensure form stays centered */
.comment-form-container form {
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center form content */
  justify-content: center;
}

/* Name input & textarea fields */
.w3-input {
  width: 100%;
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

/* Submit button styling */
.w3-button {
  width: auto;
  min-width: 120px;
  border-radius: 5px;
  padding: 10px 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}

/* Center button */
.comment-form-container form p {
  text-align: center;
  width: 100%;
}

/* Adjust for smaller screens */
@media (max-width: 768px) {
  .comment-form-container {
    left: 0; /* Reset shift for small screens */
    margin: 0 auto;
    padding: 10px;
    max-width: 95%;
    width: auto;
    align-items: center;
  }
}

/* Further refinement for very small screens */
@media (max-width: 600px) {
  .comment-form-container {
    padding-left: 5px;
    padding-right: 5px;
    max-width: 100%;
    margin: 0 auto;
  }
}
</style>



