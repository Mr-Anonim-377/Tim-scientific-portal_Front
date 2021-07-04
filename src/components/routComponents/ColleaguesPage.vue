<template>
    <section class="colleaguesSection">
        <TitleSection
            :title="titleColleagues"
            :header-visible="true"
            :stile-title="stileTitle.stile"
        />

        <div class="colleagues-container">
            <account-navigation-section />

            <div class="colleagues-block__inf">
                <h2>Мои коллеги</h2>

                <div class="inf-container__img">
                    <img
                        src="data:image/jpeg;base64,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"
                    />
                </div>
                <div class="inf-text">
                    <p>Ряженко Эдуард Вдадимирович</p>
                    <span class="inf-text__years"
                        >46 лет / Профессор ботаники</span
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TitleSection from '@/components/unitComponents/TitleSection';
import AccountNavigationSection from '@/components/unitComponents/AccountNavigationSection';
import mixin from '../../utils/methodsMixin';

export default {
    name: 'ColleaguesPage',
    components: {
        AccountNavigationSection,
        TitleSection
    },

    mixins: [mixin],

    props: {
        pageId: String
    },
    data() {
        return {
            titleColleagues: 'Коллеги',
            stileTitle: {
                stile: ['font-size: 26px']
            }
        };
    },

    async mounted() {
        /**
         * Получаем id профиля из адрессной строки
         */

        this.profileID = this.$route.params.pageId;

        /**
         * Получаем данные по id
         */
        await this.getModulesTest('', this.profileID);
        this.loadSuccess = true;
    }
};
</script>

<style scoped>
h2,
p,
span {
    font-weight: bold;
    line-height: 29px;
    color: #3f7e77;
    font-size: 22px;
}

.colleaguesSection {
    max-width: 1200px;
    align-items: center;
    margin: 89px auto 100px auto;
}
.colleagues-container {
    display: flex;
    margin-top: 91px;
}

.colleagues-block__inf {
    margin-left: 130px;
    display: flex;
    flex-wrap: wrap;
}

.inf-container__img {
    width: 131px;
    height: 131px;
    border-radius: 50%;
    border: 3px solid #3f7e77;
    margin-bottom: 49px;
    overflow: hidden;
    display: flex;
}
.colleagues-block__inf img {
    width: auto;
    height: 100%;
    margin: auto;
}

.colleagues-block__inf p {
    margin: 0 0 5px 0;
    width: 100%;
}
.colleagues-block__inf h2 {
    width: 100%;
    margin: 0 0 44px 0;
}

.inf-text {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 106px 50px;
}

.inf-text__years {
    font-size: 12px;
    margin-left: 47px;
    position: relative;
}

.inf-text__years:before {
    content: '';
    position: absolute;
    width: 31px;
    height: 1px;
    background: #3f7e77;
    top: 16px;
    left: -49px;
}
</style>
