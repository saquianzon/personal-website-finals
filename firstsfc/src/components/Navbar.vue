<template>
  <div>
    <!-- Icon Bar (Sidebar - hidden on small screens) -->
    <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center" id="sidebar">
      <a href="#" class="w3-bar-item w3-button w3-padding-large">
        <i class="fa fa-home w3-xxlarge"></i>
        <p>HOME</p>
      </a>
      <a href="#about" class="w3-bar-item w3-button w3-padding-large">
        <i class="fa fa-user w3-xxlarge"></i>
        <p>ABOUT</p>
      </a>
      <a href="#it" class="w3-bar-item w3-button w3-padding-large">
        <i class="fa fa-wrench fa-3x"></i>
        <p>IT SKILLS</p>
      </a>
      <a href="#goals" class="w3-bar-item w3-button w3-padding-large">
        <i class="fa fa-trophy fa-4x"></i>
        <p>GOALS</p>
      </a>
      <a href="#photos" class="w3-bar-item w3-button w3-padding-large">
        <i class="fa fa-camera-retro fa-3x"></i>
        <p>HOBBIES</p>
      </a>
      <a href="#art" class="w3-bar-item w3-button w3-padding-large">
        <i class="fa fa-paint-brush fa-3x"></i>
        <p>ARTWORKS</p>
      </a>
      <a href="#contact" class="w3-bar-item w3-button w3-padding-large">
        <i class="fa fa-envelope w3-xxlarge"></i>
        <p>CONTACT</p>
      </a>
    </nav>

    <!-- Navbar on small screens (Hidden on medium and large screens) -->
    <div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar" style="background-color: #130302;"> 
      <div class="w3-bar w3-hover-opacity-off w3-center w3-small">
        <a href="#" class="w3-bar-item w3-button w3-text-white" style="width:25% !important">HOME</a>
        <a href="#about" class="w3-bar-item w3-button w3-text-white" style="width:25% !important">ABOUT</a>
        <a href="#art" class="w3-bar-item w3-button w3-text-white" style="width:25% !important">GALLERY</a>
        <a href="#contact" class="w3-bar-item w3-button w3-text-white" style="width:25% !important">CONTACT</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style>
</style>