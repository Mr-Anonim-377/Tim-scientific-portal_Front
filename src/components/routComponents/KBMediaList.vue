<template>
    <div v-if="loadSuccess">
        <div class="container">
            <TitleSection title="Фото/Видео материалы" :header-visible="true" />
            <ul>
                <li v-for="page in VIDEOS.VIDEO" :key="page._pageLink">
                    <router-link
                        style="text-decoration: none"
                        :to="{ path: `/KBMediaPage/${page._pageLink}` }"
                    >
                        <p class="documentSection__text-name">
                            {{ page.title }}
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

    <div v-else>
        <Preloader />
    </div>
</template>

<script>
import Preloader from '../unitComponents/CommonElements/Preloader';
import TitleSection from '../unitComponents/TitleSection';
import mixin from '../../utils/methodsMixin';

export default {
    name: 'KBMediaList',
    components: { Preloader, TitleSection },
    mixins: [mixin],
    data() {
        return {
            loadSuccess: false,
            stileTitle: {
                stile: ['font-size: 26px']
            }
        };
    },
    async mounted() {
        await this.getModulesTest('MEDIA_PAGE');
        setTimeout(() => {
            this.loadSuccess = true;
        }, 1500);
    }
};
</script>

<style scoped>
.container {
    width: 800px;
    margin: 100px auto 52px;
    min-height: calc(100vh - 273px);
}

a {
    margin: auto;
}

ul {
    margin-top: 43px;
}

li {
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    text-align: center;
}

p {
    font-size: 15px;
    line-height: 18px;
    color: #a6abb4;
    margin: 0;
    height: auto;
    color: #3f7e77;
    position: relative;
    margin: auto;
    cursor: pointer;
    height: auto;
    justify-content: justify;
}

p::before {
    content: '';
    background-image: url('../../assets/image/knowledgeBase/knowledge9.svg');
    background-size: cover;
    position: absolute;
    width: 20px;
    height: 20px;
    left: -28px;
    top: -1px;
}
</style>
