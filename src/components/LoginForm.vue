<script setup>
    
</script>

<template>
    <form class="background" @submit.prevent action="">
        <input type="text" name="username" id="username" placeholder="Enter username">
        <input type="password" name="passoword" id="password" placeholder="password">
        <button type="submit">Login</button>
    </form>
</template>

<style lang="scss" scoped>
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    
    height: 300px;
    width: 300px;
    border: 1px solid black;
    border-radius: 15px;
    
    

    // background-color: gray;
    // backdrop-filter: blur(10px);

    button{
        background-color: hsl(43, 100%, 53%);
        border-radius: 5px;
        width: 75px;
        font-weight: 700;
    }
    input{
        padding: 3px 10px;
        font-weight: 700;
        border-radius: 5px;
    }
}
.background{

    // filter: blur(5px);
    background-color: rgba(128, 128, 128, 0.187);
}
</style>