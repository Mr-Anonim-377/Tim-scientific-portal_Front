<template>
    <div v-if="fieldData" class="form block__item">
        <h3>{{ fieldName }}</h3>
        <p class="edit-text">
            {{ fieldData }}
        </p>
    </div>
</template>
<script>
export default {
    name: 'ProfileField',
    props: {
        fieldData: {
            type: String,
            default: '',
        },
        fieldName: {
            type: String,
            default: '',
        },
    },
};
</script>
<style scoped>
h2 {
    width: 100%;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #3f7e77;
    margin: 0 0 7px 0;
}

p {
    font-weight: bold;
    font-size: 12px;
    line-height: 19px;
    color: #3f7e77;
}

img {
    width: auto;
    height: 100%;
    background: #c4c4c4;
    background-size: contain;
}

.project-container-block img {
    width: 60px;
    height: 60px;
    padding: 2px;
    border: 3px solid #3f7e77;
    border-radius: 50%;
    margin: 0;
}

.project-container-block p {
    font-weight: 600;
    font-size: 9px;
    line-height: 11px;
    text-align: center;
    color: #3f7e77;
    width: 61px;
    max-height: 22px;
    overflow: hidden;
    margin: 0 auto 13px auto;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.form-block__content h3 {
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    background-color: #3f7e77;
    position: relative;

    padding: 10px;
    color: white;
    border-radius: 20px;
    text-align: center;
}

.headerSection__inp :active,
:hover,
:focus {
    outline: 0;
    outline-offset: 0;
}

::-webkit-input-placeholder {
    color: rgba(63, 126, 119, 0.5);
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
}

.edit-text {
    margin: 20px 0 30px 5px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #3f7e77;
}
</style>
