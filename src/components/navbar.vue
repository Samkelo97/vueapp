<template>
    <nav class="navbar navbar-expand-lg bg-dark sticky-top text-white">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/"><img src="https://i.postimg.cc/xTs0T5Fb/SAM-K_APPREL__1_-removebg-preview.png" style="width:100px;height: 60px;" alt="logo"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="color: white;">
      <span class="navbar-toggler-icon" style="color: white;"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/About">Our Story</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products" >Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/jackets">Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/"><img src="../assets/icons8-cart-24.png" alt="..."> </router-link>
        </li>

      </ul>

    </div>
  </div>
</nav>
</template>
<style>
.nav-link, .navbar-brand{
  color: white;
}
img{
  color: white;
}
.navbar-toggler-icon{
  background-color: white;
  border: white;
}
</style>
