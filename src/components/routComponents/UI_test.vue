<template>
    <!-- Форма добавления/редактирования новости -->
    <!-- UI: https://element-plus.org/ -->
    <section>
        <!-- <TitleSection title="Форма редактирования сущности" :headerVisible="true" /> -->
        <TitleSection :title="mode === 'create' ? 'Добавление новости' : 'Редактирование новости'" :headerVisible="true" />

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
                        :v-model="sliderFileList"
                        :before-upload="beforeUploadHook"
                        name="image"
                    >
                        <el-button size="middle" type="success" plain>Выберите изображения</el-button>
                        <template #tip>
                            <div class="el-upload__tip">До 7 изображений для отображения в слайдере</div>
                            <div class="el-upload__tip">jpg/png файлы размером не более 500кб</div>
                        </template>
                    </el-upload>
                </el-col>
                <el-col :span="12">
                    <!-- Изображения -->
                    <h1>Изображение для превью</h1>
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
                        <el-button size="middle" type="success" plain>Выберите изображение</el-button>
                        <template #tip>
                            <div class="el-upload__tip">1 изображение для отображения в ленте новостей</div>
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
            /**
             * Обработчик клика: меняет индекс и направление анимации в зависимости от аргумента
             * @param {object} file - принимает объект с файлом
             * @returns {boolean} validFormat и validSize
             *
             * Если метод возвращает false - выводится сообщение о соответствующей ошибке
             */
            beforeUploadHook(file) {
                const validFormat = file.type === 'image/jpeg' || file.type === 'image/png';
                const validSize = file.size <= 500000;

                validFormat || this.$message.error('Изображение должно иметь формат JPG или PNG');
                validSize || this.$message.error('Изображение должно иметь вес не более 500кб');

                return validFormat && validSize;
            },
        },

        data() {
            return {
                /* 
                mode -> режим рендера формы
                    create для создания
                    edit для редактирования */
                mode: 'create',

                /* Название новости */
                title: '',

                /* Дата загрузки новости */
                date: '',

                /* Текст новости */
                text: '',

                /* УЖЕ загруженные изображения для превью главной страницы */
                previewfileList: [],

                /* УЖЕ загруженные изображения для слайдера страницы новостей */
                sliderFileList: [],

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

    section * {
        font-family: Arial !important;
    }

    .form h1 {
        color: #3f7e77;
        text-align: start;
        font-size: 20px;
    }

    .upload-demo {
        text-align: start;
    }

    .el-upload {
        width: 100% !important;
    }

    .el-row {
        margin: 40px 0;
    }

    .el-upload--picture {
        width: 100%;
    }
</style>
