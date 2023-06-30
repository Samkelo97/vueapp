<template>
  <div class="about">
    <h1>OUR STORY</h1>
        <p class="story">I started SAM-K Apparel in 2023 as I wanted a business that offered more than just clothes but rather stylish solutions for the whole family. I chose a range of clothing that makes life easier with pieces that are versatile, comfortable and stylish. A range that provides every member of the family with endless ways to wear them. We provide stylish solutions.</p>
        <p class="story">SAM-K persistently takes a stab at magnificence, sourcing key pieces, and accumulations from the world’s most notable brands.
            The cool, open construction of the online store enables each cautiously chosen brand to have its own personality, for our loyal customers to choose from.
        </p>
        <div class="vision col-lg-12 col-md-6 col-12 bg-dark text-white">
          <h2>Sign Up and Save!</h2>
          <p>Let us tell you about our new range of products,and ofcourse our deals!</p>
        <div class="containers">
            <form action="https://formspree.io/f/mrgvrllz" method="post">
                <input class="bg-body-tertiary" type="text" id="Email" name="Email" placeholder="Enter your Email..">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
    <div class="all">
    <div class="New-deals">
      <h2 class="Now">Now Available</h2>
      <h1 class="Winter">WINTER 2023</h1><br>
      <form action="/products"><button class="shop" href="/products">Shop Now</button></form>
  </div>
  <div >
    <div class="card" style="width: 18rem ;height: 300px;">
      <div class="card-body">
        </div>
    </div>

    <div class="cards" style="width: 18rem ;height: 300px;">
      <div class="card-body">
        </div>
    </div>
  </div>
    </div>
  </div>
</template>
<style>
h1{
  text-align: center;
}
.story{
    font-size:15px;
    margin-inline:150px;
    font-family:'Montserrat', sans-serif ;
    margin-top: 50px;
}

.New-deals{
    text-align: left;
    margin-top: 170px;
}
.containers {
    border-radius: 30px;
    padding: 20px;
    width: 500px;
    margin: auto;
   
}
.about{
    height: 75rem;
    text-align: center;
}
input[type=text], select, textarea {
    width: 100%;
    padding: 16px;
    border: 1px solid ;
    border-top: none;
    border-left: none;
    border-right: none;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: none;
    background-color: black;
}

.card{
    margin: auto;
    margin-top: -200px;
    float: right;
    margin-right: 180px;
    background-image: url(https://i.postimg.cc/mhfmcfw2/winter-hats.webp);
}
.cards{
    background-image: url(https://i.postimg.cc/c1fWmQK2/nike-winter-shoes.png);
    background-size: cover;
    float: right;
    margin-right: -30px;
    margin: auto;
    margin-top: -100px;
}
.shop{
    background-color: black;
    color: white;
}
input[type=submit] {
   color:white;
    border:none;
    border-radius: 20px;
    cursor: pointer;
    font-family: 'Bruno Ace SC', cursive;
    background-color: black;
}
input[type=submit]:hover {
    scale: 1.1;
    box-shadow: 1px 1px 1px 2px white;
}
.Winter{
  margin-left:-250px;
}
.Now{
  margin-left:350px;
}
.shop{
  margin-left:670px;
}
.shop:hover{
  background-color: white;
  color: black;
}

</style>
