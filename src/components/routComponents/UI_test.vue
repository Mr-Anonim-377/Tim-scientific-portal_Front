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
                                :on-success="successLoadHook"
                                :on-remove="removeImageHook"
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

            /* Хук успешной загрузки изображения
                При успешной загрузке заполняем скрытый инпут урлом из ответа */
            successLoadHook(res) {
                this.form.preview = res.data.url;
            },

            /* Хук удаления изображения */
            removeImageHook() {
                this.form.preview = '';
            },

            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },

            transformHTMLtoString(string) {
                return (
                    string
                        /* Обработка <p> */
                        .split('</p>')
                        .map((i) => i.replace('<p>', '').trim())
                        .join('\n')
                        /* Обработка <br> */
                        .split('<br>')
                        .map((i) => i.trim())
                        .join('\n')
                        /* Обработка <b> */
                        .replace(/<b>|<\/b>|<strong>|<\/strong>/g, '**')
                        /* Обработка списков */
                        .replace(/<ul>|<\/ul>/g, '\n\t')
                        .replace(/<li>/g, '\n\t\t')
                        .replace(/<\/li>/g, '')

                        // ! Обработка &ndash
                        .replace(/&ndash;/g, '-')
                        // ! Обработка &nbsp
                        .replace(/&nbsp;/g, '')
                );
            },

            // ! Для обратной трансформации
            /*  const HTML = '<b>Bold</b> asdadasdasd <b>Bold2</b>';
                const string = HTML.replace(/<b>|<\/b>/g, '**');
                let start = true;
                */
            // const test = string.replace(/\*\*/g, () => {
            /* start = !start;
                if (!start) return '<b>';
                return '</b>'; 
                });
                */
        },
        props: {
            /* mode -> режим рендера формы
                       create для создания
                       edit для редактирования */
            mode: String,
            entityId: String,
        },
        data() {
            return {
                loadSuccess: this.mode === 'create',

                /* Поля формы */
                form: {
                    title: '',
                    text: [],
                    preview: '',
                },

                /* Правила валидации для формы */
                rules: {
                    title: [
                        { required: true, message: "Пожалуйста, заполните поле 'Название новости'", trigger: 'blur' },
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
                await this.getModulesTest('MAIN_PAGE');

                /* Заполняем инпуты */
                this.form.text = this.transformHTMLtoString(this.NEWS_TEXT.TEXT[0].text);
                this.form.title = this.NEWS_TITLE.TITLE[0].title;
                this.sliderFileList = this.NEWS_IMAGE_CAROUSEL.IMAGE.map((image, i) => {
                    return {
                        name: 'Изображение ' + (i + 1),
                        url: image?.image,
                    };
                });

                /* Проверяем, есть ли превью */
                const previewUrl = this.NEWS_CAROUSEL.NEWS_ITEM.filter((news) => news._pageLink === this.entityId)[0]?.image;

                /* Если превью есть - записываем в модель */
                !previewUrl ||
                    (this.previewfileList = [
                        {
                            name: 'Превью-изображение',
                            url: this.NEWS_CAROUSEL.NEWS_ITEM.filter((news) => news._pageLink === this.entityId)[0]?.image,
                        },
                    ]);
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
