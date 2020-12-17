<template>
    <footer class="footerSection">
        <!--            Логотип и политика конф-->
        <div class="footerLogo-container">
            <img src="../../../assets/image/Logo.svg" />
            <p>
                ©2021 <q>Агроконсорциум</q> <br />Научный центр мирового уровня
                <br />
                <q>Агротехнологии будущего</q>
            </p>
            <span><u>Политика конфиденциальности</u></span>
        </div>
        <!--            Навигация-->
        <div class="footerNav-container__left">
            <router-link
                style="text-decoration: none"
                :to="{ name: 'Consortium' }"
            >
                <p>Консорциум</p>
            </router-link>
            <router-link style="text-decoration: none" :to="{ name: 'ways' }">
                <p>Направления исследований</p>
            </router-link>
            <p>Участники</p>
        </div>
        <div class="footerNav-container__right">
            <router-link
                    style="text-decoration: none"
                    :to="{ name: 'contacts' }"
            >
             <p>Контакты</p>
            </router-link>
            <router-link style="text-decoration: none" :to="{ name: 'news' }">
                <p>Новости</p>
            </router-link>
            <p>Личный кабинет</p>
        </div>

        <!--            Контакты-->
        <div class="footerContact-container">
            <p>E-mail: agrocons@gmail.com</p>
            <p class="footerContact__text">+7 (978) 645-25-13</p>
            <p style="cursor: default">Следите за нами:</p>
            <div class="footerContact__networks">
                <img src="../../../assets/image/VK.svg" />
                <img src="../../../assets/image/faceBook.svg" />
                <img src="../../../assets/image/Instagram.svg" />
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterNow",
};
</script>

<style scoped>
span,
p {
    cursor: pointer;
    font-size: 15px;
    color: #f8f5e6;
    line-height: 17px;
}

.footerSection {
    height: 276px;
    display: flex;
    justify-content: center;
    min-width: 1366px;
    width: 100%;
    background: #3f7e77;
    padding: 50px 0;
    position: relative;
}
.footerSection:before {
    content: "";
    position: absolute;
    background-image: url("../../../assets/image/lineFooter.svg");
    width: 560px;
    height: 10px;
    bottom: 51px;
    margin-left: 19px;
}

/*ЛОготип и политика конф*/
.footerLogo-container {
    width: 230px;
    margin-left: 62px;
}
.footerLogo-container img {
    width: 74px;
    height: 85px;
}
.footerLogo-container p {
    color: rgba(248, 245, 230, 0.5);
    margin: 17px 0 0 0;
    font-size: 14px;
    line-height: 18px;
    cursor: default;
}

/* Навигация*/
.footerNav-container__left p,
.footerNav-container__right p {
    cursor: pointer;
    color: #f8f5e6;
    line-height: 29px;
}
.footerNav-container__left {
    margin: -17px 53px 0 66px;
}
.footerNav-container__right {
    margin: -17px 165px 0 61px;
}

/*контакты*/
.footerContact__text {
    font-weight: bold;
    font-size: 24px;
    position: relative;
    margin-bottom: 43px;
    letter-spacing: 0.01em;
}
.footerContact__text:before {
    content: "";
    position: absolute;
    width: 35px;
    height: 1px;
    top: 42px;
    background: #f8f5e6;
}

.footerContact-container p {
    cursor: pointer;
    color: #f8f5e6;
    line-height: 22px;
}
.footerContact-container {
    margin: -17px 50px;
}

.footerContact__networks {
    display: flex;
    margin: 0 -11px;
}
.footerContact__networks img {
    margin: 0 11px;
}
</style>
