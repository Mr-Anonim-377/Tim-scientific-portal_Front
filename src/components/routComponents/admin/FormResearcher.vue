<template>
    <!-- Форма добавления/редактирования исследователя -->
    <!-- Документация по UI: https://element-plus.org/ -->
    <div v-if="loadSuccess">
        <section>
            <TitleSection
                :title="mode === 'create' ? 'Добавление профиля исследователя' : 'Редактирование профиля исследования'"
                :headerVisible="true"
            />

            <el-form :model="form" class="form" :rules="rules" ref="form">
                <!-- Поле ФИО -->
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>ФИО</h1>
                        <el-form-item prop="fullname" required>
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
                        <el-form-item prop="dateOfBirth" required>
                            <el-input
                                type="date"
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
                        <el-form-item prop="specialty" required>
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
                        <el-form-item prop="email" required>
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
                                v-model="form.progress"
                                multiple
                                filterable
                                default-first-option
                                placeholder="Выберите исследования, в которых принимал участие исследователь"
                                allow-create
                            >
                                <el-option v-for="item in progressList" :key="item.value" :label="item.value" :value="item.value"> </el-option>
                            </el-select>
                        </el-form-item>
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
    TODO Написать валидацию для обязательных параметров
    TODO Инпут даты

    Работа с данными:
    ! Запросить у Антона тестовый акк
    ! Внести правки в верстку
    ! Парс данных для формы

    Финальные штрихи:
    TODO Редирект

     Методы:
    ! Добавление, редактирование
    
    */
    import TitleSection from '../../unitComponents/TitleSection';
    //* import mixin from '../../utils/methodsMixin';
    import Preloader from './../../unitComponents/CommonElements/Preloader';

    export default {
        name: 'pagename',
        components: {
            TitleSection,
            Preloader,
        },
        props: {
            mode: String,
            //* entityId: String,
        },
        // mixins: [mixin],
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
                    progress: [],
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
                    /* TODO Валидация емейла */
                    email: [],

                    avatar: [
                        {
                            required: true,
                            message: 'Для корректного отображения анкеты исследователя необхоидимо загрузить аватар',
                            trigger: 'blur',
                        },
                    ],

                    /* TODO Валидация даты */
                    dateOfBirth: [],

                    /* TODO Валидация селекта */
                    research: [],

                    /* TODO Валидация селекта */
                    progress: [],
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
            /* Хук успешной загрузки изображения (аватар)
               При успешной загрузке заполняем скрытый инпут урлом из ответа */
            successLoadHookAvatar(res) {
                this.form.avatar = res.data.url;
            },

            /* Хук удаления изображения (аватар) */
            removeImageHookPreview() {
                this.form.avatar = '';
            },

            onSubmit(form) {
                console.log(this.$refs[form]);
            },
        },
        async mounted() {
            //* await this.getModulesTest('');
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
