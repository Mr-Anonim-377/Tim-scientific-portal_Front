<template>
    <SectionHeader title="Участники проекта"/>
    <div class="container">
        <section class="institutes">
           <InstitutesFiltersItems
                   v-for="filtersItem in filters"
                    :key="filtersItem.id"
                    :filtersItem="filtersItem"
           />
        </section>
        <InstitutesProfiles
                v-for="instituteItems in institute"
                :key="instituteItems.id"
                :instituteItems="instituteItems"
        />
    </div>
</template>

<script>
    import SectionHeader from "./../components/SectionHeader"
    import InstitutesFiltersItems from "../components/Profiles/InstitutesFiltersItems";
    import InstitutesProfiles from "../components/Profiles/InstitutesProfiles";
    export default {
        name: "ProfilesPageBody",
        components: {
            SectionHeader,
            InstitutesProfiles,
            InstitutesFiltersItems
        },
        data() {
            return {
                filters: [
                    {
                        id: '1',
                        img: 'https://москва-наука.рф/wp-content/uploads/2020/02/rgay-e1581110188634-480x480.jpg'
                    },
                    {
                        id: '2',
                        img: 'https://assets.vuzopoisk.ru/images/logo/wQEEL1B7.jpg'
                    },
                    {
                        id: '3',
                        img: 'https://konspekta.net/lektsianew/baza9/891858974306.files/image002.jpg'
                    },
                    {
                        id: '4',
                        img: 'https://i.ytimg.com/vi/_LXoYHxOU04/maxresdefault.jpg'
                    },
                    {
                        id: '5',
                        img: 'https://www.bpro13.ru/upload/iblock/62a/62aa1bad836a7a7f465c9a137f4c3b85.png'
                    }
                ],
                institute: [
                    {
                        title: 'РГАУ-МСХА им. Тимирязева',
                        profiles: [{
                            Id: '1',
                            name: 'Гарри',
                            surname: 'Поттер',
                            patronymic: 'Михайлович',
                            img: 'https://st.kp.yandex.net/im/kadr/1/4/4/kinopoisk.ru-Harry-Potter-and-the-Goblet-of-Fire-1442575.jpg',
                            logo: 'https://png.rinvik.ru/files/Bolshaya-svyazka-bananov-vid-sboku.png',
                            project: [
                                'Название проекта 1',
                                'Название проекта 2',
                                'Название проекта 3',
                                'Название проекта 4',
                                'Название проекта 5',
                                'Название проекта 6',
                                'Название проекта 5',
                                'Название проекта 6',
                            ]
                        },
                            {
                                Id: '2',
                                name: 'Том',
                                surname: 'Марволо',
                                patronymic: 'Реддл',
                                img: 'https://media.harrypotterfanzone.com/teenage-tom-riddle-half-blood-prince-portrait-2-1050x0-c-default.jpg',
                                institute: 'МииГаик',
                                logo: 'https://www.clipartmax.com/png/middle/90-900819_gryffindor-printable-by-lost-in-hogwarts-harry-potter-printable-house-crests.png',
                                project: [
                                    'Название проекта 1',
                                    'Название проекта 2',
                                    'Название проекта 3',
                                    'Название проекта 4',
                                    'Название проекта 5',
                                    'Название проекта 6'
                                ]
                            },
                            {
                                Id: '3',
                                name: 'Максим',
                                surname: 'Горький',
                                patronymic: 'Анатольевич',
                                img: 'https://avatars.mds.yandex.net/get-zen_doc/1601070/pub_5e21dc7f0ce57b00ae1a5472_5e21de105ba2b500c490e551/scale_1200',
                                logo: 'https://www.clipartmax.com/png/middle/90-900819_gryffindor-printable-by-lost-in-hogwarts-harry-potter-printable-house-crests.png',
                                project: [
                                    'Название проекта 1',
                                    'Название проекта 2',
                                ]
                            },
                            {
                                Id: '4',
                                name: 'Сергей',
                                surname: 'Крылов',
                                patronymic: 'Александрович',
                                img: 'https://demiart.ru/forum/uploads21/post-104589-1550947531-5c7194cba8fa0.jpg',
                                logo: 'https://www.clipartmax.com/png/middle/90-900819_gryffindor-printable-by-lost-in-hogwarts-harry-potter-printable-house-crests.png',
                                project: [
                                    'Название проекта 1',
                                ]
                            }
                        ]
                    },
                    ]
            }
        }
    }
</script>

<style  scoped>
    .institutes{
        display: flex;
        flex-wrap: wrap;
        margin: 70px auto;
        width: 880px;
        align-items: center;
    }

</style>