<template>
    <!-- Форма добавления/редактирования исследователя -->
    <!-- Документация по UI: https://element-plus.org/ -->
    <div v-if="loadSuccess">
        <!-- // * ФИО -->
        <!-- // * Дата рождения -->
        <!-- // * Специальность -->
        <!-- // * Фото профиля -->
        <!-- // ! Связанные исследования -->
        <!-- // *  Электронная почта -->
        <!-- // ! Достижения -->

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
                <!-- // TODO   -->
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

                <!-- Поле "Связанные исследователи" -->
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Исследования</h1>
                        <el-form-item prop="research2" required>
                            <el-select v-model="form.research" multiple placeholder="Select">
                                <el-option v-for="item in from.research" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Поле "Фото профиля" -->
                <el-row type="flex" justify="center">
                    <el-col>
                        <!-- Изображения -->
                        <h1>Фотография профиля</h1>
                        <el-form-item>
                            <!-- // TODO Почистить от лишнего -->
                            <el-upload
                                class="upload-demo"
                                action="https://api.imgbb.com/1/upload"
                                multiple
                                :data="requestData"
                                list-type="picture"
                                :limit="1"
                                :file-list="previewImage.avatar"
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
            </el-form>
        </section>
    </div>
    <div v-else>
        <Preloader />
    </div>
</template>
<script>
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
                    research: [{ value: 'Исследование 1' }, { value: 'Исследование 2' }, { value: 'Исследование 3' }, { value: 'Исследование 4' }],
                },
                rules: {
                    // !
                    fullname: [],
                    // !
                    specialty: [],
                    // !
                    email: [],
                    // !
                    avatar: [],
                    //!
                    dateOfBirth: [],
                    // !
                    research: [],
                },

                previewImage: {
                    avatar: [],
                },

                /* При загрузке изображений отправляем api key imgBB
                   Если что-то пойдет не так, получить новый можно тут:
                   https://api.imgbb.com/ */
                requestData: {
                    key: '2ca9c35e0d42896ec7e746b5daf2c924',
                },

                // ? temp
                researcherList: [1, 2, 3, 4],
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
        },
        async mounted() {
            console.log(this.mode);
            //* await this.getModulesTest('');
            setTimeout(() => {
                this.loadSuccess = true;
            }, 500);
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

    .hiddenInput {
        display: none;
        margin: 0;
    }

    .hiddenFormItem {
        margin: 0;
    }
</style>
