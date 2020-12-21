<template>
    <section class="headerSection">
        <!--Верхняя часть хедера-->
        <div class="headerSection-container">
                <p class="headerSection__text-phone"> <router-link
                        style="text-decoration: none"
                        :to="{ name: 'notFound' }"
                >+7 (499) 976-07-48
                </router-link></p>
                <p class="headerSection__textMail">
                    <router-link
                            style="text-decoration: none"
                            :to="{ name: 'notFound' }"
                    >
                    info@future-agro.ru
                    </router-link>
                </p>
            <router-link style="text-decoration: none" :to="{ name: 'Main' }">
                <img src="../../../assets/image/Logo2.svg" />
            </router-link>
            <input
                type="text"
                placeholder="Поиск"
                class="headerSection__research"
            />
            <button class="btn-research"></button>
        </div>

        <!--Нижняя часть хедера-->

        <div class="headerSection__navigation">
            <div class="headerSection__navigation-container">
                <router-link
                    style="text-decoration: none"
                    :to="{ name: 'Consortium' }"
                >
                    <p>Консорциум</p>
                </router-link>
                <router-link
                    style="text-decoration: none"
                    :to="{ name: 'ways' }"
                >
                    <p>Направления исследований</p>
                </router-link>
                <router-link
                    style="text-decoration: none"
                    :to="{ name: 'notFound' }"
                >
                    <p>Участники</p>
                </router-link>
                <router-link
                    style="text-decoration: none"
                    :to="{ name: 'news' }"
                >
                    <p>Новости</p>
                </router-link>
                <router-link
                    style="text-decoration: none"
                    :to="{ name: 'notFound' }"
                >
                    <span class="login">Личный кабинет</span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "headerSection",
};
</script>

<style scoped>
p, a {
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    line-height: 18px;
    color: #3f7e77;
}
p:active,
p:hover {
    color: #666;
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
    max-width: 1144px;
    align-items: center;
    position: relative;
}

/*Телефон с картинкой*/
.headerSection__text-phone {
    margin: 0 83px 0 32px;
    position: relative;
}
.headerSection__text-phone:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url("../../../assets/image/Phone.svg");
    margin-left: -29px;
    cursor: default;
}
/*Почта с картинкой*/
.headerSection__textMail {
    margin: 0 155px 0 10px;
}
.headerSection__textMail:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url("../../../assets/image/Mail.svg");
    margin-left: -28px;
    cursor: default;
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
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
}

/*Стили кнопки Input*/
.btn-research {
    background-image: url("../../../assets/image/Research.svg");
    width: 20px;
    height: 20px;
    border: none;
    position: absolute;
    right: 17px;
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
    padding: 16px 0 18px 1px;
    display: flex;
    text-align: center;
    margin: auto;
    max-width: 1144px;
    position: relative;
}
.headerSection__navigation p {
    margin: 0 40px 0 0;
    color: #f8f5e6;
    letter-spacing: 0.03em;
}

/*Стили Входа*/
.login {
    color: #f8f5e6;
    position: absolute;
    right: 1px;
}
.login:before {
    content: "";
    position: absolute;
    width: 21px;
    height: 25px;
    background-image: url("../../../assets/image/Lk.svg");
    right: 135px;
    top: -4px;
}
</style>
