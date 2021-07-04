// СЕКЦИЯ УЧАСТНИКОВ ИССЛЕДОВАНИЯ НА СТРАНИЦЕ ИССЛЕДОВАНИЯ

<template>
    <div v-if="sectionData" class="container">
        <section>
            <TitleSection title="Исследователи" header-visible="asdas" />

            <ul :style="listHeight" :class="isDropDown ? 'ul_grid' : 'ul_flex'">
                <li v-for="member in sectionData" :key="member">
                    <!-- Прокидываем id для профиля -->
                    <!-- По умолчанию грузим вкладку form - оттуда получаем данные и кидаем в навигацию профиля -->

                    <!-- Если есть ID -->
                    <router-link
                        v-if="member._pageLink !== null"
                        style="text-decoration: none"
                        :to="{ path: `/form/${member._pageLink}` }"
                    >
                        <MemberItemArticle
                            :article-data="member"
                            :page-id="member._pageLink"
                        />
                    </router-link>

                    <!-- Если нет ID -->
                    <router-link
                        v-else
                        style="text-decoration: none"
                        :to="{ name: 'notFound' }"
                    >
                        <MemberItemArticle
                            :article-data="member"
                            :page-id="member._pageLink"
                        />
                    </router-link>
                </li>
            </ul>

            <p
                v-if="isDropDown"
                :style="btnStyle"
                class="newsSection__text"
                @click="showToggle"
            >
                Показать еще
            </p>
        </section>
    </div>
</template>

<script>
import TitleSection from './TitleSection';
import MemberItemArticle from './MemberItemArticle';

export default {
    name: 'ResearcMembersSection',

    components: {
        TitleSection,
        MemberItemArticle
    },
    props: {
        sectionData: []
    },

    data() {
        return {
            isShow: false,
            isDropDown: this.sectionData > 4,
            // Стандартная высота списка
            listHeight: { height: '370px' }
        };
    },

    methods: {
        showToggle: function() {
            this.listHeight = {
                height: `${
                    // Рассчитываем высоту листа после расрытия
                    305 * (this.test.length / 4)
                }px`
            };

            this.btnStyle = {
                opacity: 0,
                height: 0
            };
        }
    }
};
</script>

<style scoped>
section {
    margin: 100px auto;
}

ul {
    list-style: none;
    margin-top: 100px;
    padding: 0 50px;

    overflow: hidden;

    transition: 0.5s ease-in-out;
}

.ul_grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.ul_flex {
    display: flex;
    justify-content: center;
}

li {
    margin: 0 50px;
}

p {
    height: 18px;
    transition: 0.4s ease-in-out;
}
</style>
