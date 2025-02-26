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
  margin-left: 90px; /* Reduced default margin-left for wider screens */
  margin-right: 30px; /* Keep default margin-right */
}

/* Media query for screens smaller than 768px (typical tablet/mobile breakpoint) */
@media (max-width: 768px) {
  .comment-form-container {
    margin-left: 10px; /* Reduce margin-left on smaller screens */
    margin-right: 10px; /* Reduce margin-right on smaller screens */
    padding-left: 10px; /* Add some left padding for very small screens if needed */
    padding-right: 10px; /* Add some right padding for very small screens if needed */
  }
}

/* Media query for even smaller screens (e.g., phones, less than 600px) - Optional extra adjustment if needed */
@media (max-width: 600px) {
  .comment-form-container {
    margin-left: 0; /* Remove left margin on very small screens if needed */
    margin-right: 0; /* Remove right margin on very small screens if needed */
    padding-left: 5px; /* Further reduce padding if needed */
    padding-right: 5px; /* Further reduce padding if needed */
  }
}

.comment-form {
  /* w3-card-4, w3-padding, w3-white classes are already in template */
  padding: 16px; /* Adjust padding as needed */
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
  flex-direction: column; /* **ADD THIS: Stack buttons vertically on small screens** */
  align-items: stretch; /* **ADD THIS: Stretch buttons to full width on small screens** */
}

@media (max-width: 600px) { /* Media query for smaller screens - matching the one for .comment-container margins */
  .form-actions {
    flex-direction: column; /* Ensure vertical stacking on very small screens again (redundant but safe) */
    align-items: stretch;  /* Ensure stretch on very small screens again (redundant but safe) */
  }
}


.form-actions input[type="text"] {
  flex-grow: 1;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 10px; /* **ADD THIS: Margin below input when stacked vertically** */
  margin-right: 0; /* **ADD THIS: Remove right margin when stacked vertically** */
}

@media (max-width: 600px) { /* Media query for smaller screens - matching the one for .comment-container margins */
  .form-actions input[type="text"] {
    margin-bottom: 10px; /* Ensure margin below input when stacked */
    margin-right: 0; /* Ensure no right margin when stacked */
  }
}


.form-actions button {
  padding: 8px 16px;
  width: 100%; /* **ADD THIS: Make buttons full width on small screens** */
}

.w3-text-green { /* Define green text class if W3.CSS doesn't have one you like */
  color: green !important;
}
</style>