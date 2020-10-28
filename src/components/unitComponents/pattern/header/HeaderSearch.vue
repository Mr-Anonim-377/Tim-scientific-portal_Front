<template>
    <div class="header__search">
        <input type="text">
    </div>
</template>

<script>
    export default {
        name: "HederSearch"
    }
</script>

<style>
    .header__search::before {
        content: "";
        display: block;
        width: 22px;
        height: 22px;
        background-color: black;
        margin-right: 7px;
        background: url("../../../../assets/image/search.png");
    }
</style>