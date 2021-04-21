<template>
    <!-- test -->
    <section>
        <TitleSection title="Форма редактирования сущности" :headerVisible="true" />
        <div class="form">
            <!-- Название новости -->
            <h1>Название новости</h1>
            <el-input v-model="title" placeholder="Название"></el-input>

            <!-- Дата -->

            <!-- <el-date-picker v-model="date" type="date" placeholder="Pick a day"> </el-date-picker> -->

            <!-- Изображения -->

            <h1>Изображения</h1>
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
            >
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <el-button size="small" type="primary">Изображения для слайдера новостей</el-button>
            </el-upload>

            <!-- Текст -->
            <h1>Тело новости</h1>
            <el-input @input="clg" type="textarea" :rows="2" placeholder="Тело новости" v-model="text"> </el-input>

            <!-- Превью -->
        </div>
    </section>
</template>

<script>
    import TitleSection from '../unitComponents/TitleSection.vue';

    export default {
        name: 'UI test',
        components: {
            TitleSection,
        },

        methods: {
            clg() {
                console.log(this.text.split('\n'));
            },
        },

        data() {
            return {
                title: '',
                date: '',
                text: '',
            };
        },
    };
</script>

<style scoped>
    section {
        width: 1200px;
        margin: 100px auto;
        min-height: calc(100vh - 275px);
    }

    .avatar-uploader {
        border: 1px dashed black;
        border-radius: 6px;
        width: 100px;
        height: 100px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        margin: 50px auto;
    }
    .avatar-uploader:hover {
        border-color: #409eff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        line-height: 113px;
        text-align: center;
    }
    .avatar {
        width: 100px;
        height: 100px;
        display: block;
    }
</style>
