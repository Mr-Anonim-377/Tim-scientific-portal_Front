<template>
    <div v-if="loadSuccess">
        <div class="container">
            <TitleSection title="Фото/Видео материалы" :headerVisible="true" />
            <ul>
                <router-link style="text-decoration: none" :to="{ path: `/KnowledgeBaseItem/123` }">
                    <li>
                        <p class="documentSection__text-name">Белопухов Сергей Леонидович - Польза скорлупы + опыт фараонова змея [Видео]</p>
                    </li>
                </router-link>
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
    // import mixin from '../../utils/methodsMixin';

    export default {
        name: 'KnowledgeBaseList',
        components: { Preloader, TitleSection },
        // mixins: [mixin],
        data() {
            return {
                loadSuccess: true,
                stileTitle: {
                    stile: ['font-size: 26px'],
                },
            };
        },
    };
</script>

<style scoped>
    .container {
        width: 800px;
        margin: 100px auto 52px;
        min-height: calc(100vh - 273px);
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
        /* margin-right: 7px; */
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
