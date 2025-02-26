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
  max-width: 900px;
  margin: 0 auto;
}

/* Ensures form uses full width on larger screens */
@media (min-width: 769px) {
  .comment-form-container {
    margin-left: 230px;
    max-width: none;
    width: 100%;
    align-items: flex-start;
  }
}

/* Adjust for smaller screens */
@media (max-width: 768px) {
  .comment-form-container {
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    max-width: 95%;
    width: auto;
    align-items: stretch;
  }
}

/* Further refinement for very small screens */
@media (max-width: 600px) {
  .comment-form-container {
    padding-left: 5px;
    padding-right: 5px;
    max-width: 100%;
  }
}

/* Ensures the comment form fills available space */
.comment-form {
  padding: 20px;
  width: 100%;
  max-width: 700px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

/* Name input & textarea fields */
.comment-form input[type="text"],
.comment-form textarea {
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 20px;
  background: #fff;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 10px;
}

.comment-form textarea {
  min-height: 100px;
}

/* Submit button */
.comment-form button {
  padding: 10px 16px;
  width: 100%;
  border: none;
  background: #fff;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.comment-form button:hover {
  background: #ddd;
}

/* Adjust the positioning of the input fields */
.form-group {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Align everything properly */
.comment-form-container {
  display: flex;
  justify-content: center;
}

.comment-form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

</style>
