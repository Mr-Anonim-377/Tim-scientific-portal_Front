<template>
    <section class="institutes-name">
        <div class="institutes-name__polygon-left">
            <p>{{instituteItems.title}}</p>
        </div>
        <div class="institutes-name__polygon-right"></div>
    </section>
    <section class="profile">
        <SectionProfile v-for="profiles in instituteItems.profiles"
                        :key="profiles.id"
                        :profiles="profiles"
        />
    </section>
</template>

<script>
    import SectionProfile from "../../components/Profiles/SectionProfile";

    export default {
        name: "SectionInstitutesProfiles",
        components:{
            SectionProfile
        },
        props:{
            instituteItems:[]
        },
    }
</script>

<style  scoped>
    .profile{
        display: flex;
        flex-wrap: wrap;
        margin: 10px  auto;
        width: 1000px;
        align-items: center;

    }

    .institutes-name{
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto 60px auto;
        width: 975px;
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