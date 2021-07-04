// Прелоадер

<template>
    <div class="zaglushka">
        <div class="circle">
            <img src="../../../assets/image/newLogo.png" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Preloader'
};
</script>

<style>
.zaglushka {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: white;
    top: 0;
    z-index: 1000;
}

.zaglushka img {
    width: 340px;
}

.zaglushka .circle {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    width: 450px;
    height: 450px;

    border: 5px solid #3f7e77;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.zaglushka .circle::before {
    content: '';
    display: block;
    position: absolute;
    width: 450px;
    height: 450px;
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
