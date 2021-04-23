<template>
    <!-- Форма добавления/редактирования новости -->
    <!-- UI: https://element-plus.org/ -->
    <section>
        <TitleSection title="Форма редактирования сущности" :headerVisible="true" />

        <div class="form">
            <!-- Grid разметка -->

            <el-row type="flex" justify="center">
                <el-col>
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
            </el-row>
            <el-row :gutter="20" type="flex" justify="space-between">
                <!-- Название новости -->
                <el-col :span="12">
                    <!-- Изображения -->
                    <h1>Изображения для слайдера</h1>
                    <!-- Временно попробуем грузить через API IMGbb -->
                    <!-- https://api.imgbb.com/ -->
                    <el-upload
                        class="upload-demo"
                        action="https://api.imgbb.com/1/upload"
                        multiple
                        :data="requestData"
                        list-type="picture"
                        :limit="3"
                        :file-list="sliderFileList"
                        name="image"
                    >
                        <el-button size="small" type="primary">Выберите изображения</el-button>
                        <template #tip>
                            <div class="el-upload__tip">jpg/png файлы размером не более 500кб</div>
                        </template>
                    </el-upload>
                </el-col>
                <el-col :span="12">
                    <!-- Изображения -->
                    <h1>Изображения для превью</h1>
                    <el-upload
                        class="upload-demo"
                        action="https://api.imgbb.com/1/upload"
                        multiple
                        :data="requestData"
                        list-type="picture"
                        :limit="1"
                        :file-list="previewfileList"
                        name="image"
                    >
                        <el-button size="small" type="primary">Выберите изображение</el-button>
                        <template #tip>
                            <div class="el-upload__tip">jpg/png файл размером не более 500кб</div>
                        </template>
                    </el-upload>
                </el-col>
            </el-row>
        </div>

        <div class="form">
            <!-- Текст -->
            <h1>Тело новости</h1>
            <el-input @input="clg" type="textarea" :rows="5" placeholder="Тело новости" v-model="text" maxlength="200" show-word-limit> </el-input>
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
                /* Название новости */
                title: '',

                /* Дата загрузки новости */
                date: '',

                /* Текст новости */
                text: '',

                /*  При загрузке изображений отправляем api key imgBB
                    Если что-то пойдет не так, получить новый можно тут:
                    https://api.imgbb.com/ */
                requestData: {
                    key: '2ca9c35e0d42896ec7e746b5daf2c924',
                },
            };
        },
    };
</script>

<style scoped>
    section {
        width: 600px;
        margin: 50px auto;
        min-height: calc(100vh - 275px);
    }

    .form h1 {
        color: #3f7e77;
        text-align: center;
        font-size: 20px;
    }

    .upload-demo {
        text-align: center;
    }

    .el-row {
        margin: 40px 0;
    }
</style>
