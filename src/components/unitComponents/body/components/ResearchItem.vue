<template>
  <div class="research-body">
    <p class="text">{{ name }}</p>
  </div>
  <div class="research-title">
    <p> {{ textContent }}</p>
  </div>
</template>

<script>
export default {
  name: "ResearchItem",
  props: {
    name: String,
    backgroundUrl: String,
    textContent: String
    },
}

</script>

<style scoped>
  .research-body {
    width: 210px;
    height: 210px;
    position: relative;
   
    color: white;
    font-size: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    overflow: hidden;
    
  }

  .research-body::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;  

    /* Градиент временно */
    background: url(https://i.gifer.com/7V8.gif),
                linear-gradient(216deg, rgba(8,81,190,1) 0%, rgba(60,121,9,1) 60%, rgba(255,0,0,1) 100%);
    background-size: cover;
    filter: blur(5px);

  
  }

  .research-title {
    font-size: 20px;
    text-align: center;
  }
</style>>
