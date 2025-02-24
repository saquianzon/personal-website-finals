<template>

<!--Goals Vue (changed to pass HTML validator as vue is not recognized)-->
  <div class="w3-padding-large" id="main">
    <div id="main-content">
      <div class="w3-content w3-center w3-text-white" id="goals">
        <div id="goals-intro" class="w3-container w3-padding-32"></div>
      </div>
      
      <!-- Preaching Work Section -->
      <section>
        <h3 class="w3-padding-16 w3-center w3-text-light-grey">Preaching and Creative Work</h3>
        <div id="preaching-gallery" class="gallery-container"></div>
      </section>
      
      <!-- Personal Goals Section -->
      <section>
        <h3 class="w3-padding-16 w3-center w3-text-light-grey">Personal Goals</h3>
        <div id="personal-goals-gallery" class="gallery-container"></div>
      </section>
    </div>
  </div>

    <div id="image-modal" class="modal" role="dialog" aria-labelledby="image-caption" aria-hidden="true" v-if="isModalVisible" @click="handleModalClickOutside">
    <button id="close-modal" class="close" aria-label="Close" @click="closeTheModal">&times;</button>
    <img class="modal-content" id="modal-image" :src="modalImageSrc" alt="Full-size view of selected image">
    <div id="image-caption" role="note">{{ modalImageCaption }}</div>
  </div>
   <div v-else>  <removeline>  </removeline>  {/* Hidden when isModalVisible is false */}
     {/* Modal is hidden */}
   </div>

</template>

<script>

export default {
  name: 'Goals',
  data() {
    return {
      isModalVisible: false,
      modalImageSrc: '',
      modalImageCaption: '',
      goalsIntro: {
        heading: "Goals in Life/Dreams",
        paragraph1:
          "An international volunteer and one of Jehovah's Witnesses, sharing Bible-based advice and God's promises for a future free of suffering, sickness, and even death.",
        paragraph2:
          "My love for God, Jehovah, and for people motivates me to spread this hope alongside fellow volunteers from over 240 lands.",
      },
      preachingGallery: [
        {
          src: "https://cms-imgp.jw-cdn.org/img/p/2019361/univ/art/2019361_univ_cnt_2_xl.jpg",
          alt: "Preaching the Good News",
          description: "Sharing Good News From the Bible",
        },
        {
          src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/animations.gif?raw=true",
          alt: "Animation demos",
          description: "Aspiring 2D professional artist/animator",
        },
      ],
    };
  },
  mounted() {
    this.renderGoalsIntro("goals-intro", this.goalsIntro);
    this.renderGallery("preaching-gallery", this.preachingGallery);
  },
  methods: {
    renderGoalsIntro(containerId, intro) {
      const container = document.getElementById(containerId);

      if (!container) return console.error(`Container with ID ${containerId} not found.`);

      container.innerHTML = `
        <h2 class="w3-padding-16 w3-center w3-text-light-grey">${intro.heading}</h2>
        <hr style="width:200px" class="center-line">
        <p class="w3-center">${intro.paragraph1}</p>
        <p class="w3-center">${intro.paragraph2}</p>
      `;
    },
    renderGallery(containerId, galleryItems) {
      const container = document.getElementById(containerId);

      if (!container) return console.error(`Container with ID ${containerId} not found.`);

      container.className = "preaching-jw"; // Apply the class for the flex layout
      container.innerHTML = ""; // Clear existing content

      const renderedItems = []; // Array to store rendered item data

      galleryItems.forEach((item) => {
        const galleryDiv = document.createElement("div");
        galleryDiv.className = "preaching";

        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.alt;
        img.style.width = "100%";
        img.style.height = "auto";
        img.className = "clickable"; // Add the clickable class for modal functionality
        img.dataset.link = item.link; // Add data attributes needed for modal
        img.dataset.description = item.description; // Add data attributes needed for modal

        const desc = document.createElement("div");
        desc.className = "desc";
        desc.textContent = item.description;

        galleryDiv.appendChild(img);
        galleryDiv.appendChild(desc);
        container.appendChild(galleryDiv);

        renderedItems.push({  // Store image info and element
          element: img,
          info: { link: item.link, src: item.src, description: item.description }
        });
      });

      renderedItems.forEach(item => { // Attach click listeners here!
        item.element.addEventListener('click', () => {
          this.openModal(item.info); // Call the Vue component's openModal method!
        });
      });
    },
    openModal(imageInfo) {
      this.isModalVisible = true;
      this.modalImageSrc = imageInfo.link || imageInfo.src;
      this.modalImageCaption = imageInfo.description || "";
    },
    closeTheModal() {
      this.isModalVisible = false;
    },
    handleModalClickOutside(event) {
      if (event.target.id === 'image-modal') {
        this.closeTheModal();
      }
    },
  },
};

</script>
