<template>
    <SectionHeader title="Участники проекта"/>
    <div class="container">
        <section class="institutes">
           <ProfileInstitutes
                   v-for="institute in institutes"
                    :key="institute.id"
                    :institute="institute"
           />
        </section>
        <section class="institutes-name">
            <div class="institutes-name__polygon-left">
                <p>РГАУ-МСХА им. Тимирязева</p>
            </div>
            <div class="institutes-name__polygon-right"></div>
        </section>
        <section class="profile">
           <SectionProfile v-for="profile in profiles"
                           :key="profile.id"
                           :profile="profile"
           />
        </section>
    </div>
</template>

<script>
    import SectionProfile from "../components/Profiles/SectionProfile";
    import ProfileInstitutes from "../components/Profiles/ProfileInstitutes";
    export default {
        name: "ProfilesPageBody",
        components:{
            ProfileInstitutes,
            SectionProfile
        },
        data() {
            return {
                institutes:[
                    {
                    id:'1',
                    img:'https://москва-наука.рф/wp-content/uploads/2020/02/rgay-e1581110188634-480x480.jpg'
                },
                    {
                        id:'2',
                        img:'https://assets.vuzopoisk.ru/images/logo/wQEEL1B7.jpg'
                    },
                    {
                        id:'3',
                        img:'https://konspekta.net/lektsianew/baza9/891858974306.files/image002.jpg'
                    },
                    {
                        id:'4',
                        img:'https://i.ytimg.com/vi/_LXoYHxOU04/maxresdefault.jpg'
                    },
                    {
                        id:'5',
                        img:'https://www.bpro13.ru/upload/iblock/62a/62aa1bad836a7a7f465c9a137f4c3b85.png'
                    }
                ],
                profiles: [
                    {
                        Id:'1',
                        name:'Гарри',
                        surname:'Поттер',
                        patronymic:'Михайлович',
                        img:'https://st.kp.yandex.net/im/kadr/1/4/4/kinopoisk.ru-Harry-Potter-and-the-Goblet-of-Fire-1442575.jpg',
                        institute:'РГАУ-МСХА им. Тимирязева',
                        logo:'https://png.rinvik.ru/files/Bolshaya-svyazka-bananov-vid-sboku.png',
                        project:[
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
                        Id:'2',
                        name:'Том',
                        surname:'Марволо',
                        patronymic:'Реддл',
                        img:'https://media.harrypotterfanzone.com/teenage-tom-riddle-half-blood-prince-portrait-2-1050x0-c-default.jpg',
                        institute:'МииГаик',
                        logo:'https://www.clipartmax.com/png/middle/90-900819_gryffindor-printable-by-lost-in-hogwarts-harry-potter-printable-house-crests.png',
                        project:[
                            'Название проекта 1',
                            'Название проекта 2',
                            'Название проекта 3',
                            'Название проекта 4',
                            'Название проекта 5',
                            'Название проекта 6'
                        ]
                    },
                    {
                        Id:'3',
                        name:'Максим',
                        surname:'Горький',
                        patronymic:'Анатольевич',
                        img:'https://avatars.mds.yandex.net/get-zen_doc/1601070/pub_5e21dc7f0ce57b00ae1a5472_5e21de105ba2b500c490e551/scale_1200',
                        logo:'https://www.clipartmax.com/png/middle/90-900819_gryffindor-printable-by-lost-in-hogwarts-harry-potter-printable-house-crests.png',
                        project:[
                            'Название проекта 1',
                            'Название проекта 2',
                        ]
                    },
                    {
                        Id:'4',
                        name:'Сергей',
                        surname:'Крылов',
                        patronymic:'Александрович',
                        img:'https://demiart.ru/forum/uploads21/post-104589-1550947531-5c7194cba8fa0.jpg',
                        logo:'https://www.clipartmax.com/png/middle/90-900819_gryffindor-printable-by-lost-in-hogwarts-harry-potter-printable-house-crests.png',
                        project:[
                            'Название проекта 1',
                        ]
                    }
                ]
            }
        }
    }
</script>

<style>
    .institutes{
        display: flex;
        flex-wrap: wrap;
        margin: 100px auto 80px auto;
        width: 880px;
        align-items: center;
    }

    .institutes-name{
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto 60px auto;
        width: 975px;
        align-items: center;
    }

    .profile{
        display: flex;
        flex-wrap: wrap;
        margin: 10px  auto;
        width: 1000px;
        align-items: center;

    }

    .institutes-name__polygon-left{
        width: 731px;
        height: 196px;
        background: #6BAA12;
        clip-path:polygon(0px 0px, 834px 0px, 834px 132px, 514px 132px, 388px 302px, 0px 230px);
        font-size: 38px;
        color: #FFFFFF;
        text-align: right;
        padding: 0 28px;
    }

    .institutes-name__polygon-right{
        width: 541px;
        height: 196px;
        background: #2F653B;
        clip-path: polygon(315px 143px, 315px 0px, 537px -45px, 600px 600px, -122px 427px, 87px 143px);
        margin-left: auto;
        margin-top: -196px;
    }
</style>