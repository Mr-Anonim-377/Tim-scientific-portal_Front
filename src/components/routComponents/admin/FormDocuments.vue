<template>
    <!-- Форма добавления/редактирования исследования -->
    <!-- Документация по UI: https://element-plus.org/ -->
    <div v-if="loadSuccess">
        <section>
            <TitleSection
                :title="
                    mode === 'create'
                        ? 'Добавление документа'
                        : 'Редактирование документа'
                "
                :header-visible="true"
            />

            <el-form ref="form" :model="form" class="form" :rules="rules">
                <!-- Поле "Название документа" -->
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Название документа</h1>
                        <el-form-item prop="name" required>
                            <el-input
                                v-model="form.name"
                                type="textarea"
                                maxlength="50"
                                show-word-limit
                                :autosize="{ minRows: 1, maxRows: 1 }"
                                resize="none"
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
                                        1 документ формата DOC, PPT или PDF
                                    </div>
                                </template>
                                <!-- Скрытый form-item для превью -->
                            </el-upload>
                            <el-form-item
                                class="hiddenFormItem"
                                prop="document"
                            >
                                <el-input
                                    v-model="form.documents"
                                    class="hiddenInput"
                                ></el-input>
                            </el-form-item>
                        </el-form-item>
                    </el-col>
                </el-row>

                <div class="submitWrapper">
                    <el-form-item>
                        <el-button
                            class="submitButton"
                            type="primary"
                            @click="onSubmit('form')"
                            >{{
                                mode === 'create'
                                    ? 'Добавить документ'
                                    : 'Редактировать документ'
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
    mixins: [mixin],
    props: {
        mode: String,
        entityId: String,
    },
    data() {
        return {
            loadSuccess: false,
            /* Данные формы */
            form: {
                name: '',
                documents: [],
            },
            previewfileList: [],
            /* Данные превью документов */
            preview: {
                documents: [],
            },
            /* Правила валидации */
            rules: {
                name: [
                    {
                        required: true,
                        message: 'Введите название файла',
                        trigger: 'blur',
                    },
                ],
            },
        };
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
         */
        addDocument(data) {
            /* Преобразуем в formData */
            const formData = new FormData();
            const file = this.form.documents;

            Object.keys(data).forEach((prop) => {
                formData.append(prop, data[prop]);
            });

            formData.append('file', file.raw, file.name);
            formData.append('previewName', file.name);
            formData.append('filePath', 'private');

            return new Promise((res) => {
                axios({
                    method: 'POST',
                    url: '/user/create/private/doc',
                    data: formData,
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then((response) => {
                    res(response.data);
                });
            });
        },

        changeDocumentHandler(file) {
            console.log(file);
            this.form.documents = file;
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
