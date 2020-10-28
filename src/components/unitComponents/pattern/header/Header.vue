<template>
    <div class="container">
        <header class="header" :class="modifiers">
            <img src="../../../../assets/image//logo.png" alt="logo" class="header__logo">
            <HeaderNavigation />
            <HeaderSearch />
            <HeaderAuthorization />
        </header>
    </div>
</template>

<script>
    import HeaderSearch from "./HeaderSearch";
    import HeaderNavigation from "./HeaderNavigation";
    import HeaderAuthorization from "./HeaderAuthorization";

    export default {
        name: "Header",
        props: ["modifiers"],
        components: {
            HeaderSearch,
            HeaderNavigation,
            HeaderAuthorization
        }
    }
</script>

<style>
    /* Основной css класс для компонента Header */
    .header {
        height: 112px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 12px solid #2F653B;
        padding: 0 40px;
        font-weight: normal;
    }

    .header__logo {
        width: 98px;
        height: 98px;
    }

    /* Модификаторы */
    .header_border-none {
        border: none;
    }
</style>