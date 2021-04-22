<template>
    <!-- test -->
    <section>
        <TitleSection title="Форма редактирования сущности" :headerVisible="true" />

        <div class="form">
            <!-- Grid разметка -->
            <el-row :gutter="20" type="flex" justify="space-between">
                <el-col :span="10">
                    <!-- Название новости -->
                    <h1>Название новости</h1>
                    <el-input
                        type="textarea"
                        maxlength="70"
                        :autosize="{ minRows: 3, maxRows: 3 }"
                        show-word-limit
                        resize="none"
                        v-model="title"
                        placeholder="Название"
                    ></el-input>
                </el-col>
                <el-col :span="10">
                    <h1>Изображения</h1>
                </el-col>
            </el-row>
        </div>

        <div class="form">
            <!-- Дата -->

            <!-- <el-date-picker v-model="date" type="date" placeholder="Pick a day"> </el-date-picker> -->

            <!-- Изображения -->

            <!-- Текст -->
            <h1>Тело новости</h1>
            <el-input @input="clg" type="textarea" :rows="5" placeholder="Тело новости" v-model="text" maxlength="200" show-word-limit> </el-input>

            <!-- Превью -->
        </div>
    </section>
</template>

<script>
    import TitleSection from '../unitComponents/TitleSection.vue';

    export default {
        name: 'UI test',
        components: {
            TitleSection,
        },

        methods: {
            clg() {
                console.log(this.text.split('\n'));
            },
        },

        data() {
            return {
                title: '',
                date: '',
                text: '',
            };
        },
    };
</script>

<style scoped>
    section {
        width: 800px;
        margin: 100px auto;
        min-height: calc(100vh - 275px);
    }

    .form h1 {
        color: #3f7e77;
        text-align: center;
        font-size: 20px;
    }
</style>
