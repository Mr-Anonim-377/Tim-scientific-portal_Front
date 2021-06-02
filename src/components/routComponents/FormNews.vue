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
                        <h1>Короткое описание новости</h1>
                        <el-form-item prop="shortText" required>
                            <el-input
                                type="textarea"
                                maxlength="400"
                                :autosize="{ minRows: 2, maxRows: 3 }"
                                show-word-limit
                                resize="none"
                                v-model="form.shortText"
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
                    <div class="tips">
                        <p @click="showTips = !showTips">Правила форматирования текста для новости</p>

                        <el-collapse-transition>
                            <div v-if="showTips" class="tips_wrapper">
                                <p class="tips_h1">Для форматирования текста новости можно использовать:</p>
                                <div class="tips_item">
                                    <div class="tips_title">
                                        <p class="tips_h2">Жирное выделение:</p>
                                        <p class="tips_h3">** В начале и в конце выделения</p>
                                    </div>

                                    <div class="tips_example">
                                        <p class="tips_h2">Пример жирного выделения:</p>
                                        <p class="tips_h3">**Жирный текст**</p>
                                    </div>
                                </div>
                                <div class="tips_item">
                                    <div class="tips_title">
                                        <p class="tips_h2">Ненумерованные списки:</p>
                                        <p class="tips_h3">&gt;&gt;&gt; В начале списка</p>
                                        <p class="tips_h3">&lt;&lt;&lt; В конце списка</p>
                                        <p class="tips_h3">&gt;&gt; В начале элемента списка</p>
                                        <p class="tips_h3">&lt;&lt; В конце элемента списка</p>
                                    </div>

                                    <div class="tips_example">
                                        <p class="tips_h2">Пример ненумерованного списка:</p>
                                        <p>&gt;&gt;&gt;</p>
                                        <p>&gt;&gt; Элемент списка &lt;&lt;</p>
                                        <p>&gt;&gt; Элемент списка &lt;&lt;</p>

                                        <p>&lt;&lt;&lt;</p>
                                    </div>
                                </div>
                            </div>
                        </el-collapse-transition>
                    </div>
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
                this.form.slider = fileList.map((image) => {
                    return { name: image.name, url: image.response ? image.response.data.url : image.url };
                });
            },

            /* Хук удаления изображения (инпут превью) */
            removeImageHookPreview() {
                this.form.preview = '';
            },

            /* Хук удаления изображения (инпут слайдера) */
            removeImageHookSlider(res, fileList) {
                this.form.slider = fileList;
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
                    imageLinks: this.form.slider?.map((image) => image.url) || [],
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
                    previewText: this.form.shortText,
                    date: this.mode === 'create' ? this.getCurrentDate() : this.form.date,
                    tag: this.form.tag,
                };
            },

            /**
             * Метод добавления новости
             * @param {object} data - тело запроса на создание новости
             */
            addNews(data) {
                return new Promise((res) => {
                    axios({
                        method: 'POST',
                        url: '/user/create/news',
                        data: data,
                    }).then((response) => {
                        res(response.data);
                    });
                });
            },

            /**
             * Метод обновления новости
             * @param {object} data - тело запроса на создание новости
             */
            updateNews(data) {
                return new Promise((res) => {
                    axios({
                        method: 'POST',
                        url: '/user/update/news',
                        data: data,
                    }).then((response) => {
                        res(response.data);
                    });
                });
            },

            /* Метод сабмита формы -> отправляет запросы при пройденной валидации */
            onSubmit(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        let data = this.getRequestData();
                        if (this.mode === 'create') {
                            this.addNews(data).then(() => {
                                this.$router.push({ name: 'AdminNewsPage' });
                            });
                        } else {
                            data.pageId = this.entityId;
                            this.updateNews(data).then(() => {
                                this.$router.push({ name: 'AdminNewsPage' });
                            });
                        }
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
                        .replace(/<br>/g, '\n')
                        .split('</p>')
                        .map((i) => i.replace('<p>', '').trim())
                        /* Обработка <br> */
                        .join(`\n`)
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
                showTips: false,

                /* Поля формы */
                form: {
                    title: '',
                    shortText: '',
                    text: [],
                    preview: '',
                    slider: [],
                    date: '',
                },

                /* Правила валидации для формы */
                rules: {
                    title: [
                        { required: true, message: "Пожалуйста, заполните поле 'Название новости'", trigger: 'blur' },
                        { min: 10, message: 'Название должно содержать минимум 10 символов' },
                    ],
                    shortText: [
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

        created() {
            /* Проверка авторизации */
            this.authCheck().then((res) => {
                this.form.tag = res.data;
            });
        },

        async mounted() {
            /*
                TODO Переименовать компонент
                TODO Вынести основные методы в отдельный подключаемый миксин/объект
                TODO Заменить название инпута после ответа ребят
             */

            /* Если форма открыта в режиме редактирования - загружаем данные по id новости */
            if (this.mode === 'edit') {
                await this.getModulesTest('', this.entityId);
                await this.getModulesTest('NEWS_PAGE');

                /* Заполняем инпуты */
                this.form.text = this.transformHTMLtoString(this.NEWS_TEXT.TEXT[0].text);
                this.form.title = this.NEWS_TITLE.TITLE[0].title;
                this.sliderFileList = this.NEWS_IMAGE_CAROUSEL?.IMAGE?.map((image, i) => {
                    return {
                        name: 'Изображение ' + (i + 1),
                        url: image?.image,
                    };
                });
                this.form.slider = this.sliderFileList;

                this.form.shortText = this.NEWS_SLIDER.NEWS_ITEM.filter((news) => news._pageLink === this.entityId)[0]?.text;
                this.previewfileList = [
                    {
                        name: 'Превью-изображение',
                        url: this.NEWS_SLIDER.NEWS_ITEM.filter((news) => news._pageLink === this.entityId)[0]?.image,
                    },
                ];
                this.form.preview = this.previewfileList[0].url;
                this.form.date = this.NEWS_DATE.DATE[0].date;
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

    .tips_wrapper {
        background-color: #3f7e77;
        padding: 10px 26px;
        border-radius: 20px;
        color: #f8f5e6;
    }

    .tips p {
        text-align: center;
        font-size: 12px;
        color: #3f7e77;
    }

    .tips_wrapper p {
        text-align: left;
        font-size: 12px;
        color: #f8f5e6;
    }

    .tips_wrapper .tips_h1 {
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 30px;
    }

    .tips_wrapper .tips_h2 {
        font-weight: bold;
        /* text-align: center; */
    }

    .tips_item {
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
    }

    .tips_item > div {
        width: 50%;
    }
</style>
