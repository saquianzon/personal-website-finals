<template>
  <!-- Contact Section -->
<div class="w3-padding-64 w3-content w3-text-grey" id="contact">
  <h2 class="w3-text-light-grey">Contact Me</h2>
  <hr style="width:200px" class="w3-opacity">

  <div class="w3-section">
    
    <p>
      <b>
        <i class="fa fa-facebook-official fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>
        <a class="five" href="https://www.facebook.com/shandrae.quianzon" target="_blank">My Facebook Page
        </a>
      </b>
    </p>
    
    <p>
      <b>
        <i class="fa fa-instagram fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>
        <a class="five" href="https://www.instagram.com/quiassont/" target="_blank">Find me on Instagram
        </a>
      </b>
    </p>
    
    <p>
      <b>
        <i class="fa fa-linkedin fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>
        <a class="five" href="https://www.linkedin.com/in/shandrae-lois-quianzon-765679288/" target="_blank">Take a look at my LinkedIn Profile
        </a>
      </b>
    </p>
    
  </div>

<!-- End Contact Section -->
</div>
</template>

<script>
export default {
name: 'Contact'
}
</script>

<style scoped>

/* Prevent content from being hidden behind the navbar */
#contact {
margin-left: 250px; /* Adjust for navbar width */
padding: 20px;
}

/* Adjust for smaller screens */
@media (max-width: 768px) {
#contact {
  margin-left: 100px; /* Match sidebar width on tablets */
}
}

@media (max-width: 480px) {
#contact {
  margin-left: 0; /* Full width for mobile */
  padding-left: 15px;
  padding-right: 15px;
}
}



</style>