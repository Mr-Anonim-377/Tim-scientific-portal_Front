<template>
    <!-- Форма добавления/редактирования новости -->
    <!-- Документация по UI: https://element-plus.org/ -->
    <div v-if="loadSuccess">
        <section>
            <TitleSection :title="mode === 'create' ? 'Добавление новости' : 'Редактирование новости'" :headerVisible="true" />

            <el-form :model="form" class="form" :rules="rules" ref="form">
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Название новости</h1>
                        <el-form-item prop="title" required>
                            <el-input
                                type="textarea"
                                maxlength="250"
                                :autosize="{ minRows: 3, maxRows: 3 }"
                                show-word-limit
                                resize="none"
                                v-model="form.title"
                                placeholder="Название"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Короткое название новости</h1>
                        <el-form-item prop="shortTitle" required>
                            <el-input
                                type="textarea"
                                maxlength="70"
                                :autosize="{ minRows: 2, maxRows: 3 }"
                                show-word-limit
                                resize="none"
                                v-model="form.shortTitle"
                                placeholder="Название"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20" type="flex" justify="space-between">
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
                    <el-col :span="12">
                        <!-- Изображения -->
                        <h1>Изображение для превью</h1>
                        <el-form-item>
                            <el-upload
                                class="upload-demo"
                                action="https://api.imgbb.com/1/upload"
                                multiple
                                :data="requestData"
                                list-type="picture"
                                :limit="1"
                                :file-list="previewfileList"
                                name="image"
                                :model="form.preview"
                                :on-success="successLoadHookPreview"
                                :on-remove="removeImageHookPreview"
                            >
                                <el-button size="middle" type="success" plain>Выберите изображение</el-button>
                                <template #tip>
                                    <div class="el-upload__tip">1 изображение для отображения в ленте новостей</div>
                                    <div class="el-upload__tip">jpg/png файл размером не более 500кб</div>
                                </template>
                            </el-upload>
                        </el-form-item>

                        <!-- Скрытый form-item для валидации загрузки превью -->
                        <el-form-item class="hiddenFormItem" prop="preview">
                            <el-input class="hiddenInput" v-model="form.preview"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <div class="form">
                    <el-form-item prop="text" required>
                        <!-- Поле текста -->
                        <h1>Тело новости</h1>
                        <el-input type="textarea" :autosize="true" placeholder="Тело новости" v-model="form.text" maxlength="3600" show-word-limit>
                        </el-input>
                    </el-form-item>
                </div>

                <div class="submitWrapper">
                    <el-form-item>
                        <el-button @click="onSubmit('form')" class="submitButton" type="primary">{{
                            mode === 'create' ? 'Добавить новость' : 'Редактировать новость'
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
    import testMixin from '../../utils/methodsMixin.js';
    import TitleSection from '../unitComponents/TitleSection.vue';
    import Preloader from './../unitComponents/CommonElements/Preloader';
    import axios from 'axios';

    export default {
        name: 'UI test',
        components: {
            TitleSection,
            Preloader,
        },
        mixins: [testMixin],
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

            /* Хук успешной загрузки изображения (инпут превью)
               При успешной загрузке заполняем скрытый инпут урлом из ответа */
            successLoadHookPreview(res) {
                this.form.preview = res.data.url;
            },

            /* Хук успешной загрузки изображения (инпут слайдера)
               При успешной загрузке заполняем скрытый инпут урлом из ответа */
            successLoadHookSlider(res, file, fileList) {
                this.form.slider = fileList;
                console.log(this.form.slider);
            },

            /* Хук удаления изображения (инпут превью) */
            removeImageHookPreview() {
                this.form.preview = '';
            },

            /* Хук удаления изображения (инпут слайдера) */
            removeImageHookSlider(res, fileList) {
                this.form.slider = fileList;
                console.log(this.form.slider);
            },

            /* Функция возвращает текущее время */
            getCurrentDate() {
                let today = new Date();
                let dd = String(today.getDate()).padStart(2, '0');
                let mm = String(today.getMonth() + 1).padStart(2, '0');
                let yyyy = today.getFullYear();
                return dd + '.' + mm + '.' + yyyy;
            },

            /**
             * Формирование тела запроса из this.form
             */
            getRequestData() {
                /* Переменная для транформации закрытых тегов */
                let start = true;
                return {
                    name: this.form.title,
                    previewImageLink: this.form.preview,
                    imageLinks: this.form.slider.map((image) => image.response.data.url),
                    text: this.form.text
                        .replace(/\*\*/g, () => {
                            start = !start;
                            if (!start) return '<b>';
                            return '</b>';
                        })
                        .replace(/>>>/g, '<ul>')
                        .replace(/<<</g, '</ul>')
                        .replace(/>>/g, '<li>')
                        .replace(/<</g, '</li>')
                        .replace(/\n/g, '<br>'),
                    previewText: this.form.shortTitle,
                    date: this.getCurrentDate(),
                    // TODO
                    tag: 'РГАУ-МСХА',
                };
            },

            /**
             * Метод добавления новости
             * @param {object} data - тело запроса на создание новости
             */
            addNews(data) {
                console.log(data);
                axios({
                    method: 'POST',
                    url: 'http://localhost:1024/user/create/news',
                    data: data,
                }).then((response) => {
                    console.log(response.data);
                });
            },

            /**
             * Метод обновления новости
             * @param {object} data - тело запроса на создание новости
             */
            updateNews(data) {
                console.log(data);
                axios({
                    method: 'POST',
                    url: 'http://localhost:1024/user/create/news',
                    data: data,
                }).then((response) => {
                    console.log(response.data);
                });
            },

            /* Метод сабмита формы -> отправляет запросы при пройденной валидации */
            onSubmit(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        let data = this.getRequestData();
                        await this.addNews(data);
                        window.location.href = 'http://localhost:1024/AdminNewsPage';
                    } else {
                        return false;
                    }
                });
            },

            /* Метод трансофрмации HTML в строку */
            transformHTMLtoString(string) {
                return (
                    string
                        /* Обработка <p> */
                        .split('</p>')
                        .map((i) => i.replace('<p>', '').trim())
                        /* Обработка <br> */
                        .join('<br>')
                        .replace(/<b>|<\/b>|<strong>|<\/strong>/g, '**')
                        /* Обработка списков */
                        .replace(/<ul>/g, '\n>>>\n')
                        .replace(/<\/ul>/g, '\n<<<\n')
                        .replace(/<li>/g, '\n>>')
                        .replace(/<\/li>/g, '<<')
                );
            },
        },
        props: {
            /* mode -> режим рендера формы:
                               create для создания
                               edit для редактирования */
            mode: String,
            entityId: String,
        },
        data() {
            return {
                loadSuccess: false,

                /* Поля формы */
                form: {
                    title: '',
                    shortTitle: '',
                    text: [],
                    preview: '',
                    slider: [],
                },

                /* Правила валидации для формы */
                rules: {
                    title: [
                        { required: true, message: "Пожалуйста, заполните поле 'Название новости'", trigger: 'blur' },
                        { min: 10, message: 'Название должно содержать минимум 10 символов' },
                    ],
                    shortTitle: [
                        { required: true, message: "Пожалуйста, заполните поле 'Короткое название новости'", trigger: 'blur' },
                        { min: 10, message: 'Название должно содержать минимум 10 символов' },
                    ],
                    text: [
                        { required: true, message: "Пожалуйста, заполните поле 'Тело новости'", trigger: 'blur' },
                        { min: 10, message: 'Текст новости должен содержать минимум 10 символов' },
                    ],
                    preview: [
                        {
                            required: true,
                            message: 'Для корректного отображения на главной странице необходимо загрузить превью изображение',
                            trigger: 'blur',
                        },
                    ],
                },

                /* УЖЕ загруженные изображения для превью главной страницы */
                previewfileList: [],

                /* УЖЕ загруженные изображения для слайдера страницы новостей */
                sliderFileList: [],

                /* Загружаемые изображения */
                loadedImages: {
                    preview: '',
                    slider: [],
                },

                /* При загрузке изображений отправляем api key imgBB
                   Если что-то пойдет не так, получить новый можно тут:
                   https://api.imgbb.com/ */
                requestData: {
                    key: '2ca9c35e0d42896ec7e746b5daf2c924',
                },
            };
        },

        async mounted() {
            /* Если форма открыта в режиме редактирования - загружаем данные по id новости */
            if (this.mode === 'edit') {
                await this.getModulesTest('', this.entityId);
                await this.getModulesTest('NEWS_PAGE');
                //eslint-disable-next-line
                const self = this;
                //eslint-disable-next-line
                debugger;

                /* Заполняем инпуты */
                this.form.text = this.transformHTMLtoString(this.NEWS_TEXT.TEXT[0].text);
                this.form.title = this.NEWS_TITLE.TITLE[0].title;
                this.sliderFileList = this.NEWS_IMAGE_CAROUSEL.IMAGE.map((image, i) => {
                    return {
                        name: 'Изображение ' + (i + 1),
                        url: image?.image,
                    };
                });
                this.form.slider = this.sliderFileList;

                this.form.shortTitle = this.NEWS_SLIDER.NEWS_ITEM.filter((news) => news._pageLink === this.entityId)[0]?.title;
                this.form.shortTitle = this.NEWS_SLIDER.NEWS_ITEM.filter((news) => news._pageLink === this.entityId)[0]?.title;
                this.previewfileList = [
                    {
                        name: 'Превью-изображение',
                        url: this.NEWS_SLIDER.NEWS_ITEM.filter((news) => news._pageLink === this.entityId)[0]?.image,
                    },
                ];
                this.form.preview = this.previewfileList;
            }

            this.loadSuccess = true;
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

    .el-upload__tip {
        line-height: normal;
    }

    .el-upload {
        width: 100% !important;
    }

    .el-upload--picture {
        width: 100%;
    }

    .submitWrapper {
        margin: 30px;
        display: flex;
        justify-content: center;
    }

    .hiddenInput {
        display: none;
        margin: 0;
    }

    .hiddenFormItem {
        margin: 0;
    }
</style>
