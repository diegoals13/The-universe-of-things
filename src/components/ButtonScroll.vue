<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<template>
    <div id="containerbutton">
<button type="button" id="scroll" class="btn btn-outline-warning" @click="scrollToTop">☝️​​</button>
</div>
</template>

<style lang="scss" scoped>
#containerbutton{
    width: 100%;
    height: 100px;
    display:flex;
    align-items: center;
    justify-content: end;
    
    
}
#scroll{
    float: right;
    margin-right: 4%;
    width: 80px;
}
</style>
