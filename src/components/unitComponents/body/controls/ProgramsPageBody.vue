<template>
    <SectionHeader title="Агротехнологии будущего Направления программы"/>
    <div class="container">
        <ProgramDirections
                v-for="direction in directions"
                :key="direction.id"
                :direction_program="direction"
        />
    </div>
</template>

<script>
    import SectionHeader from "./../components/SectionHeader"
    import ProgramDirections from "../components/ProgramDirections";
    export default {
        name: "ProgramsPageBody",
        components:{
            ProgramDirections,
            SectionHeader
        },
        data() {
            return {
                directions: [
                    {
                        Id:'1',
                        text:'Агробиотехнологии управления плодородием почв  России в интересах высокопродуктивного земледелия минимального экологического риска',
                        img:'https://imgs.mongabay.com/wp-content/uploads/sites/20/2015/10/03143956/featured-Agro_PR_Trigo_em_Guarapuava.jpg'
                    },
                    {
                        Id:'2',
                        text:'Ускоренная селекция высокоурожайных и устойчивых сортов и гибридов растений, обладающих заданными характеристиками качества',
                        img:'https://agroexpert.ua/wp-content/uploads/2020/02/ya-16063-16697.jpg'
                    },
                    {
                        Id:'3',
                        text:'Новые цифровые технологии в сельском хозяйстве',
                        img:'https://businessman.ru/static/img/n/1/3/9/8/2/1/4/i/1398214.jpg'
                    },
                    {
                        Id:'4',
                        text:'Технологии переработки и валоризации малоценного сельскохозяйственного сырья и отходов агропромышленного комплекса',
                        img:'https://ssm22.ru/wp-content/uploads/2017/03/john-deere-tractor-farm-industrial-farming-1jdeere-construction-wallpaper-13.jpg'
                    },
                    {
                        Id:'5',
                        text:'Создание безопасных, качественных, функциональных кормов и продуктов питания',
                        img:'https://navitrinu.ru/uploads/images/tb/539760_f_483_539760.png'
                    }
                ]
            }
        }
    }
</script>

<style>

</style>