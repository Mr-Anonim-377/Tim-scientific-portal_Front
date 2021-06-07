<template>
    <!-- Форма добавления/редактирования исследования -->
    <!-- Документация по UI: https://element-plus.org/ -->
    <div v-if="loadSuccess">
        <section>
            <TitleSection :title="mode === 'create' ? 'Добавление документа' : 'Редактирование документа'" :headerVisible="true" />

            <el-form :model="form" class="form" :rules="rules" ref="form">
                <!-- Поле "Название документа" -->
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Название документа</h1>
                        <el-form-item prop="name" required>
                            <el-input
                                type="textarea"
                                maxlength="50"
                                show-word-limit
                                :autosize="{ minRows: 1, maxRows: 1 }"
                                resize="none"
                                v-model="form.name"
                                placeholder="Название исследования"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col>
                        <h1>Документ</h1>
                        <el-form-item>
                            <el-upload
                                class="upload-demo"
                                action="https://future-agro.ru:84/uploadFile"
                                multiple
                                :data="requestData"
                                list-type="text"
                                :limit="1"
                                :file-list="preview.documents"
                                name="documents"
                                :model="form.documents"
                                :before-upload="beforeUploadHook"
                                :on-success="successLoadHookDocument"
                                :on-remove="removeImageHookDocsuccessLoadHookDocument"
                            >
                                <el-button size="middle" type="success" plain>Выберите документ</el-button>
                                <template #tip>
                                    <div class="el-upload__tip">1 документ формата DOC, PPT или PDF</div>
                                </template>
                                <!-- Скрытый form-item для превью -->
                            </el-upload>
                            <el-form-item class="hiddenFormItem" prop="document">
                                <el-input class="hiddenInput" v-model="form.documents"></el-input>
                            </el-form-item>
                        </el-form-item>
                    </el-col>
                </el-row>

                <div class="submitWrapper">
                    <el-form-item>
                        <el-button @click="onSubmit('form')" class="submitButton" type="primary">{{
                            mode === 'create' ? 'Добавить документ' : 'Редактировать документ'
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
    import TitleSection from '../../unitComponents/TitleSection';
    import mixin from '../../../utils/methodsMixin';
    import Preloader from './../../unitComponents/CommonElements/Preloader';
    import axios from 'axios';

    export default {
        name: 'FormDocuments',
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
                /* Данные формы */
                form: {
                    name: '',
                    documents: [],
                },
                /* Данные превью документов */
                preview: {
                    documents: [],
                },
                /* Правила валидации */
                rules: {
                    // TODO Надо ли вообще делать этот параметр обязательным?
                    // TODO Надо ли вообще инпут?
                    name: [{ required: true, message: '', trigger: 'blur' }],
                },
                /* Параметры запроса на загрузку файлов */
                requestData: {
                    // TODO Указать корректный путь для хранения доков на серваке
                    // uploadFilePath: '/var/www/html/test',
                    uploadFilePath: 'test',
                    name: '',
                },
            };
        },

        methods: {
            getRequestData() {
                // TODO Раскоментить
                // const form = this.form;
                return {
                    /*
                     TODO Трансформация данных для бэка
                     */
                };
            },

            /**
             * Хук валидации перед загрузкой документа
             * @param {object} file - объект с файлом
             * @returns {boolean} validFormat && validSize
             *
             * Если метод возвращает false - выводится сообщение о соответствующей ошибке
             *
             * TODO Написать валидацию
             */
            beforeUploadHook(file) {
                // this.debug('валидация', file, true);
                /* const validFormat = file.type === 'image/jpeg' || file.type === 'image/png';
                const validSize = file.size <= 500000;

                validFormat || this.$message.error('Изображение должно иметь формат JPG или PNG');
                validSize || this.$message.error('Изображение должно иметь вес не более 500кб');

                return validFormat && validSize; */

                /* Кладем имя файла в параметр к запросу */
                this.requestData.name = file.name;
                return true;
            },

            /* Хук успешной загрузки изображения (инпут превью)
               При успешной загрузке заполняем скрытый инпут урлом из ответа */
            successLoadHookDocument(res) {
                // TODO Поменять в зависимости от ответа с сервера
                this.debug('success', res, true);
                this.form.documents = res.data.url;
            },

            /* Хук удаления изображения (инпут превью) */
            removeImageHookDocument() {
                this.form.documents = '';
                this.debug('remove', null, true);
            },

            /**
             * Метод добавления документа
             * @param {object} data - тело запроса на создание документа
             * TODO Указать корректный урл
             */
            addDocument(data) {
                return new Promise((res) => {
                    axios({
                        method: 'POST',
                        // url: '/user/create/',
                        data: data,
                    }).then((response) => {
                        res(response.data);
                    });
                });
            },

            /**
             * Метод обновления документа
             * @param {object} data - тело запроса на создание документа
             * TODO Указать корректный урл
             */
            updateDocument(data) {
                return new Promise((res) => {
                    axios({
                        method: 'POST',
                        // url: '/user/update/',
                        data: data,
                    }).then((response) => {
                        res(response.data);
                    });
                });
            },

            onSubmit(form) {
                this.$refs[form].validate(async (valid) => {
                    if (valid) {
                        let data = this.getRequestData();
                        if (this.mode === 'create') {
                            this.debug('Отправляем', data, true);
                            this.addDocument(data).then(() => {
                                this.$router.push({ name: 'AdminDocumentPage' });
                            });
                        } else {
                            data.pageId = this.entityId;
                            this.debug('Отправляем', data, true);
                            this.updateDocument(data).then(() => {
                                this.$router.push({ name: 'AdminDocumentPage' });
                            });
                        }
                    } else {
                        return false;
                    }
                });
            },
        },

        created() {
            /* Проверка авторизации */
            this.authCheck()
                .then((res) => {
                    this.form.tag = res.data;
                })
                .catch(() => {
                    this.$router.push({ name: 'auth' });
                });
        },

        async mounted() {
            // TODO Получение данных
            this.loadSuccess = true;
        },
    };
</script>
<style scoped>
    .el-upload__tip {
        line-height: normal;
    }
    .el-select {
        width: 100%;
    }

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
