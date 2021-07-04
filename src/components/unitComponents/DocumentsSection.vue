<template>
    <section v-for="doc in sectionData.DOC" :key="doc" class="documentSection">
        <a :href="doc.link" target="_blank">
            <p class="documentSection__text-name">
                {{ localData?.title || doc.title }}
            </p>
        </a>
        <p v-if="doc.date" class="documentSection__text-data">
            от {{ doc.date }}
        </p>
    </section>
</template>

<script>
export default {
    name: 'DocumentsSection',
    props: {
        sectionData: Object,
        /* Локальная дата */
        localData: Object
    }
};
</script>

<style scoped>
a {
    z-index: 10;
}

a:link,
a:visited,
a:active,
a:hover {
    text-decoration: none;
    color: black;
}
p {
    font-size: 15px;
    line-height: 18px;
    color: #a6abb4;
    margin: 0;
    height: auto;
}

.documentSection {
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

.documentSection__text-name {
    color: #3f7e77;
    position: relative;
    margin-right: 7px;
    cursor: pointer;
    height: auto;
    justify-content: justify;
}

.documentSection__text-name:before {
    content: '';
    background-image: url('../../assets/image/PDF.svg');
    position: absolute;
    width: 20px;
    height: 20px;
    left: -28px;
    top: -1px;
}

.documentSection__text-data {
    width: 100%;
    margin: 13px 0 0 0;
}
</style>
