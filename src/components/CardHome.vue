<script></script>

<template>
    <div class="row justify-content-center">
  <div id="cardcontainer" class="row col-2 row-cols-1 row-cols-md-1 g-4">
    <div class="col ">
      <div class="card h-100" id="cardcontent">
        <div id="contentimg">
        <img src="https://dragonball-api.com/characters/goku_normal.webp" class="card-img-top " alt="..." />
         </div>
        <div class="card-body">
          <h5 class="card-title">Name</h5>
          <p class="card-text">
            Goku
          </p>
        </div>
        <div class="card-body">
          <h5 class="card-title">Race</h5>
          <p class="card-text">
            Saiyan
          </p>
        </div>
        <div class="card-body">
          <h5 class="card-title">Max Ki</h5>
          <p class="card-text">
            Infinite
          </p>
        </div>
      </div>
    </div>

   
  </div>

  <div id="cardcontainer" class="row col-2 row-cols-1 row-cols-md-1 g-4">
    <div class="col ">
      <div class="card h-100" id="cardcontent">
        <div id="contentimg">
        <img src="https://dragonball-api.com/characters/goku_normal.webp" class="card-img-top " alt="..." />
         </div>
        <div class="card-body">
          <h5 class="card-title">Name</h5>
          <p class="card-text">
            Goku
          </p>
        </div>
        <div class="card-body">
          <h5 class="card-title">Race</h5>
          <p class="card-text">
            Saiyan
          </p>
        </div>
        <div class="card-body">
          <h5 class="card-title">Max Ki</h5>
          <p class="card-text">
            Infinite
          </p>
        </div>
      </div>
    </div>

   
  </div>
  <div id="cardcontainer" class="row col-2 row-cols-1 row-cols-md-1 g-4">
    <div class="col ">
      <div class="card h-100" id="cardcontent">
        <div id="contentimg">
        <img src="https://dragonball-api.com/characters/goku_normal.webp" class="card-img-top " alt="..." />
         </div>
        <div class="card-body">
          <h5 class="card-title">Name</h5>
          <p class="card-text">
            Goku
          </p>
        </div>
        <div class="card-body">
          <h5 class="card-title">Race</h5>
          <p class="card-text">
            Saiyan
          </p>
        </div>
        <div class="card-body">
          <h5 class="card-title">Max Ki</h5>
          <p class="card-text">
            Infinite
          </p>
        </div>
      </div>
    </div>

   
  </div>
  <div id="cardcontainer" class="row col-2 row-cols-1 row-cols-md-1 g-4">
    <div class="col ">
      <div class="card h-100" id="cardcontent">
        <div id="contentimg">
        <img src="https://dragonball-api.com/characters/goku_normal.webp" class="card-img-top " alt="..." />
         </div>
        <div class="card-body">
          <h5 class="card-title">Name</h5>
          <p class="card-text">
            Goku
          </p>
        </div>
        <div class="card-body">
          <h5 class="card-title">Race</h5>
          <p class="card-text">
            Saiyan
          </p>
        </div>
        <div class="card-body">
          <h5 class="card-title">Max Ki</h5>
          <p class="card-text">
            Infinite
          </p>
        </div>
      </div>
    </div>

   
  </div>
</div>
</template>

<style lang="scss" scoped>
img{
   width: 120px;
   height: 300px;  
   margin:auto;
}
#cardcontainer{
    background-color: rgba(78, 82, 88, 0.7);
    border:3px solid rgba(0, 0, 0, 0.7);
    border-radius: 16px;
    margin: 20px;
    width: 420px;
    
}
#cardcontent{
    background-color: rgba(78, 82, 88, 0.0);
    border:0;

}
.card-title{
    color:#FFB800;
    font-weight: 600;
    font-size: 24px;
    
}
p{
    color:white;
    font-weight: 600;
    font-size: 24px;
   
}
.card-body{
padding: 10px;
margin-left: 30px;
}
#contentimg{
    margin: auto;
    background-color: rgba(255,255,255,0.5);
    padding: 5px 100px;
    border-radius: 20px;
}

@media only screen and (max-width: 450px) {
    #cardcontainer{
        width:180px;
        height: auto;
    }
    img{
   width: 80px;
   height: 180px;  
   margin:auto;
}
.card-title{
    color:#FFB800;
}
p{
    color:white;
    font-weight: 600;
    font-size: 24px;
}

}

</style>
