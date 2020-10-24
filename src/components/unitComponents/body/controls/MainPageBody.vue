<template>
  <main class="content">
    <Banner/>

    <SectionHeader title="Успехи программы"/>
    <SuccessModule/>

    <SectionHeader title="Направления исследований"/>
    <DirectionOfResearch/>

    <SectionHeader title="Новости программы"/>
    <News/>
  </main>
</template>

<script>
import Banner from "./../components/Banner";
import SuccessModule from "./../components/SuccessModule";
import DirectionOfResearch from "../components/DirectionOfResearch/DirectionOfResearch";
import News from "./../components/News/News";
import SectionHeader from "./../components/SectionHeader"

export default {
  name: "MainPageBody",
  components: {
    News,
    DirectionOfResearch,
    SuccessModule,
    Banner,
    SectionHeader
  }
}
</script>

<style>

</style>