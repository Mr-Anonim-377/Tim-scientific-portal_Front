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
                                show-word-limit
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
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Поле "Электронная почта" -->
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Электронная почта</h1>
                        <el-form-item>
                            <el-input
                                type="textarea"
                                maxlength="50"
                                :autosize="{ minRows: 1, maxRows: 1 }"
                                resize="none"
                                v-model="form.email"
                                placeholder="Специальность исследователя"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center" :gutter="20">
                    <!-- Поле "Связанные исследования" -->
                    <el-col :span="12">
                        <h1>Исследования</h1>
                        <el-form-item prop="research">
                            <el-select v-model="form.research" multiple placeholder="Выберите исследования, в которых принимал участие исследователь">
                                <el-option v-for="item in researchList" :key="item.value" :label="item.value" :value="item.value"> </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <!-- Поле "Изображение профиля" -->
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

                <!-- Поле "Достижения" -->
                <div class="achievements">
                    <h1>Достижения</h1>
                    <el-row type="flex" justify="center" :gutter="20" v-for="(ach, index) in achievementsLenght" :key="index">
                        <el-col :span="12">
                            <el-form-item
                                :prop="'achievements.' + index + '.name'"
                                :rules="[
                                    {
                                        required: true,
                                        message: 'Пожалуйста, заполните название достижения',
                                        trigger: 'blur',
                                    },
                                ]"
                            >
                                <el-input show-word-limit maxlength="50" v-model="form.achievements[index].name"> </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item
                                :prop="'achievements.' + index + '.date'"
                                :rules="[
                                    {
                                        required: true,
                                        message: 'Пожалуйста, заполните год получения достижения',
                                        trigger: 'blur',
                                    },
                                    {
                                        max: 4,
                                        min: 4,
                                        trigger: blur,
                                        message: 'Пожалуйста, укажите корректный год достижения',
                                    },
                                ]"
                            >
                                <el-input maxlength="4" type="number" v-model="this.form.achievements[index].date" show-word-limit placeholder="Год">
                                    <template #append>
                                        <el-button @click="deliteAchievement(event, index)" placeholder="Please input" clearable>
                                            Удалить достижение</el-button
                                        >
                                    </template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-button class="addAchievementsBtn" @click="addAchievement">Добавить достижение</el-button>
                    </el-row>
                </div>

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
                test: '',
                achievementsLenght: new Number(),
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

                researchList: [],

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
                    achievements: form.achievements,
                    date: this.form.dateOfBirth
                        .split('-')
                        .reverse()
                        .join('.'),
                    imageLink: form.avatar,
                    email: form.email,
                    institution: form.tag,
                    name: form.fullname,
                    pageId: this.entityId,
                    researchIds: form.research.map((researchName) => {
                        return this.researchList.find((research) => research.value === researchName).id;
                    }),
                    specialisation: form.specialty,
                    tag: form.tag,
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
                            this.debug('Отправляем', data, true);
                            this.addResearcher(data).then(() => {
                                this.$router.push({ name: 'AdminPartyPage' });
                            });
                        } else {
                            data.pageId = this.entityId;
                            this.debug('Отправляем', data, true);
                            this.updateResearcher(data).then(() => {
                                this.$router.push({ name: 'AdminPartyPage' });
                            });
                        }
                    } else {
                        return false;
                    }
                });
            },

            /* Хэндлер удаления достижения */
            deliteAchievement(event, index) {
                this.achievementsLenght--;
                this.form.achievements.splice(index, 1);
            },

            /* Хэндлер добавления достижения */
            addAchievement() {
                this.achievementsLenght++;
                this.form.achievements.push({
                    name: '',
                    date: '',
                });
            },
        },
        async mounted() {
            /* Список исследований */
            try {
                await axios({
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
            } catch {
                this.debug('Упало: allEntityInstance?type=RESEARCH');
            }
            if (this.mode === 'edit') {
                axios({
                    method: 'GET',
                    url: '/user/allEntityInstance?type=RESEARCHER',
                }).then((response) => {
                    const formData = response.data[this.status].filter((entity) => entity.pageId === this.entityId)[0];

                    this.form.fullname = formData.name;
                    this.form.specialty = formData.specialisation;
                    this.form.email = formData.email;

                    this.form.research = formData.researchIds?.map((id) => {
                        return this.researchList.find((research) => research.id === id).value;
                    });
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

                    this.form.achievements =
                        formData.achievements?.map((i) => {
                            return {
                                name: i.name,
                                date: i.date,
                            };
                        }) || [];

                    this.debug('Получаем', formData);
                    this.debug('Данные формы', this.form);

                    /* Кол-во достижений выносим в отдельную переменную во избежание
                    вызова observer'а при редактировании инпута */
                    this.achievementsLenght = this.form.achievements.length;

                    this.loadSuccess = true;
                });
            }
            setTimeout(() => {
                this.loadSuccess = true;
            }, 500);
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
    };
</script>
<style scoped>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0 im !important;
    }

    .achievements .addAchievementsBtn {
        width: 100%;
        margin-bottom: 20px;
    }

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
