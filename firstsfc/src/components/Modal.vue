<template>
    <div class="w3-padding-large" id="main">
        <!-- Modal Vue for Full-Size Images (changed to pass HTML validator as vue is not recognized) -->
        <div id="image-modal" class="modal" role="dialog" aria-labelledby="image-caption" aria-hidden="true">
            <button id="close-modal" class="close" aria-label="Close">&times;</button>
            <img class="modal-content" id="modal-image" src="https://via.placeholder.com/300" alt="Full-size view of selected image">
            <div id="image-caption" role="note"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      // Modal visibility state, controlled by parent component (likely)
      // For now, let's manage visibility within this component, but ideally,
      // it should be controlled by a prop from the parent.
      isVisible: false,
      modalImageSrc: '',
      modalImageCaption: '',
    };
  },
  methods: {
    openModal(imageSrc, imageCaption) {
      // Method to open the modal and set image source and caption
      this.isVisible = true;
      this.modalImageSrc = imageSrc;
      this.modalImageCaption = imageCaption;
    },
    closeModal() {
      // Method to close the modal
      this.isVisible = false;
    },
    handleModalClickOutside(event) {
      // Close modal when clicking outside the modal content
      if (event.target.id === 'image-modal') {
        this.closeModal();
      }
    },
  },
};
</script>