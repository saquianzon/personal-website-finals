<template>
  <div class="w3-padding-large" id="main">
    <div
      id="image-modal"
      class="modal"
      role="dialog"
      aria-labelledby="image-caption"
      aria-hidden="true"
      :style="{ display: isVisible ? 'block' : 'none' }"
      @click="handleModalClickOutside"
    >
      <button id="close-modal" class="close" aria-label="Close" @click="closeModal">&times;</button>
      <img class="modal-content" id="modal-image" :src="modalImageSrc" :alt="modalImageCaption" />
      <div id="image-caption" role="note">{{ modalImageCaption }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    modalImageSrc: {
      type: String,
      default: ''
    },
    modalImageCaption: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    openModal() {
      console.log("Modal.vue's openModal() method called!"); // ADD THIS LINE
      this.isVisible = true;
    },
    closeModal() {
      this.isVisible = false;
    },
    handleModalClickOutside(event) {
      if (event.target.id === 'image-modal') {
        this.closeModal();
      }
    },
  },
};
</script>

<style scoped>
/* Modal Styles (You can adjust these as needed - this is based on your previous CSS) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%; /* Adjust as needed */
  max-width: 700px; /* Maximum width */
  max-height: 80%; /* Maximum height - prevent image from being too tall */
  object-fit: contain; /* Make image fit within its container */
}

#image-caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px; /* Increased height for caption */
  overflow-y: auto; /* Add scroll for long captions */
}

/* "x" Button position */
#close-modal {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
  background: none;
  border: none;
  cursor: pointer;
}

#close-modal:hover,
#close-modal:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* For smaller screens, adjust modal image width */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%; /* On small screens, modal image can take full width */
  }
  #image-caption {
    width: 100%; /* Caption also full width on small screens */
  }
}
</style>