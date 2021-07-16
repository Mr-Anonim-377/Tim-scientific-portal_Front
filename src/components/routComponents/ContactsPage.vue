// СТРАНИЦА КОНТАКТОВ

<template>
    <section class="contacts">
        <div>
            <TitleSection
                :header-visible="visibleContacts"
                :title="titleContacts"
            />
            <p class="contacts-text-phone">тел.: +7 (999) 799-02-56</p>
            <p>E-mail: future-agro.info@yandex.ru</p>

            <div class="contact-text">
                <div class="contact-text__item">
                    <h1>Порядок подачи запросов СМИ в пресс-службу:</h1>
                    <p>
                        Просьба присылать запрос на редакционном бланке СМИ за
                        подписью руководителя (главного редактора, редактора
                        отдела) с указанием даты подписания. При первом
                        обращении к запросу прикреплять копию свидетельства о
                        государственной регистрации СМИ.
                    </p>
                </div>

                <div class="contact-text__item">
                    <h1>В письме указывать следующее:</h1>
                    <ul>
                        <li>основная тема (предмет запроса)</li>
                        <li>список вопросов</li>
                        <li>
                            в случае предварительного согласования или
                            договоренности указывается сотрудник университета
                            или подразделение для организации интервью или
                            ответов на поставленные вопросы
                        </li>
                        <li>
                            контактные данные редакции и корреспондента
                            (телефон, электронный адрес)
                        </li>
                    </ul>
                </div>

                <div class="contact-text__item">
                    <p>
                        Запрос необходимо оформлять на имя Алексея
                        Константиновича Скуратова, директора Научного центра
                        мирового уровня "Агротехнологии будущего" РГАУ - МСХА
                        имени К.А. Тимирязева.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TitleSection from '../unitComponents/TitleSection';
export default {
    name: 'ContactsPage',
    components: {
        TitleSection,
    },
    data() {
        return {
            modifiers: {
                btn: [
                    'background: #F8F5E6; margin: 27px auto 0 auto; display:block; color: #3F7E77;',
                ],
            },
            visibleContacts: false,
            titleContacts: 'Пресс-служба',
            titleContactsBtn: 'Позвонить',
        };
    },
};
</script>

<style scoped>
.contact-text {
    width: 800px;
    margin: auto;
}

.contact-text h1 {
    text-align: left;
    color: white;
}

.contact-text p {
    text-align: left;
}

li {
    color: #f8f5e6;
}

.contact-text__item {
    margin: 50px 0;
}
.contacts {
    width: 100%;
    background: linear-gradient(
            0deg,
            rgba(51, 51, 51, 0.8),
            rgba(51, 51, 51, 0.8)
        ),
        url('../../assets/image/contacts/Contact.png');
    background-size: cover;
    padding: 136px 0 90px 0;
    min-height: calc(100vh - 420px);
    display: flex;
    justify-content: center;
    align-items: center;
}

p {
    ]font-family: Roboto;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #f8f5e6;
}

.contacts-text-phone {
    margin: 87px 0 25px 0;
}

.contacts-text-networks {
    font-weight: normal;
    margin: 51px 0 25px 0;
    position: relative;
}

.contacts-text-networks:before {
    content: '';
    position: absolute;
    width: 35px;
    height: 1px;
    background: #f8f5e6;
    bottom: 45px;
    left: calc(50% - 17.5px);
}

.contacts-container {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0 auto 50px auto;
}

.contacts-container img {
    max-width: 30px;
    max-height: 30px;
    margin: 0 11px;
}
</style>
