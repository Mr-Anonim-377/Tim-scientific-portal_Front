<template>
    <!-- Форма добавления/редактирования исследователя -->
    <!-- Документация по UI: https://element-plus.org/ -->
    <div v-if="loadSuccess">
        <section>
            <TitleSection
                :title="
                    mode === 'create'
                        ? 'Добавление профиля исследователя'
                        : 'Редактирование профиля исследователя'
                "
                :header-visible="true"
            />

            <el-form ref="form" :model="form" class="form" :rules="rules">
                <!-- Поле ФИО -->
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>ФИО</h1>
                        <el-form-item prop="fullname">
                            <el-input
                                v-model="form.fullname"
                                type="textarea"
                                maxlength="50"
                                :autosize="true"
                                resize="none"
                                placeholder="ФИО исследователя"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Электронная почта</h1>
                        <el-form-item>
                            <el-input
                                v-model="form.email"
                                type="textarea"
                                maxlength="50"
                                :autosize="true"
                                resize="none"
                                placeholder="Специальность исследователя"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Поле "Ученая степень" -->
                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Ученая степень</h1>
                        <el-form-item prop="specialty">
                            <el-input
                                v-model="form.specialty"
                                type="textarea"
                                maxlength="100"
                                :autosize="true"
                                resize="none"
                                placeholder="Ученая степень исследователя"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Ученое звание</h1>
                        <el-form-item>
                            <el-input
                                v-model="form.academicRank"
                                type="textarea"
                                maxlength="200"
                                :autosize="true"
                                resize="none"
                                placeholder="Ученое звание"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Образование</h1>
                        <el-form-item>
                            <el-input
                                v-model="form.education"
                                type="textarea"
                                maxlength="100"
                                :autosize="true"
                                resize="none"
                                placeholder="Образование"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Область научных интересов</h1>
                        <el-form-item>
                            <el-input
                                v-model="form.scientificInterests"
                                type="textarea"
                                maxlength="600"
                                :autosize="true"
                                resize="none"
                                placeholder="Область научных интересов"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col>
                        <h1>Публикационная активность</h1>
                        <el-form-item>
                            <el-input
                                v-model="form.publicationActivity"
                                type="textarea"
                                maxlength="600"
                                :autosize="true"
                                resize="none"
                                placeholder="Публикационная активность"
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
                            <el-select
                                v-model="form.research"
                                multiple
                                placeholder="Выберите исследования, в которых принимал участие исследователь"
                            >
                                <el-option
                                    v-for="item in researchList"
                                    :key="item.value"
                                    :label="item.value"
                                    :value="item.value"
                                >
                                </el-option>
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
                                <el-button size="middle" type="success" plain
                                    >Выберите изображение</el-button
                                >
                                <template #tip>
                                    <div class="el-upload__tip">
                                        1 изображение для отображения на
                                        странице профиля исследователя
                                    </div>
                                    <div class="el-upload__tip">
                                        jpg/png файл размером не более 500кб
                                    </div>
                                </template>
                            </el-upload>
                        </el-form-item>

                        <!-- Скрытый form-item для валидации загрузки превью -->
                        <el-form-item class="hiddenFormItem" prop="avatar">
                            <el-input
                                v-model="form.preview"
                                class="hiddenInput"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <!-- Поле "" -->
                <div class="achievements">
                    <h1>Награды и премии</h1>
                    <el-row
                        v-for="(ach, index) in achievementsLenght"
                        :key="index"
                        type="flex"
                        justify="center"
                        :gutter="20"
                    >
                        <el-col :span="12">
                            <el-form-item
                                :prop="'achievements.' + index + '.name'"
                                :rules="[
                                    {
                                        required: true,
                                        message:
                                            'Пожалуйста, заполните название награды',
                                        trigger: 'blur',
                                    },
                                ]"
                            >
                                <el-input
                                    v-model="form.achievements[index].name"
                                    show-word-limit
                                    maxlength="50"
                                >
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item
                                :prop="'achievements.' + index + '.date'"
                                :rules="[
                                    {
                                        required: true,
                                        message:
                                            'Пожалуйста, заполните год получения награды',
                                        trigger: 'blur',
                                    },
                                    {
                                        max: 4,
                                        min: 4,
                                        trigger: blur,
                                        message:
                                            'Пожалуйста, укажите корректный год награды',
                                    },
                                ]"
                            >
                                <el-input
                                    v-model="form.achievements[index].date"
                                    maxlength="4"
                                    type="number"
                                    show-word-limit
                                    placeholder="Год"
                                >
                                    <template #append>
                                        <el-button
                                            placeholder="Please input"
                                            clearable
                                            @click="
                                                deliteAchievement(event, index)
                                            "
                                        >
                                            Удалить награду</el-button
                                        >
                                    </template>
                                </el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-button
                            class="addAchievementsBtn"
                            @click="addAchievement"
                            >Добавить награду</el-button
                        >
                    </el-row>
                </div>

                <div class="submitWrapper">
                    <el-form-item>
                        <el-button
                            class="submitButton"
                            type="primary"
                            @click="onSubmit('form')"
                            >{{
                                mode === 'create'
                                    ? 'Добавить исследователя'
                                    : 'Редактировать исследователя'
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
    name: 'Pagename',
    components: {
        TitleSection,
        Preloader,
    },
    mixins: [mixin],
    props: {
        mode: String,
        entityId: String,
        status: String,
    },
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
                research: [],
                achievements: [],
                academicRank: '',
                education: '',
                publicationActivity: '',
            },
            /* Объект */

            rules: {
                fullname: [
                    {
                        required: true,
                        message: "Пожалуйста, заполните поле 'ФИО'",
                        trigger: 'blur',
                    },
                    {
                        min: 10,
                        message: 'ФИО должно содержать минимум 10 символов',
                    },
                ],

                specialty: [
                    {
                        required: true,
                        message: "Пожалуйста, заполните поле 'Специальность'",
                        trigger: 'blur',
                    },
                    {
                        min: 5,
                        message:
                            'Название специальности должно содержать минимум 5 символов',
                    },
                ],
                email: [
                    {
                        required: true,
                        message: 'Пожалуйста, заполните поле email адреса',
                        trigger: 'blur',
                    },
                    {
                        type: 'email',
                        message: 'Пожалуйста, введите корректный email',
                    },
                ],

                avatar: [
                    {
                        required: true,
                        message:
                            'Для корректного отображения анкеты исследователя необхоидимо загрузить аватар',
                        trigger: 'blur',
                    },
                ],

                academicRank: [],
                education: [],
                scientificInterests: [],
                publicationActivity: [],
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
                const formData = response.data[this.status].filter(
                    (entity) => entity.pageId === this.entityId
                )[0];

                this.form.fullname = formData.name;
                this.form.specialty = formData.specialisation;
                this.form.email = formData.email;

                this.form.research = formData.researchIds?.map((id) => {
                    return this.researchList.find(
                        (research) => research.id === id
                    ).value;
                });
                this.form.avatar = formData.imageLink;
                this.previewImages.avatar = [
                    {
                        name: 'Изображение профиля',
                        url: formData.imageLink,
                    },
                ];

                this.form.achievements =
                    formData.achievements?.map((i) => {
                        return {
                            name: i.name,
                            date: i.date,
                        };
                    }) || [];

                /* Ученая степень */
                this.form.academicВegree = formData?.academicВegree || '';
                /* Ученое звание */
                this.form.academicRank = formData?.academicRank || '';
                /* Образование */
                this.form.education = formData?.education || '';
                /* Область научных интересов */
                this.form.scientificInterests =
                    formData?.scientificInterests || '';
                /* Публикационная активность */
                this.form.publicationActivity =
                    formData?.publicationActivity || '';

                this.debug('Получаем', formData);
                this.debug('Данные формы', this.form);

                /* Кол-во наград выносим в отдельную переменную во избежание
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

    methods: {
        getRequestData() {
            const form = this.form;
            return {
                achievements: form.achievements,
                imageLink: form.avatar,
                email: form.email,
                institution: form.tag,
                name: form.fullname,
                pageId: this.entityId,
                researchIds: form.research.map((researchName) => {
                    return this.researchList.find(
                        (research) => research.value === researchName
                    ).id;
                }),
                specialisation: form.specialty,
                tag: form.tag,

                academicRank: form.academicRank,
                education: form.education,
                scientificInterests: form.scientificInterests,
                publicationActivity: form.publicationActivity,
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

        /* Хэндлер удаления награды */
        deliteAchievement(event, index) {
            this.achievementsLenght--;
            this.form.achievements.splice(index, 1);
        },

        /* Хэндлер добавления награды */
        addAchievement() {
            this.achievementsLenght++;
            this.form.achievements.push({
                name: '',
                date: '',
            });
        },
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
