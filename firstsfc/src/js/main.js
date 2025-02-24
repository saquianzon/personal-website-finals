// Updated renderGallery function (from js/main.js)

function renderGallery(containerId, galleryItems) {
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
  
      img.style.cursor = "pointer"; // CSS for hover
  
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
    return renderedItems; // Return the array of rendered items with data
  }
  
  // Export the renderGallery function if you intend to import it as a module.
  // If you are NOT using modules and just including this in index.html (less recommended for Vue),
  // you can remove the export line.
  export { renderGallery };