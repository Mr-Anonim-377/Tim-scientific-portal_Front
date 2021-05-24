<template>
    <!-- Форма добавления/редактирования исследования -->
    <!-- Документация по UI: https://element-plus.org/ -->
    <div v-if="loadSuccess">
        <section>
            <TitleSection :title="mode === 'create' ? 'Добавление исследования' : 'Редактирование исследования'" :headerVisible="true" />

            <el-form :model="form" class="form" :rules="rules" ref="form">
                <!-- Поле "Название исследователя" -->
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Название исследования</h1>
                        <el-form-item prop="title" required>
                            <el-input
                                type="textarea"
                                maxlength="50"
                                :autosize="{ minRows: 1, maxRows: 1 }"
                                resize="none"
                                v-model="form.title"
                                placeholder="Название исследования"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Поле "Направление исследования" -->
                <el-row :gutter="20" type="flex" justify="space-between">
                    <el-col :span="12">
                        <h1>Направление исследования</h1>
                        <el-form-item prop="research">
                            <el-select v-model="form.researchDirections" placeholder="Выберите направление исследования">
                                <el-option v-for="item in researchDirectionsList" :key="item.title" :label="item.title" :value="item.title">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <!-- Поле "Связанные исследователи" -->
                    <el-col :span="12">
                        <h1>Исследователи</h1>
                        <el-form-item prop="research">
                            <el-select v-model="form.researcher" multiple placeholder="Выберите исследователей, участвовавших в исследовании">
                                <el-option v-for="item in researcherList" :key="item.value" :label="item.value" :value="item.value"> </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Поле "Об исследовании" -->
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Об исследовании:</h1>
                        <el-form-item prop="description" required>
                            <!-- Поле текста -->
                            <el-input
                                type="tearea"
                                :autosize="true"
                                placeholder="Тело новости"
                                v-model="form.description"
                                maxlength="3600"
                                show-word-limit
                            >
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center" :gutter="20">
                    <el-col :span="12">
                        <!-- Изображения для превью -->
                        <h1>Изображение для превью</h1>
                        <el-form-item>
                            <el-upload
                                class="upload-demo"
                                action="https://api.imgbb.com/1/upload"
                                multiple
                                :data="requestData"
                                list-type="picture"
                                :limit="1"
                                :file-list="previewImages.preview"
                                name="image"
                                :model="form.preview"
                                :on-success="successLoadHookPreview"
                                :on-remove="removeImageHookPreview"
                            >
                                <el-button size="middle" type="success" plain>Выберите изображение</el-button>
                                <template #tip>
                                    <div class="el-upload__tip">1 изображение для отображения в списке исследований</div>
                                    <div class="el-upload__tip">jpg/png файл размером не более 500кб</div>
                                </template>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <!-- Изображения для слайдера -->
                        <h1>Изображения для слайдера</h1>
                        <el-upload
                            class="upload-demo"
                            action="https://api.imgbb.com/1/upload"
                            multiple
                            :data="requestData"
                            list-type="picture"
                            :limit="7"
                            :file-list="sliderFileList"
                            :v-model="form.sliderFileList"
                            :before-upload="beforeUploadHook"
                            :on-success="successLoadHookSlider"
                            :on-remove="removeImageHookSlider"
                            name="image"
                        >
                            <el-button size="middle" type="success" plain>Выберите изображения</el-button>
                            <template #tip>
                                <div class="el-upload__tip">До 7 изображений для отображения в слайдере</div>
                                <div class="el-upload__tip">jpg/png файлы размером не более 500кб</div>
                            </template>
                        </el-upload>
                    </el-col>
                </el-row>

                <!-- Скрытый form-item для валидации загрузки превью -->
                <el-form-item class="hiddenFormItem" prop="avatar">
                    <el-input class="hiddenInput" v-model="form.preview"></el-input>
                </el-form-item>

                <!-- Поле "Фото профиля" -->
                <el-row type="flex" justify="center"> </el-row>

                <div class="submitWrapper">
                    <el-form-item>
                        <el-button @click="onSubmit('form')" class="submitButton" type="primary">{{
                            mode === 'create' ? 'Добавить исследование' : 'Редактировать исследование'
                        }}</el-button>
                    </el-form-item>
                </div>
            </el-form>
        </section>
    </div>
    <div v-else>
        <Preloader />
    </div>
</template>
<script>
    /*
        Пропсы:
         * TODO Направление исследования - селект
         * TODO Превью фото - загрузка изображений
         * TODO Название
         * Об исследовании - текстовое поле
         * Список исследователей
         * TODO Слайдер - загрузка изображений

         Валидация:
         TODO Написать валидацию для каждого пропса

         Получение данных об исследовании:
         ! TODO Парс данных при редактировании

         Финальные штрихи:
         TODO Редирект

         Методы:
         ! Добавление, редактирование
    */

    import TitleSection from '../../unitComponents/TitleSection';
    import mixin from '../../../utils/methodsMixin';
    import Preloader from './../../unitComponents/CommonElements/Preloader';

    export default {
        name: 'research',
        components: {
            TitleSection,
            Preloader,
        },
        props: {
            mode: String,
            entityId: String,
        },
        mixins: [mixin],
        data() {
            return {
                loadSuccess: false,
                form: {
                    title: '',
                    researcher: [],
                    description: '',
                    preview: '',
                    slider: [],
                    researchDirections: [],
                },
                rules: {
                    title: [{ required: true, message: "Пожалуйста, заполните поле 'Название исследования'", trigger: 'blur' }],
                    /* TODO Валидация селекта */
                    researcher: [],
                    description: [
                        { required: true, message: "Пожалуйста, заполните поле 'Об исследовании'", trigger: 'blur' },
                        { min: 30, message: 'Текст исслдеования должен содержать минимум 30 символов' },
                    ],
                    preview: [
                        {
                            required: true,
                            message: 'Для корректного отображения в списке исследований необходимо загрузить превью изображение',
                            trigger: 'blur',
                        },
                    ],
                    /* TODO Валидация слайдера (если нужна) */
                    slider: [],
                    /* TODO Валидация селекта */
                    researchDirections: [],
                },

                researcherList: [
                    { value: 'Исследователь 1' },
                    { value: 'Исследователь 2' },
                    { value: 'Исследователь 3' },
                    { value: 'Исследователь 4' },
                    { value: 'Исследователь 5' },
                ],

                researchDirectionsList: [
                    { title: 'Направление исследования 1' },
                    { title: 'Направление исследования 2' },
                    { title: 'Направление исследования 3' },
                    { title: 'Направление исследования 4' },
                    { title: 'Направление исследования 5' },
                ],

                progressList: [],

                previewImages: {
                    preview: [],
                    slider: [],
                },

                /* При загрузке изображений отправляем api keyimgB`B
                   Если что-то пойдет не так, получить новый можно тут:
                   https://api.imgbb.com/ */
                requestData: {
                    key: '2ca9c35e0d42896ec7e746b5daf2c924',
                },
            };
        },

        methods: {
            /**
             * Хук валидации перед загрузкой изображения
             * @param {object} file - объект с файлом
             * @returns {boolean} validFormat && validSize
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

            /* Хук успешной загрузки изображения (превью)
               При успешной загрузке заполняем скрытый инпут урлом из ответа */
            successLoadHookPreview(res) {
                this.form.preview = res.data.url;
            },

            /* Хук удаления изображения (превью) */
            removeImageHookPreview() {
                this.form.preview = '';
            },

            /* Хук успешной загрузки изображения (инпут слайдера)
               При успешной загрузке заполняем скрытый инпут урлом из ответа */
            successLoadHookSlider(res, file, fileList) {
                this.form.slider = fileList.map((image) => {
                    return { name: image.name, url: image.response ? image.response.data.url : image.url };
                });
            },
            /* Хук удаления изображения (инпут слайдера) */
            removeImageHookSlider(res, fileList) {
                this.form.slider = fileList;
            },

            onSubmit(form) {
                console.log(this.$refs[form]);
            },
        },
        async mounted() {
            /*
            if (this.mode === 'edit') {

                TODO Проще получать готовый json с бэка

                await this.getModulesTest('', this.entityId);
                await this.getModulesTest('WAYS');

                this.form.title = this.BANNER.NAME[0].title;
                this.form.description = this.BANNER.TEXT[0].text;
                this.form.researcher = this.RESEARCH_MEMBER_ARRAY.RESEARCH_MEMBER.map((member) => {
                    return {
                        value: member.title,
                        _pageLink: member._pageLink,
                    };
                });
                this.researchDirectionsList = this.WAYS_ARRAY.WAYS_ITEM.map((direction) => {
                    return {
                        title: direction.title,
                    };
                });

                this.previewImages.slider = this.RESEARCH_IMAGE_SLIDER.IMAGE.map((img) => img.image);
            }
                */

            setTimeout(() => {
                this.loadSuccess = true;
            }, 500);
        },
    };
</script>
<style scoped>
    .formResearcher__progressSelect.el-select {
        width: 100%;
    }

    .el-tag {
        width: 100%;
    }

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

    .hiddenInput {
        display: none;
        margin: 0;
    }

    .hiddenFormItem {
        margin: 0;
    }
    .submitWrapper {
        margin: 30px;
        display: flex;
        justify-content: center;
    }
</style>
