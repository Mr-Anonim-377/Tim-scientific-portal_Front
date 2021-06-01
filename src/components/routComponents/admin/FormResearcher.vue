<template>
    <!-- Форма добавления/редактирования исследователя -->
    <!-- Документация по UI: https://element-plus.org/ -->
    <div v-if="loadSuccess">
        <section>
            <TitleSection
                :title="mode === 'create' ? 'Добавление профиля исследователя' : 'Редактирование профиля исследователя'"
                :headerVisible="true"
            />

            <el-form :model="form" class="form" :rules="rules" ref="form">
                <!-- Поле ФИО -->
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>ФИО</h1>
                        <el-form-item prop="fullname">
                            <el-input
                                type="textarea"
                                maxlength="50"
                                :autosize="{ minRows: 1, maxRows: 1 }"
                                resize="none"
                                v-model="form.fullname"
                                placeholder="ФИО исследователя"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Поле "Дата рождения" -->
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Дата рождения</h1>
                        <el-form-item prop="dateOfBirth">
                            <el-input
                                type="date"
                                id="dateInput"
                                min="1920-01-01"
                                max="2021-01-01"
                                maxlength="50"
                                :autosize="{ minRows: 1, maxRows: 1 }"
                                resize="none"
                                v-model="form.dateOfBirth"
                                placeholder="Специальность исследователя"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <!-- Поле "Специальность" -->
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Специальность</h1>
                        <el-form-item prop="specialty">
                            <el-input
                                type="textarea"
                                maxlength="50"
                                :autosize="{ minRows: 1, maxRows: 1 }"
                                resize="none"
                                v-model="form.specialty"
                                placeholder="Специальность исследователя"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Поле "Электронная почта" -->
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Электронная почта</h1>
                        <el-form-item prop="email">
                            <el-input
                                type="textarea"
                                maxlength="50"
                                :autosize="{ minRows: 1, maxRows: 1 }"
                                resize="none"
                                v-model="form.email"
                                placeholder="Специальность исследователя"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Поле "Связанные исследования" -->
                <el-row type="flex" justify="center" :gutter="20">
                    <el-col :span="12">
                        <h1>Исследования</h1>
                        <el-form-item prop="research">
                            <el-select v-model="form.research" multiple placeholder="Выберите исследования, в которых принимал участие исследователь">
                                <el-option v-for="item in researchList" :key="item.value" :label="item.value" :value="item.value"> </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <!-- Изображения -->
                        <h1>Фотография профиля</h1>
                        <el-form-item>
                            <el-upload
                                class="upload-demo"
                                action="https://api.imgbb.com/1/upload"
                                multiple
                                :data="requestData"
                                list-type="picture"
                                :limit="1"
                                :file-list="previewImages.avatar"
                                name="image"
                                :model="form.avatar"
                                :on-success="successLoadHookAvatar"
                                :on-remove="removeImageHookAvatar"
                            >
                                <el-button size="middle" type="success" plain>Выберите изображение</el-button>
                                <template #tip>
                                    <div class="el-upload__tip">1 изображение для отображения в ленте новостей</div>
                                    <div class="el-upload__tip">jpg/png файл размером не более 500кб</div>
                                </template>
                            </el-upload>
                        </el-form-item>

                        <!-- Скрытый form-item для валидации загрузки превью -->
                        <el-form-item class="hiddenFormItem" prop="avatar">
                            <el-input class="hiddenInput" v-model="form.preview"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Поле "Фото профиля" -->
                <el-row type="flex" justify="center"> </el-row>

                <!-- Поле "Связанные исследователи" -->
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Достижения</h1>
                        <el-form-item prop="research">
                            <el-select
                                :span="12"
                                class="formResearcher__progressSelect"
                                v-model="form.achievements"
                                multiple
                                filterable
                                default-first-option
                                placeholder="Исследования, в которых принимал участие исследователь"
                                allow-create
                            >
                                <el-option v-for="item in progressList" :key="item.value" :label="item.value" :value="item.value"> </el-option>
                            </el-select>
                        </el-form-item>
                        <div class="el-upload__tip">
                            Для корректного отображения достижения в профиле необходимо заполнять исследования в формате "Достижение - год"
                        </div>
                    </el-col>
                </el-row>

                <div class="submitWrapper">
                    <el-form-item>
                        <el-button @click="onSubmit('form')" class="submitButton" type="primary">{{
                            mode === 'create' ? 'Добавить исследователя' : 'Редактировать исследователя'
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

    Работа с UI:
    * TODO Написать валидацию для обязательных параметров
        * TODO Валидация емейла 
        * TODO Валидация даты 
        * TODO Проверить валидацию

    * TODO Переделать инпут достижения / на первое время добавить типс
    * TODO Инпут даты
    * TODO Бага с тайтлом

    * TODO Список с пустыми профилями


    Работа с данными:
    * TODO Проверить корректное получение

    * TODO Формирование json в ответе
    TODO Переходы с аккаунта
    TODO Скрыть лишние инпуты

    Баги:
    TODO Отписать Антону подробнее о кейсе воспроизведения хуйни с названиями

    После правок по бэку:
    ! getRequestData():
        ! education лишнее
        ! не хватает -> email: this.form.email
    */
    import TitleSection from '../../unitComponents/TitleSection';
    import mixin from '../../../utils/methodsMixin';
    import Preloader from './../../unitComponents/CommonElements/Preloader';
    import axios from 'axios';

    export default {
        name: 'pagename',
        components: {
            TitleSection,
            Preloader,
        },
        props: {
            mode: String,
            entityId: String,
            status: String,
        },
        mixins: [mixin],
        data() {
            return {
                loadSuccess: false,
                form: {
                    fullname: '',
                    specialty: '',
                    email: '',
                    avatar: '',
                    dateOfBirth: '',
                    research: [],
                    achievements: [],
                },
                /* Объект */

                rules: {
                    fullname: [
                        { required: true, message: "Пожалуйста, заполните поле 'ФИО'", trigger: 'blur' },
                        { min: 10, message: 'ФИО должно содержать минимум 10 символов' },
                    ],

                    specialty: [
                        { required: true, message: "Пожалуйста, заполните поле 'Специальность'", trigger: 'blur' },
                        { min: 5, message: 'Название специальности должно содержать минимум 5 символов' },
                    ],
                    email: [
                        { required: true, message: 'Пожалуйста, заполните поле email адреса', trigger: 'blur' },
                        { type: 'email', message: 'Пожалуйста, введите корректный email' },
                    ],

                    avatar: [
                        {
                            required: true,
                            message: 'Для корректного отображения анкеты исследователя необхоидимо загрузить аватар',
                            trigger: 'blur',
                        },
                    ],

                    dateOfBirth: [{ type: 'date', required: true, message: 'Пожалуйста, выберите или напишите дату рождения', trigger: 'blur' }],
                },

                researchList: [
                    { value: 'Исследование 1' },
                    { value: 'Исследование 2' },
                    { value: 'Исследование 3' },
                    { value: 'Исследование 4' },
                    { value: 'Исследование 5' },
                ],

                progressList: [],

                previewImages: {
                    avatar: [],
                },

                /* При загрузке изображений отправляем api key imgBB
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
                    achievements: form.achievements.map((attainment) => {
                        attainment = attainment.split(' - ');
                        const name = attainment[0];
                        const date = attainment[1];
                        return {
                            name,
                            date,
                        };
                    }),
                    date: this.form.dateOfBirth
                        .split('-')
                        .reverse()
                        .join('.'),
                    imageLink: form.avatar,
                    institution: form.tag,
                    name: form.fullname,
                    pageId: this.entityId,
                    researchIds: form.research.map((researchName) => {
                        return this.researchList.find((research) => research.value === researchName).id;
                    }),
                    specialisation: form.specialty,
                    tag: form.tag,
                    // ! education лишнее
                    // ! не хватает -> email: this.form.email
                };
            },

            /* Хук успешной загрузки изображения (аватар)
               При успешной загрузке заполняем скрытый инпут урлом из ответа */
            successLoadHookAvatar(res) {
                this.form.avatar = res.data.url;
            },

            /* Хук удаления изображения (аватар) */
            removeImageHookPreview() {
                this.form.avatar = '';
            },

            /**
             * Метод добавления исследования
             * @param {object} data - тело запроса на создание исследователя
             */
            addResearcher(data) {
                //eslint-disable-next-line
                const self = this;
                //eslint-disable-next-line
                debugger;
                return new Promise((res) => {
                    axios({
                        method: 'POST',
                        url: '/user/create/researchers',
                        data: data,
                    }).then((response) => {
                        res(response.data);
                    });
                });
            },

            /**
             * Метод обновления исследователя
             * @param {object} data - тело запроса на создание исследователя
             */
            updateResearcher(data) {
                //eslint-disable-next-line
                const self = this;
                //eslint-disable-next-line
                debugger;
                return new Promise((res) => {
                    axios({
                        method: 'POST',
                        url: '/user/update/researchers',
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
                            this.addResearcher(data).then(() => {
                                window.location.href = 'http://future-agro.ru/AdminResearchPage';
                            });
                        } else {
                            data.pageId = this.entityId;
                            this.updateResearcher(data).then(() => {
                                window.location.href = 'http://future-agro.ru/AdminResearchPage';
                            });
                        }
                    } else {
                        return false;
                    }
                });
            },
        },
        async mounted() {
            if (this.mode === 'edit') {
                /* Получаем список исследователей */

                /* т.к. нет запроса на получение данных формы по id сущноности
                     снова получаем список и ищем нужный нам объект */

                axios({
                    method: 'GET',
                    url: '/user/allEntityInstance?type=RESEARCHER',
                }).then((response) => {
                    const formData = response.data[this.status].filter((entity) => entity.pageId === this.entityId)[0];

                    console.log('Объект с сервера', formData);

                    this.form.fullname = formData.name;
                    this.form.specialty = formData.specialisation;
                    this.form.email = '...';

                    this.form.avatar = formData.imageLink;
                    this.previewImages.avatar = [
                        {
                            name: 'Изображение профиля',
                            url: formData.imageLink,
                        },
                    ];

                    this.form.dateOfBirth = formData.date
                        .split('.')
                        .reverse()
                        .join('-');

                    this.form.achievements = formData.achievements.map((i) => i.name + ' - ' + i.date);

                    /* Получаем исследования */
                    axios({
                        method: 'GET',
                        url: '/user/allEntityInstance?type=RESEARCH',
                    }).then((responce) => {
                        this.researchList = responce.data.map((researcher) => {
                            return {
                                value: researcher.name,
                                id: researcher.pageId,
                            };
                        });
                    });

                    console.log(formData);
                    this.loadSuccess = true;
                });
            }
            setTimeout(() => {
                this.loadSuccess = true;
            }, 500);
        },

        created() {
            /* Проверка авторизации */
            this.authCheck().then((res) => {
                this.form.tag = res.data;
            });
        },
    };
</script>
<style scoped>
    .el-upload__tip {
        line-height: normal;
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
