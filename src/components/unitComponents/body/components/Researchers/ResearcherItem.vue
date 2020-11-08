<template>

      <div></div>
      <p> {{ researchItemData.name }} </p>

</template>

<script>
export default {
    name: "ResearchItem",
    props: {
        researchItemData: Object,
    }
}
</script>

<style scoped>

    div {
        width: 175px;
        height: 175px;
        border-radius: 100%;
        background-color: white;
    }
</style>
