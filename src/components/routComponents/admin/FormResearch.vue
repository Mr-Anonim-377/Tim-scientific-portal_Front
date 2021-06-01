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

                <!-- Поле "Направление исследования" -->
                <el-row type="flex" justify="space-between">
                    <el-col>
                        <h1>Направление исследования</h1>
                        <el-form-item prop="waysId">
                            <el-select v-model="form.waysId" placeholder="Выберите направление исследования">
                                <el-option v-for="item in researchDirectionsList" :key="item.title" :label="item.title" :value="item.title">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="space-between">
                    <!-- Поле "Связанные исследователи" -->
                    <el-col>
                        <h1>Исследователи</h1>
                        <el-form-item prop="researcherUids">
                            <el-select v-model="form.researcherUids" multiple placeholder="Выберите исследователей, участвовавших в исследовании">
                                <el-option v-for="item in researcherList" :key="item.value" :label="item.value" :value="item.value"> </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Поле "Об исследовании" -->
                <el-row type="flex" justify="center" required>
                    <el-col>
                        <h1>Об исследовании:</h1>
                        <el-form-item prop="text" required>
                            <!-- Поле текста -->
                            <el-input
                                type="textarea"
                                :autosize="true"
                                placeholder="Тело новости"
                                v-model="form.text"
                                maxlength="3600"
                                show-word-limit
                            >
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center" :gutter="20">
                    <el-col :span="12">
                        <!-- Изображени для превью -->
                        <h1>Изображение для превью</h1>
                        <el-form-item required>
                            <el-upload
                                class="upload-demo"
                                action="https://api.imgbb.com/1/upload"
                                multiple
                                :data="requestData"
                                list-type="picture"
                                :limit="1"
                                :file-list="previewImages.preview"
                                name="image"
                                :model="form.previewImageLink"
                                :on-success="successLoadHookPreview"
                                :on-remove="removeImageHookPreview"
                            >
                                <el-button size="middle" type="success" plain>Выберите изображение</el-button>
                                <template #tip>
                                    <div class="el-upload__tip">1 изображение для отображения в списке исследований</div>
                                    <div class="el-upload__tip">jpg/png файл размером не более 500кб</div>
                                </template>
                                <!-- Скрытый form-item для превью -->
                            </el-upload>
                            <el-form-item class="hiddenFormItem" prop="previewImageLink" required>
                                <el-input class="hiddenInput" v-model="form.previewImageLink"></el-input>
                            </el-form-item>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item required>
                            <!-- Изображения для слайдера -->
                            <h1>Изображения для слайдера</h1>
                            <el-upload
                                class="upload-demo"
                                action="https://api.imgbb.com/1/upload"
                                multiple
                                :data="requestData"
                                list-type="picture"
                                :limit="7"
                                :file-list="previewImages.slider"
                                :v-model="form.slider"
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
                                <!-- Скрытый form-item для слайдера  -->
                            </el-upload>
                            <el-form-item class="hiddenFormItem" prop="imgs" required>
                                <el-input class="hiddenInput" v-model="form.imgs"></el-input>
                            </el-form-item>
                        </el-form-item>
                    </el-col>
                </el-row>

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
           TODO Парс данных при редактировании
              TODO Слайдер
              TODO Метод получения ID по тэгу
              TODO Формирования JSON

           Финальные штрихи:
           TODO Редирект

           Методы:
           TODO Добавление, редактирование
      */

    import TitleSection from '../../unitComponents/TitleSection';
    import mixin from '../../../utils/methodsMixin';
    import Preloader from './../../unitComponents/CommonElements/Preloader';
    import axios from 'axios';

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
                    date: this.getCurrentDate() + '',
                    name: '',
                    researcherUids: [],
                    text: [],
                    previewImageLink: '',
                    imgs: [],
                    waysId: [],
                },
                rules: {
                    name: [{ required: true, message: "Пожалуйста, заполните поле 'Название исследования'", trigger: 'blur' }],
                    researcherUids: [],
                    text: [
                        { required: true, message: "Пожалуйста, заполните поле 'Об исследовании'", trigger: 'blur' },
                        { min: 30, message: 'Текст исслдеования должен содержать минимум 30 символов' },
                    ],
                    previewImageLink: [
                        {
                            required: true,
                            message: 'Для корректного отображения в списке исследований необходимо загрузить превью изображение',
                            trigger: 'blur',
                        },
                    ],
                    imgs: [
                        {
                            type: 'array',
                            required: true,
                            message: 'Для корректного отображения исследования необходимо загрузить минимум 3 изображения в слайдер',
                            trigger: 'blur',
                            min: 3,
                        },
                    ],
                    waysId: [
                        {
                            required: true,
                            message: 'Необходимо выбрать направление исследования',
                            trigger: 'blur',
                        },
                    ],
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
            getRequestData() {
                const form = this.form;
                return {
                    name: form.name,
                    text: form.text.split('\n'),
                    date: form.date,
                    waysId: this.researchDirectionsList.find((way) => way.title === this.form.waysId).id,
                    previewImageLink: this.form.previewImageLink,
                    researcherUids: this.form.researcherUids.map((researcherName) => {
                        return this.researcherList.find((researcherObj) => researcherObj.value === researcherName).id;
                    }),
                    imgs: this.form.imgs.map((image) => image.url),
                    tag: this.form.tag,
                };
            },

            /* Функция возвращает текущее время */
            getCurrentDate() {
                let today = new Date();
                let yyyy = today.getFullYear();
                return yyyy;
            },

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
                this.form.previewImageLink = res.data.url;
            },

            /* Хук удаления изображения (превью) */
            removeImageHookpreviewImageLink() {
                this.form.previewImageLink = '';
            },

            /* Хук успешной загрузки изображения (инпут слайдера)
                 При успешной загрузке заполняем скрытый инпут урлом из ответа */
            successLoadHookSlider(res, file, fileList) {
                this.form.imgs = fileList.map((image) => {
                    return { name: image.name, url: image.response ? image.response.data.url : image.url };
                });
            },
            /* Хук удаления изображения (инпут слайдера) */
            removeImageHookSlider(res, fileList) {
                this.form.imgs = fileList;
            },

            /**
             * Метод добавления исследования
             * @param {object} data - тело запроса на создание исследования
             */
            addResearch(data) {
                return new Promise((res) => {
                    axios({
                        method: 'POST',
                        url: '/user/create/research',
                        data: data,
                    }).then((response) => {
                        res(response.data);
                    });
                });
            },

            /**
             * Метод обновления исследования
             * @param {object} data - тело запроса на создание исследования
             */
            updateResearch(data) {
                return new Promise((res) => {
                    axios({
                        method: 'POST',
                        url: '/user/update/research',
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
                            this.addResearch(data).then(() => {
                                this.$router.push({ name: 'AdminResearchPage' });
                            });
                        } else {
                            data.pageId = this.entityId;
                            this.updateResearch(data).then(() => {
                                this.$router.push({ name: 'AdminResearchPage' });
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
            this.authCheck().then((res) => {
                this.form.tag = res.data;
            });
        },

        async mounted() {
            /* Получаем направления */
            await this.getModulesTest('WAYS');
            /* Получаем список исследователей */
            await this.getModulesTest('RESEARCH_MEMBERS', `adcb4eef-0e3c-4d63-a0be-adc3bd1fd51d`);

            /* Исследователи */
            this.researcherList = this.RESEARCH_MEMBER.RESEARCH_MEMBER.filter((member) => member._pageLink).map((member) => {
                return {
                    value: member.text,
                    id: member._pageLink,
                };
            });

            /* Направления исследования */
            this.researchDirectionsList = this.WAYS_ARRAY.WAYS_ITEM.map((way) => {
                return {
                    title: way.title,
                    id: way._pageLink,
                };
            });

            if (this.mode === 'edit') {
                /* Получаем список исследователей */

                /* т.к. нет запроса на получение данных формы по id сущноности
                     снова получаем список и ищем нужный нам объект */

                axios({
                    method: 'GET',
                    url: '/user/allEntityInstance?type=RESEARCH',
                }).then((response) => {
                    const formData = response.data.filter((entity) => entity.pageId === this.entityId);

                    /* Засовываем даныне в модель */
                    this.form.name = formData[0].name;
                    this.form.text = formData[0].text;
                    this.form.previewImageLink = formData[0].previewImageLink;
                    this.previewImages.preview = [
                        {
                            name: 'Превью изображение',
                            url: formData[0].previewImageLink,
                        },
                    ];
                    /* Направления исследования */

                    this.form.waysId = this.researchDirectionsList.filter((way) => way.id === formData[0].waysId)[0].title;
                    this.previewImages.slider = formData[0].imgs?.map((image, i) => {
                        return {
                            name: 'Изображение ' + (i + 1),
                            url: image,
                        };
                    });
                    this.loadSuccess = true;
                });
            } else {
                this.loadSuccess = true;
            }
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
