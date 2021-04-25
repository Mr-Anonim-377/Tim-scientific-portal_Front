//Вертикальное меню на главной странице

<template>
    <section class="vertical-menu-section">
        <ul>
            <li>
                <a target="_blank" href="https://ncmu.ru/">НЦМУ Научные центры мирового уровня</a>
            </li>
            <li>
                <router-link :to="{ name: 'presentation' }">
                    Презентации НЦМУ
                </router-link>
            </li>

            <li>
                <router-link :to="{ name: 'educational' }">
                    Образовательные программы центра
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'dynamics' }"> Динамика достижения результатов программы</router-link>
            </li>
            <li>
                Исследователи НЦМУ
                <div class="popup">
                    <ul>
                        <li>
                            <router-link :to="{ path: '/party/adcb4eef-0e3c-4d63-a0be-adc3bd1fd51d' }">
                                Исследователи РГАУ-МСХА
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/party/9910e682-4e2f-4ae1-bdaf-661104cce80f' }">
                                Исследователи СПбГУ
                            </router-link>
                        </li>

                        <li>
                            <router-link :to="{ path: '/party/2efd4d2a-9dc4-4860-8706-53031fe341f6' }">
                                Исследователи ФБГНУ ВНИИСХМ
                            </router-link>
                        </li>

                        <li>
                            <router-link :to="{ path: '/party/043703e2-e14e-4491-be23-4c22fe0bca82' }">
                                Исследователи ФИЦ "Почвенный институт им. В.В. Докучаева
                            </router-link>
                        </li>

                        <li>
                            <router-link :to="{ path: '/party/f563f1e5-c465-4fa3-89a9-f9f17ba29048' }">
                                Исследователи ФИЦ ВИР
                            </router-link>
                        </li>

                        <li>
                            <router-link :to="{ path: '/party/2694ac87-48ab-405e-a4ee-038f9c2ef830' }">
                                Исследователи ФИЦ ИУ РАН
                            </router-link>
                        </li>

                        <li>
                            <router-link :to="{ path: '/party/cc92731b-841f-4dfd-9dad-b869acfb8074' }">
                                Исследователи ФИЦ Биотехнологии РАН
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <router-link :to="{ name: 'knowledgeBase' }">База знаний</router-link>
            </li>
            <li>
                <a href="http://future-agro.ru:8080/pdf/Prezentation_lupin.pdf">Фундаментальные результаты </a>
            </li>
            <li>
                <a href="http://future-agro.ru:8080/pdf/Research_Information_rr.pdf">Прикладные результаты</a>
            </li>
            <li>
                <router-link :to="{ name: 'TransferPage' }"> Трансфер технологий</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'MarketingPage' }">Маркетинговые исследования </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'OffersPage' }"> Предложения для внедрения результатов НЦМУ</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'notFound' }"> Запросы на исследования от индустриальных партнеров</router-link>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'VerticalMenuSection',
    };
</script>

<style scoped>
    .vertical-menu-section {
        height: 709px;
    }
    section {
        background-color: #f8f5e6;
        color: black;
        width: 345px;
        padding: 30px 20px;
        font-size: 16px;
    }

    li {
        padding-bottom: 23px;
        position: relative;
        color: #4d5668;
        /* font-family: Gilroy-Bold; */
        font-family: Roboto;
        list-style: disc;
    }

    section ul li:hover {
        color: #3f7e77;
    }

    li:last-child {
        margin-bottom: 0;
    }

    ul li a:link,
    ul li a:visited,
    ul li a:active {
        color: #4d5668;
    }

    .popup {
        position: absolute;
        padding: 30px 20px;
        width: 345px;
        right: -345px;
        z-index: 10000000000;
        background-color: #f8f5e6;
        top: 0px;
        visibility: hidden;
        opacity: 0;
        transition: 0.5s;
    }

    .popup li router-link a {
        color: #4d5668 !important;
    }

    li:hover .popup {
        visibility: visible;
        opacity: 1;
    }

    @media (max-width: 1650px) {
        .vertical-menu-section {
            height: 590px;
        }

        section {
            width: 285px;
            padding: 0px 20px;
            height: 590px;
        }

        ul {
            padding: 30px 20px;
            margin: 0;
            font-size: 14px;
            /* padding-inline-start: 40px; */
        }

        .popup {
            padding-bottom: 10px;
        }

        .popup ul {
            padding-top: 0;
            padding-bottom: 0;
        }

        li {
            padding-bottom: 20px;
        }
    }
</style>
