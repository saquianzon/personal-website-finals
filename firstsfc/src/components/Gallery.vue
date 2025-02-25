<template>
  <div class="w3-padding-large" id="main">
    <div class="w3-content w3-center w3-text-white" id="goals">
    </div>
    <section>
      <h3 class="w3-padding-16 w3-center w3-text-light-grey">Personal Goals</h3>
      <div id="personal-goals-gallery" class="gallery-container"></div>
    </section>
    <section>
      <div class="w3-content w3-center w3-text-white" id="photos">
        <h2 class="w3-padding-16 w3-center w3-text-light-grey">Hobbies and Interests</h2>
      </div>
      <hr style="width:200px" class="center-line">
      <br>
      <div id="hobbies-gallery" class="gallery-container"></div>
    </section>
    <section>
      <div class="w3-content w3-center w3-text-white" id="art">
        <h2 class="w3-padding-16 w3-center w3-text-light-grey">Art Gallery</h2>
      </div>
      <hr style="width:200px" class="center-line">
      <p class="w3-center w3-large">Please don't steal/repost my works .ᐟ(つ╥﹏╥)つ</p>
      <div id="art-gallery" class="gallery-container"></div>
    </section>
    <Modal ref="imageModal" />  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'; // Make sure the path is correct!
export default {
  name: 'Gallery',
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      modalImageSrc: '',
      modalImageCaption: '',
      hobbiesGallery: [ // Moved hobbiesGallery data into component data
        {
          src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/digital%20drawing.png?raw=true",
          alt: "Digital Drawing",
          link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/digital%20drawing.png?raw=true",
          description: "Digital Drawing",
        },
        {
          src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/gahoole.jpg?raw=true",
          alt: "Reading Novels",
          link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/gahoole.jpg?raw=true",
          description: "Reading Novels",
        },
        {
          src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/doors%20figure.png?raw=true",
          alt: "Video Games",
          link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/doors%20figure.png?raw=true",
          description: "Video Games",
        },
        {
          src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/cat.png?raw=true",
          alt: "Cats",
          link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/cat.png?raw=true",
          description: "Cats",
        },
        {
          src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/dinosaurs.png?raw=true",
          alt: "Dinosaurs",
          link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/dinosaurs.png?raw=true",
          description: "Dinosaurs",
        },
        {
          src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/nature.png?raw=true",
          alt: "Nature",
          link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/nature.png?raw=true",
          description: "Nature",
        },
        {
          src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/godzilla.jpg?raw=true",
          alt: "Watching Movies/Shows",
          link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/godzilla.jpg?raw=true",
          description: "Watching Sci-Fi Movies/Shows",
        },
        {
          src: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/ukulele.png?raw=true",
          alt: "Playing/Listening to Music",
          link: "https://github.com/saquianzon/WEBPROG-SF231-Personal-Website/blob/feature/2_SLQ_customize_my_website/home/hobbies%20pics/ukulele.png?raw=true",
          description: "Playing/Listening to Music",
        },
        // Add your hobbies gallery items here
      ],
      artGallery: [ // Moved artGallery data into component data
        {
          src: "/images/Stray.png",
          alt: "Cat and B12",
          link: "/images/Stray.png",
          description: "Stray Fanart",
        },
        {
          src: "/images/A Quiet Place fanart .png",
          alt: "A Quiet Place Fanart",
          link: "/images/A Quiet Place fanart .png",
          description: "A Quiet Place Fanart",
        },
        {
          src: "/images/BB-8 and D-0 - Art Activity.png",
          alt: "BB8 & D-0",
          link: "/images/BB-8 and D-0 - Art Activity.png",
          description: "BB8 & D-0",
        },
        {
          src: "/images/The Eagle and the Turtle.png",
          alt: "The Eagle and Turtle",
          link: "/images/The Eagle and the Turtle.png",
          description: "The Eagle and Turtle",
        },
        {
          src: "/images/JWD Blue & Beta.png",
          alt: "Blue & Beta from Jurassic World",
          link: "/images/JWD Blue & Beta.png",
          description: "Blue & Beta from Jurassic World",
        },
        {
          src: "/images/anniversary gift.png",
          alt: "19th Anniversary Gift for Parents",
          link: "/images/anniversary gift.png",
          description: "19th Anniversary Gift for Parents",
        },
        {
          src: "/images/Pure Vessel.png",
          alt: "Hollow Knight Pure Vessel Fanart",
          link: "/images/Pure Vessel.png",
          description: "Hollow Knight Pure Vessel Fanart",
        },
        {
          src: "/images/HK OC - Vale.png",
          alt: "Hollow Knight Vale OC",
          link: "/images/HK OC - Vale.png",
          description: "Hollow Knight Vale OC",
        },
        {
          src: "/images/Little Ghost.png",
          alt: "Hollow Knight The Knight Fanart",
          link: "/images/Little Ghost.png",
          description: "Hollow Knight The Knight Fanart",
        },
        {
          src: "/images/Hornet.jpg",
          alt: "Hollow Knight Hornet Fanart",
          link: "/images/Hornet.jpg",
          description: "Hollow Knight Hornet Fanart",
        },
        {
          src: "/images/Silver .png",
          alt: "Cat Sona OC",
          link: "/images/Silver .png",
          description: "Cat Sona OC",
        },
        {
          src: "/images/A Light of Hope and Peace - Art Appreciation Final Project.png",
          alt: "ARTAPPRE Final Project",
          link: "/images/A Light of Hope and Peace - Art Appreciation Final Project.png",
          description: "ARTAPPRE Final Project",
        },
      ],
      personalGoalsGallery: [ // Moved personalGoalsGallery data into component data
        {
          src: "https://i.pinimg.com/564x/59/59/9c/59599c11c023caa2612a987c96e3a326.jpg",
          alt: "Cat and Piano",
          link: "https://i.pinimg.com/564x/59/59/9c/59599c11c023caa2612a987c96e3a326.jpg",
          description: "Learn to Play Piano",
        },
        {
          src: "https://soranews24.com/wp-content/uploads/sites/3/2019/10/gs-2.png",
          alt: "Travel to Japan",
          link: "https://soranews24.com/wp-content/uploads/sites/3/2019/10/gs-2.png",
          description:
            "Travel to Japan for their Cherry Blossoms & Godzilla attractions",
          width: "400px",
          height: "280px",
        },
        {
          src: "https://media.tenor.com/sh_5zpuzWs4AAAAM/cat-pull-cat-snatch.gif",
          alt: "catnapped",
          link: "https://media.tenor.com/sh_5zpuzWs4AAAAM/cat-pull-cat-snatch.gif",
          description: "Have a cat (TOP PRIORITY)",
        },
      ],
    };
  },
  mounted() {
    this.renderGallery("hobbies-gallery", this.hobbiesGallery); // Pass gallery data to renderGallery
    this.renderGallery("art-gallery", this.artGallery);       // Pass gallery data to renderGallery
    this.renderGallery("personal-goals-gallery", this.personalGoalsGallery); // Pass gallery data to renderGallery
  },
  methods: {
    renderGallery(containerId, galleryItems) { // Modified to be a Vue method and accept galleryItems
      const container = document.getElementById(containerId);

      if (!container) return console.error(`Container with ID ${containerId} not found.`);

      container.innerHTML = ""; // Clear existing content

      const renderedItems = []; // Array to store rendered item data

      galleryItems.forEach((item) => {
        const galleryDiv = document.createElement("div");
        galleryDiv.className = "gallery";

        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.alt;
        img.style.width = "320px";
        img.style.height = "280px";
        img.dataset.link = item.link;
        img.dataset.description = item.description;
        img.style.cursor = "pointer"; // Add CSS style for hover pointer

        const desc = document.createElement("div");
        desc.className = "desc";
        desc.innerText = item.description;

        galleryDiv.appendChild(img);
        galleryDiv.appendChild(desc);
        container.appendChild(galleryDiv);

        renderedItems.push({  // Store image info and element
          element: img,
          info: { link: item.link, src: item.src, description: item.description }
        });
      });

      renderedItems.forEach(item => { // Attach click listeners using Vue methods!
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