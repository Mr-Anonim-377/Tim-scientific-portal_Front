§<template>
    <section class="headerSection">
        <!--Верхняя часть хедера-->
        <div class="headerSection-container">
            <p class="headerSection__text-phone">
                <!-- <router-link style="text-decoration: none" :to="{ name: 'notFound' }"> -->
                +7 (499) 976-07-48
                <!-- </router-link> -->
            </p>
            <p class="headerSection__textMail">
                <!-- <router-link style="text-decoration: none" :to="{ name: 'notFound' }"> -->
                future-agro.info@yandex.ru
                <!-- </router-link> -->
            </p>
            <router-link style="text-decoration: none" :to="{ name: 'Main' }">
                <img src="../../../assets/image/newLogo.png" />
                <div class="popup-arrow"></div>
            </router-link>
            <input type="text" placeholder="Поиск" class="headerSection__research" />
            <button class="btn-research"></button>
        </div>

        <!--Нижняя часть хедера-->
        <div class="headerSection__navigation">
            <div class="headerSection__navigation-container">
                <div class="headerSection__item">
                    <p>Участники консорциума НЦМУ</p>

                    <div class="popup-arrow"></div>

                    <div class="popup">
                        <a target="_blank" href="https://www.timacad.ru/">
                            <p>
                                Российский государственный аграрный университет - МСХА имени К. А. Тимирязева
                            </p>
                        </a>

                        <a target="_blank" href="https://spbu.ru/">
                            <p>Санкт-Петербургский государственный университет</p>
                        </a>
                        <a target="_blank" href="https://arriam.ru/">
                            <p>
                                Всероссийский научно-исследовательский институт сельскохозяйственной микробиологии
                            </p>
                        </a>

                        <a target="_blank" href="http://esoil.ru/>">
                            <p>ФИЦ "Почвенный институт имени В.В. Докучаева</p>
                        </a>

                        <a target="_blank" href="https://www.vir.nw.ru/">
                            <p>
                                Всероссийский институт генетических ресурсов растений имени Н.И. Вавилова
                            </p>
                        </a>

                        <a target="_blank" href="http://www.frccsc.ru/">
                            <p>ФИЦ "Информатика и управление" РАН</p>
                        </a>

                        <a target="_blank" href="https://www.fbras.ru/">
                            <p>ФИЦ "Фундаментальные основы биотехнологии" РАН</p>
                        </a>
                    </div>
                </div>

                <div class="headerSection__item">
                    <router-link style="text-decoration: none" :to="{ name: 'documents' }">
                        <p>Официальные документы</p>
                    </router-link>
                </div>

                <div class="headerSection__item">
                    <p>Научные направления</p>

                    <div class="popup-arrow"></div>

                    <div class="popup">
                        <router-link
                            v-for="way in ways.WAYS_ITEM"
                            :key="way.title"
                            style="text-decoration: none"
                            :to="{ path: `/all-research/${way._pageLink}` }"
                        >
                            <p>
                                {{ way.title[0] + way.title.slice(1).toLowerCase() }}
                            </p>
                        </router-link>
                    </div>
                </div>
                <!-- </router-link> -->
                <div class="headerSection__item">
                    <router-link style="text-decoration: none" :to="{ name: 'contacts' }">
                        <p>Пресс-служба</p>
                    </router-link>
                </div>

                <div class="headerSection__item">
                    <p>Новости</p>

                    <div class="popup-arrow"></div>

                    <div class="popup">
                        <router-link style="text-decoration: none" :to="{ name: 'participantNews', params: { tag: 'РГАУ-МСХА' } }">
                            <p>
                                Российский государственный аграрный университет - МСХА имени К. А. Тимирязева
                            </p>
                        </router-link>

                        <router-link style="text-decoration: none" :to="{ name: 'participantNews', params: { tag: 'Санкт-Петербургский' } }">
                            <p>Санкт-Петербургский государственный университет</p>
                        </router-link>
                        <router-link
                            style="text-decoration: none"
                            :to="{ name: 'participantNews', params: { tag: 'сельскохозяйственной_микробиологии' } }"
                        >
                            <p>
                                Всероссийский научно-исследовательский институт сельскохозяйственной микробиологии
                            </p>
                        </router-link>

                        <router-link style="text-decoration: none" :to="{ name: 'participantNews', params: { tag: 'Докучаева' } }">
                            <p>ФИЦ "Почвенный институт имени В.В. Докучаева</p>
                        </router-link>

                        <router-link style="text-decoration: none" :to="{ name: 'participantNews', params: { tag: 'Вавилова' } }">
                            <p>
                                Всероссийский институт генетических ресурсов растений имени Н.И. Вавилова
                            </p>
                        </router-link>

                        <router-link style="text-decoration: none" :to="{ name: 'participantNews', params: { tag: 'Информатика_и_управление' } }">
                            <p>ФИЦ "Информатика и управление" РАН</p>
                        </router-link>

                        <router-link
                            style="text-decoration: none"
                            :to="{ name: 'participantNews', params: { tag: 'Фундаментальные_основы_биотехнологии' } }"
                        >
                            <p>ФИЦ "Фундаментальные основы биотехнологии" РАН</p>
                        </router-link>
                        <router-link style="text-decoration: none" :to="{ name: 'news' }">
                            <p>Все новости</p>
                        </router-link>
                    </div>
                </div>

                <div v-if="isAuth" class="authorization headerSection__item">
                    <span class="login">Аккаунт {{ accountName }}</span>

                    <div class="popup">
                        <router-link style="text-decoration: none" :to="{ name: 'AdminNewsPage' }">
                            <p>Администрирование</p>
                        </router-link>
                        <p @click="logOut">Выход</p>
                    </div>
                </div>

                <div v-else class="authorization headerSection__item">
                    <router-link style="text-decoration: none" :to="{ name: 'auth' }">
                        <span class="login">Личный кабинет</span>

                        <!-- <div class="popup">
							<p>Администрирование</p>
							<p @click="logOut">Выход</p>
						</div> -->
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'headerSection',
        props: {
            ways: Object,
            news: Object,
            isAuth: Boolean,
        },

        data() {
            return {
                accountName: '',
            };
        },
        methods: {
            logOut() {
                localStorage.setItem('isAuth', false);

                axios({
                    method: 'POST',
                    url: '/logout',
                }).catch(() => {
                    this.$router.go();
                });
            },

            // ucFirst(string) {
            // 	return string[0].toUpperCase + string.slice(1)
            // }
        },

        mounted() {
            this.accountName = localStorage.getItem('tag');
        },
    };
</script>

<style scoped>
    p,
    a {
        cursor: pointer;
        text-decoration: none;
        font-size: 14px;
        line-height: 18px;
        color: #3f7e77;
    }
    p:active,
    p:hover {
        color: #666;
    }

    img {
        /* TEMP размер пока дизайнеры не подгонят svg */
        width: 150px;
    }

    .headerSection {
        width: 100%;
        background: #f8f5e6;
    }
    .headerSection-container {
        padding: 16px 0 11px 0;
        display: flex;
        text-align: center;
        margin: auto;
        max-width: 1200px;
        align-items: center;
        position: relative;
    }

    /*Телефон с картинкой*/
    .headerSection__text-phone {
        margin: 0 63px 0 32px;
        position: relative;
        font-size: 12px;
    }

    .headerSection__text-phone p {
        font-size: 12px;
        /* flex-s */
    }
    .headerSection__text-phone:before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background-image: url('../../../assets/image/Phone.svg');
        margin-left: -29px;
        cursor: default;
    }
    /*Почта с картинкой*/
    .headerSection__textMail {
        margin: 0 121px 0 10px;
    }
    .headerSection__textMail:before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background-image: url('../../../assets/image/Mail.svg');
        margin-left: -28px;
        /* cursor: default; */
    }
    /*Ститили input*/
    .headerSection__research {
        width: 418px;
        height: 34px;
        background: #ffffff;
        border-radius: 20px;
        margin-left: 122px;
        padding: 0 21px;
        border: none;
        font-size: 15px;
        line-height: 18px;
        color: rgba(63, 126, 119, 0.5);
    }
    .headerSection__research :active,
    :hover,
    :focus {
        outline: 0;
        outline-offset: 0;
    }
    ::-webkit-input-placeholder {
        color: rgba(63, 126, 119, 0.5);
        /* font-weight: 500; */
        font-size: 15px;
        line-height: 18px;
    }

    /*Стили кнопки Input*/
    .btn-research {
        background-image: url('../../../assets/image/Research.svg');
        width: 20px;
        height: 20px;
        border: none;
        position: absolute;
        right: 42px;
        text-decoration: none;
        background-color: #ffffff;
        outline: none;
    }

    /*Стили навишации*/
    .headerSection__navigation {
        background: #3f7e77;
        width: 100%;
        color: #f8f5e6;
    }
    .headerSection__navigation-container {
        display: flex;
        text-align: center;
        margin: auto;
        max-width: 1200px;
        position: relative;
    }

    .headerSection-container router-link,
    .headerSection-container a {
        position: relative;
    }
    .headerSection__navigation p {
        margin: 0;
        color: #f8f5e6;
        letter-spacing: 0.03em;
    }

    /*Стили Входа*/
    .login {
        color: #f8f5e6;
        /* position: absolute; */
        right: 1px;
        font-size: 14px;
        /* padding: 18px 10px; */
    }
    .login:before {
        content: '';
        position: absolute;
        width: 21px;
        height: 25px;
        background-image: url('../../../assets/image/Lk.svg');
        background-repeat: no-repeat;
        left: -20px;
        top: 15px;
    }

    .headerSection__item {
        width: auto;
        position: relative;
        padding: 18px 10px;

        display: flex;
        align-items: center;
    }

    .authorization {
        /* display: block; */
        /* position: relative; */

        position: absolute;
        right: 0;
    }

    .authorization .popup {
        /* width: 100%; */
        left: -25px;
    }

    .headerSection__item .popup-arrow {
        margin-left: 10px;
        position: relative;
        background-image: url('../../../assets/image/Vector.svg');
        background-size: 10px 5px;
        /* top: 2px; */
        width: 10px;
        height: 5px;
        transition: opacity 0.5s;
    }

    .headerSection__item:hover .popup {
        /* display: block; */
        visibility: visible;
        opacity: 1;
    }

    .headerSection__item:hover .popup-arrow {
        opacity: 0;
        border-style: border-box;
    }

    .popup {
        width: max-content;
        padding: 20px 20px 10px;
        position: absolute;
        background-color: rgb(63, 126, 119);
        z-index: 14;
        /* display: none; */
        visibility: hidden;
        opacity: 0;
        left: 0;
        right: 0;
        margin: auto;
        top: 53px;
        transition: opacity 0.5s;
    }

    .popup p {
        margin: 0 0 20px;
        font-size: 14px;
        line-height: 17px;
        text-align: left;
        max-width: 250px;
    }
</style>
