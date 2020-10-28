<template>
    <div class="container">
        <footer class="footer">
            <FooterSocialNetworks />
            <FooterNavigation />
        </footer>
    </div>
</template>

<script>
    import FooterSocialNetworks from "./FooterSocialNetworks";
    import FooterNavigation from "./FooterNavigation";

    export default {
        name: "Footer",
        components: {
            FooterNavigation,
            FooterSocialNetworks
        }
    }
</script>

<style>
    .footer {
        height: 250px;
        display: flex;
        justify-content: center;
        min-width: 1366px;
    }
</style>