<template>
    <HeaderSection :modifiers="modifiers.header" />
    <router-view />
    <FooterSection />
</template>

<script>
import HeaderSection from "./components/unitComponents/HeaderSection/HeaderSection";
import FooterSection from "./components/unitComponents/FooterSection/FooterSection";

export default {
    name: "App",
    components: {
        HeaderSection,
        FooterSection,
    },
    data() {
        return {
            modifiers: {
                header: ["header_border-none"],
            },
        };
    },
};
</script>

<style>
* {
    box-sizing: border-box;
}

img {
    /*pointer-events: none;*/
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;

    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}

body {
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    font-family: Gilroy-Regular, Gilroy-Bold;
    background-color: #ffffff;
    box-sizing: border-box;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    min-width: 1300px;
    cursor: default;
    text-decoration: none;
}

a {
    z-index: 20;
}

.container {
    width: 1145px;
    margin: auto;
}

.content {
    min-height: calc(100vh - 377px);
}

ul li a:link,
ul li a:visited,
ul li a:active,
ul li a:hover {
    text-decoration: none;
    color: black;
}
@font-face {
    font-family: "Gilroy-Bold";
    src: url("./assets/fonts/Gilroy/bold/gilroy-bold.eot");
    src: url("./assets/fonts/Gilroy/bold/gilroy-bold.eot?#iefix")
            format("embedded-opentype"),
        url("./assets/fonts/Gilroy/bold/gilroy-bold.woff2") format("woff2"),
        url("./assets/fonts/Gilroy/bold/gilroy-bold.woff") format("woff"),
        url("./assets/fonts/Gilroy/bold/gilroy-bold.ttf") format("truetype"),
        url("./assets/fonts/Gilroy/bold/gilroy-bold.svg#gilroy-bold")
            format("svg");
}
@font-face {
    font-family: "Gilroy-Regular";
    src: url("./assets/fonts/Gilroy/regular/gilroy-regular.eot");
    src: url("./assets/fonts/Gilroy/regular/gilroy-regular.eot?#iefix")
            format("embedded-opentype"),
        url("./assets/fonts/Gilroy/regular/gilroy-regular.woff2")
            format("woff2"),
        url("./assets/fonts/Gilroy/regular/gilroy-regular.woff") format("woff"),
        url("./assets/fonts/Gilroy/regular/gilroy-regular.ttf")
            format("truetype"),
        url("./assets/fonts/Gilroy/regular/gilroy-regular.svg#gilroy-regular")
            format("svg");
}

.swiper_slider_button_next {
    position: relative;
    height: fit-content;
    left: 3%;
    margin-top: auto;
    margin-bottom: auto;
}

.swiper_slider_button_prev {
    position: relative;
    height: fit-content;
    right: 3%;
    margin-top: auto;
    margin-bottom: auto;
}
</style>
