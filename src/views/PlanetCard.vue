<script setup></script>

<template>
  <div>
    <div class="card">
      <img
        src="https://dragonball-api.com/planetas/Namek_U7.webp"
        height="250PX"
        width="250px"
        alt=""
      />
      <div class="container">
        <h3><span>Name:</span>Namek</h3>
        <h3><span>Destroyed:</span>Yes</h3>
        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 450px;
  border: 1px solid black;
  width: 300px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(128, 128, 128, 0.7);
  font-size: 30px ;
  
  color: white;
  img {
    border: 7px solid gray;
    margin: 22px;
  }
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    flex:1;
    
  }
  span{
    color: hsl(43, 100%, 50%) ;
    margin: 0 5px;
  }
  h3{
    font-weight: 700;
    margin: 10px
  }
}
</style>
