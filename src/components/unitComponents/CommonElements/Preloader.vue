<template>
    <div class="zaglushka">
        <div class="circle">
        <img src="../../../assets/image/Logo2.svg" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    name: "Preloader",
};
</script>

<style scoped>
.zaglushka {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: white;
    top: 0;
    z-index: 1000;
}

img {
    width: 150px;
}

.circle {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    width: 300px;
    height: 300px;

    border: 5px solid #3f7e77;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.circle::before {
    content: "";
    display: block;

    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    border: 5px solid #3f7e77;

    animation: animation1 0.5s infinite;
}


@keyframes animation1 {
    from {
        transform: scale(1);
        opacity: 1;
    }

    to {
        transform: scale(1.5);
        opacity: 0;
    }
}

</style>
