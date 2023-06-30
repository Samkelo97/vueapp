<template>
  <div class="hello">
    <h2>Drip with confidence and slay with style</h2>

  </div>
  <!-- categories -->
<div class="row m-4 justify-content-evenly">
  <div class="card col-lg-6 col-md-6 col-12 m-4" style="height: 500px;width: 500px;" id="pants">
  <div class=" justify-content-center">
    <div class="card-body1">
      <h1 class="men">Pants</h1>
      <form action="./HTML/pants.html" ><button style="background-color: black;color: white;">take a look</button></form>
    </div>
  </div>
  </div>
  <!-- jackets -->
  <div class="card col-lg-6 col-md-6 col-12 mx-2 m-4" style="height: 500px;width: 500px;" id="jackets">
  <div class="justify-content-center">
    <div class="card-body1">
      <h1 class="men">Jackets</h1>
      <form action="./HTML/pants.html" ><button style="background-color: black;color: white;">take a look</button></form>
    </div>
  </div>
  </div>
  <!-- sneakers -->
  <div class="card col-lg-6 col-md-6 col-12 m-4" style="height: 500px;width: 500px;" id="Sneakers">
  <div class=" justify-content-center">
    <div class="card-body1">
      <h1 class="men">Sneakers</h1>
      <form action="./HTML/pants.html" ><button style="background-color: black;color: white;">take a look</button></form>
    </div>
  </div>
  </div>
  <!-- Caps -->
  <div class="card col-lg-6 col-md-6 col-12 m-4" style="height: 500px;width: 500px;" id="Caps">
  <div class=" justify-content-center">
    <div class="card-body1">
      <h1 class="men">Caps</h1>
      <form action="./HTML/pants.html" ><button style="background-color: black;color: white;">take a look</button></form>
    </div>
  </div>
  </div>
</div>
<!-- all featured -->
<div class="card col-lg-6 col-md-6 col-12 mx-5 m-5" style="height: 300px;width: 90vw; left: 60px;" id="products">
  <div class=" justify-content-center">
    <div class="card-body1">
      <h1 class="men">All our featured products</h1>
      <form action="./HTML/pants.html" ><button style="background-color: black;color: white;">take a look</button></form>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-image: url(https://i.postimg.cc/PfZKbYPD/adidas-fam.webp);
  /* background-color: blue; */
  height: 500px;
  width: 100vw;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  
}
h2{
  text-align: center;
  color: white;
  margin-top:2%;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
#products{
background-image: url(https://i.postimg.cc/7Z4Z1t0W/Nike-Flyknit-adizero-Primeknit.jpg);
background-attachment: fixed;

}

#pants{
  background-image: url(https://i.postimg.cc/YCWcSpwq/ndida.png);
  background-attachment: fixed;
}
#jackets{
  background-image: url(https://i.postimg.cc/QMNcNdRR/nike.webp);
  background-attachment: fixed;
}
#Sneakers{
  background-image: url(https://i.postimg.cc/CMJTdPBX/7d76b0da762c7a1963c5c958a7af251b-500x500.webp);
  background-attachment: fixed;
}
#Caps{
  background-image: url(https://i.postimg.cc/524mygz7/13030288-1-green.webp);
  background-attachment: fixed;
}
template{
  overflow: hidden;
  background-attachment: sticky;
}
img{
  width:100vw;
  height:90vh;
}
#my {
  position: absolute;
  width:30vw;
  height: 50vh;
  top: 50%;
  left: 65%;

}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}



</style>
