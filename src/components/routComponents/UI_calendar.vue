<template>
    <!-- Форма добавления/редактирования события -->
    <!-- Документация по UI: https://element-plus.org/ -->
    <div v-if="loadSuccess">
        <section>
            <TitleSection
                :title="
                    mode === 'create'
                        ? 'Добавление события'
                        : 'Редактирование события'
                "
                :header-visible="true"
            />

            <el-form ref="form" :model="form" class="form" :rules="rules">
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Название события</h1>
                        <el-form-item prop="name">
                            <el-input
                                v-model="form.name"
                                type="textarea"
                                maxlength="230"
                                :autosize="{ minRows: 3, maxRows: 3 }"
                                show-word-limit
                                resize="none"
                                placeholder="Название"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Дата начала события</h1>
                        <el-form-item prop="dateStart">
                            <el-input
                                id="dateInput"
                                v-model="form.dateStart"
                                type="date"
                                :autosize="{ minRows: 2, maxRows: 3 }"
                                show-word-limit
                                resize="none"
                                placeholder="Дата"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Дата окончания события</h1>
                        <el-form-item prop="dateEnd">
                            <el-input
                                id="dateInput"
                                v-model="form.dateEnd"
                                type="date"
                                :autosize="{ minRows: 2, maxRows: 3 }"
                                show-word-limit
                                resize="none"
                                placeholder="Дата"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Место проведения события</h1>
                        <el-form-item prop="place">
                            <el-input
                                v-model="form.place"
                                type="textarea"
                                maxlength="100"
                                :autosize="{ minRows: 2, maxRows: 3 }"
                                show-word-limit
                                resize="none"
                                placeholder="Место"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Краткое описание события</h1>
                        <el-form-item prop="previewText">
                            <el-input
                                v-model="form.previewText"
                                type="textarea"
                                maxlength="200"
                                :autosize="{ minRows: 2, maxRows: 3 }"
                                show-word-limit
                                resize="none"
                                placeholder="Краткое описание"
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
                            :data="requestDataImage"
                            list-type="picture"
                            :limit="3"
                            :file-list="sliderFileList"
                            :v-model="form.sliderFileList"
                            :before-upload="beforeUploadHook"
                            :on-success="successLoadHookSlider"
                            :on-remove="removeImageHookSlider"
                            name="image"
                        >
                            <el-button size="middle" type="success" plain
                                >Выберите изображения</el-button
                            >
                            <template #tip>
                                <div class="el-upload__tip">
                                    До 3 изображений для отображения в слайдере
                                </div>
                                <div class="el-upload__tip">
                                    jpg/png файлы размером не более 500кб
                                </div>
                            </template>
                        </el-upload>
                    </el-col>

                    <el-col :span="12">
                        <h1>Добавить документ</h1>
                        <el-form-item>
                            <el-upload
                                ref="uploadDoc"
                                class="upload-demo"
                                multiple
                                list-type="document"
                                :file-list="previewfileList"
                                :v-model="form.documentCalendar"
                                :on-change="changeDocumentHandler"
                                :limit="1"
                                :auto-upload="false"
                                :on-success="successLoadHookDocument"
                                name="file"
                            >
                                <el-button size="middle" type="success" plain
                                    >Выберите документ</el-button
                                >

                                <template #tip>
                                    <div class="el-upload__tip">
                                        pdf файл размером не более 500кб
                                    </div>
                                </template>
                            </el-upload>
                        </el-form-item>
                    </el-col>
                </el-row>

                <div class="form">
                    <el-form-item prop="text">
                        <!-- Поле текста -->
                        <h1>Тело события</h1>
                        <el-input
                            v-model="form.text"
                            type="textarea"
                            :autosize="true"
                            placeholder="Тело события"
                            maxlength="3600"
                            show-word-limit
                        >
                        </el-input>
                    </el-form-item>
                </div>

                <div class="submitWrapper">
                    <el-form-item>
                        <el-button
                            class="submitButton"
                            type="primary"
                            @click="onSubmit('form')"
                            >{{
                                mode === 'create'
                                    ? 'Добавить событие'
                                    : 'Редактировать событие'
                            }}</el-button
                        >
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
import TitleSection from '@/components/unitComponents/TitleSection';
import Preloader from '@/components/unitComponents/CommonElements/Preloader';
import testMixin from '@/utils/methodsMixin';
import axios from 'axios';

export default {
    name: 'UICalendar',
    components: {
        TitleSection,
        Preloader
    },
    mixins: [testMixin],
    props: {
        mode: String,
        entityId: String
    },
    data() {
        return {
            loadSuccess: false,
            showTips: false,

            /* Поля формы */
            form: {
                name: '',
                previewText: '',
                dateStart: '',
                dateEnd: '',
                text: [],
                place: '',
                imageLinks: [],
                documentCalendar: '',
                tag: ''
            },

            /* Правила валидации для формы */
            rules: {
                name: [
                    {
                        required: true,
                        message:
                            "Пожалуйста, заполните поле 'Название события'",
                        trigger: 'blur'
                    },
                    {
                        min: 10,
                        message: 'Название должно содержать минимум 10 символов'
                    }
                ],
                dateStart: [
                    {
                        type: 'date',
                        required: true,
                        message:
                            'Пожалуйста, выберите или напишите дату проведения события',
                        trigger: 'blur'
                    }
                ],

                place: [
                    {
                        required: true,
                        message:
                            "Пожалуйста, заполните поле 'Место проведения события'",
                        trigger: 'blur'
                    },
                    {
                        min: 6,
                        message:
                            'Место проведения должно содержать минимум 6 символов'
                    }
                ],
                previewText: [
                    {
                        required: true,
                        message:
                            "Пожалуйста, заполните поле 'Краткое описание события'",
                        trigger: 'blur'
                    },
                    {
                        min: 10,
                        message:
                            'Краткое описание должно содержать минимум 10 символов'
                    }
                ],
                text: [
                    {
                        required: true,
                        message: "Пожалуйста, заполните поле 'Тело события'",
                        trigger: 'blur'
                    },
                    {
                        min: 10,
                        message:
                            'Текст события должен содержать минимум 10 символов'
                    }
                ]
            },

            /* УЖЕ загруженные изображения */
            previewfileList: [],

            /* УЖЕ загруженные изображения для слайдера страницы события */
            sliderFileList: [],

            /* Загружаемые изображения */
            loadedImages: {
                imageLinks: []
            },

            /* При загрузке изображений отправляем api key imgBB
            Если что-то пойдет не так, получить новый можно тут:
            https://api.imgbb.com/ */
            requestDataImage: {
                key: '2ca9c35e0d42896ec7e746b5daf2c924'
            },

            requestData: {
                uploadFilePath: 'pdf'
            }
        };
    },

    created() {
        /* Проверка авторизации */
        this.authCheck()
            .then(res => {
                this.form.tag = res.data;
            })
            .catch(() => {
                this.$router.push({ name: 'auth' });
            });
    },

    async mounted() {
        /* Если форма открыта в режиме редактирования - загружаем данные по id события */
        if (this.mode === 'edit') {
            await this.getModulesTest(' ', this.entityId);
            await this.getModulesTest('MAIN_PAGE');
            /* Заполняем инпуты */
            this.form.name = this.CALENDAR_BANNER.TITLE[0].title;
            this.form.place = this.CALENDAR_BANNER.TEXT[0].text;

            this.form.previewText = this.ACTIONS_CALENDAR.ACTION.filter(
                action => action._pageLink === this.entityId
            )[0].text;
            this.form.tag = this.ACTIONS_CALENDAR.ACTION.filter(
                action => action._pageLink === this.entityId
            )[0]._tag;
            this.form.text = this.CALENDAR_TEXT.TEXT[0].text.replace(
                /;/g,
                '\n'
            );

            /* Парс даты */
            const date = this.ACTIONS_CALENDAR.ACTION.filter(
                action => action._pageLink === this.entityId
            )[0].date;

            /* Дата начала события */
            this.form.dateStart =
                date.length >= 10 ? date.split(' - ')[0] : date;
            this.form.dateStart = this.form.dateStart
                .split('.')
                .reverse()
                .join('-');

            /* Дата окончания события */
            this.form.dateEnd = date.length >= 10 ? date.split(' - ')[1] : '';
            this.form.dateEnd = this.form.dateEnd
                ? this.form.dateEnd
                      .split('.')
                      .reverse()
                      .join('-')
                : '';
            this.sliderFileList = this.CALENDAR_SLIDER?.IMAGE?.map(
                (image, i) => {
                    return {
                        name: 'Изображение ' + (i + 1),
                        url: image?.image
                    };
                }
            );
            this.documentCalendar = this.CALENDAR_TEXT?.DOC?.map(link => {
                return {
                    name: 'Документ',
                    url: link?.link
                };
            });
            this.form.imageLinks = this.sliderFileList;
            this.debug('Данные формы', this.form);
        }
        this.loadSuccess = true;
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
            const validFormat =
                file.type === 'image/jpeg' || file.type === 'image/png';
            const validSize = file.size <= 500000;

            validFormat ||
                this.$message.error(
                    'Изображение должно иметь формат JPG или PNG'
                );
            validSize ||
                this.$message.error(
                    'Изображение должно иметь вес не более 500кб'
                );

            return validFormat && validSize;
        },

        getCurrentDate() {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            return dd + '.' + mm + '.' + yyyy;
        },

        changeDocumentHandler(file) {
            console.log(file);
            this.form.documentCalendar = file;
        },

        /* Хук успешной загрузки изображения (инпут слайдера)
            При успешной загрузке заполняем скрытый инпут урлом из ответа */
        successLoadHookSlider(res, file, fileList) {
            this.form.imageLinks = fileList.map(image => {
                return {
                    name: image.name,
                    url: image.response ? image.response.data.url : image.url
                };
            });
        },

        /* Хук успешной загрузки изображения (инпут документа)
              При успешной загрузке заполняем скрытый инпут урлом из ответа */
        successLoadHookDocument(res, file, fileList) {
            this.form.documentCalendar = fileList.map(link => {
                return {
                    name: link.name,
                    url: link.response ? link.response.data.url : link.url
                };
            });
        },

        /* Хук удаления изображения (инпут слайдера) */
        removeImageHookSlider(res, fileList) {
            this.form.imageLinks = fileList;
        },

        /**
         * Метод добавления события
         * @param {object} data - тело запроса на создание события
         */
        addCalendar(data) {
            /* Преобразуем в formData */
            const formData = new FormData();
            const file = this.form.documentCalendar;

            Object.keys(data).forEach(prop => {
                formData.append(prop, data[prop]);
            });

            formData.append('file', file.raw, file.name);
            formData.append('fileName', file.name);
            formData.append('fileData', this.getCurrentDate());

            //eslint-disable-next-line
            const self = this;
            //eslint-disable-next-line
            debugger

            return new Promise(res => {
                axios({
                    method: 'POST',
                    url: '/user/create/calendar',
                    data: formData,
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then(response => {
                    res(response.data);
                });
            });
        },

        /**
         * Метод обновления события
         * @param {object} data - тело запроса на создание новости
         */
        updateCalendar(data) {
            return new Promise(res => {
                axios({
                    method: 'POST',
                    url: '/user/update/calendar',
                    data: data
                }).then(response => {
                    res(response.data);
                });
            });
        },

        /* Метод сабмита формы -> отправляет запросы при пройденной валидации */
        onSubmit(formName) {
            let data = this.getRequestData();
            this.addCalendar(data).then(() => {
                console.log('ok');
            });
            this.$refs[formName].validate(async valid => {
                if (valid) {
                    // let data = this.getRequestData();
                    if (this.mode === 'create') {
                        // this.debug('Отправляем', data, true);
                    } else {
                        // data.pageId = this.entityId;
                        // this.debug('Отправляем', data, true);
                        // this.updateCalendar(data).then(() => {
                        //     this.$router.push({ name: 'AdminCalendarPage' });
                        // });
                    }
                } else {
                    return false;
                }
            });
        },

        /**
         * Формирование тела запроса из this.form
         */
        getRequestData() {
            const date =
                /* Если дата начала и конца совпадают - отправляем любую */
                !this.form.dateEnd
                    ? this.form.dateStart
                          .split('-')
                          .reverse()
                          .join('.')
                    : /* Если нет - отправляем в формате "dateStart - dateEnd" */
                      this.form.dateStart
                          .split('-')
                          .reverse()
                          .join('.') +
                      ' - ' +
                      this.form.dateEnd
                          .split('-')
                          .reverse()
                          .join('.');

            return {
                tag:
                    this.form.dateStart.slice(2, 4) +
                    this.form.dateStart.slice(5, 7),
                name: this.form.name,
                imageLinks: this.form.imageLinks?.map(image => image.url) || [],
                text: this.form.text.replace(/\n/g, ' ; '),
                previewText: this.form.previewText,
                date: date,
                place: this.form.place
            };
        }
    }
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

.tips_wrapper .tips_h3 {
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

@keyframes tips {
    from {
        height: 0;
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        height: 300px;
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
