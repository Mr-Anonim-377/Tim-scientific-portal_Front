<template>
    <div v-if="loadSuccess">
        <section>
            <TitleSection :title="TRANSFER_TITLE.TITLE[0].title" :headerVisible="true" />

            <ul>
                <li v-for="link in this.TRANSFER_MEMBER.TRANSFER_ITEM"
                    :key="link.title">
                  <a target="_blank" :onclick="checkProperty" :href="link.link">
                  {{link.title}}
                  </a>
                </li>
            </ul>
        </section>
    </div>
    <div v-else>
        <Preloader />
    </div>
</template>
<script>
    import TitleSection from '../unitComponents/TitleSection';
    import mixin from '../../utils/methodsMixin';
    import Preloader from './../unitComponents/CommonElements/Preloader';
    export default {
        name: 'pagename',
        components: {
            TitleSection,
            Preloader,
        },
        mixins: [mixin],
        data() {
            return {
                loadSuccess: false,
            };
        },
        async mounted() {
            await this.getModulesTest('TECHNOLOGY_TRANSFER');
            setTimeout(() => {
                this.loadSuccess = true;
            }, 500);
        },
    };
</script>
<style scoped>
    a:link,
    a:visited,
    a:active,
    a:hover {
      text-decoration: none;
      color: #3f7e77;
    }
    section {
        max-width: 1140px;
        align-items: center;
        margin: 100px auto 170px auto;
        min-height: calc(100vh - 1010px);
    }

    ul {
        color: #3f7e77;
        font-size: 20px;
        margin: 100px auto;
        font-weight: 600;
    }

    li {
        margin: 20px 0;
    }
</style>
