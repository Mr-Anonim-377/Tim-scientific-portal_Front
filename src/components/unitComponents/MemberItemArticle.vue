// УЧАСТНИК ИССЛЕДОВАНИЯ СО СТРАНИЦЫ ИССЛЕДОВАНИЯ

<template>
    <article>
        <div class="memberItem__image">
            <div
                class="memberItem__imageContainer"
                :style="{ backgroundImage: `url(${articleData.image})` }"
            ></div>
        </div>

        <div class="memberItem__textContent">
            <p class="memberItem__memberName">{{ articleData.title }}</p>
            <p>{{ articleData.text }}</p>
        </div>
    </article>
</template>

<script>
export default {
    name: 'MemberItemSection',
    props: {
        articleData: {}
    }
};
</script>

<style scoped>
article {
    color: #3f7e77;
    width: 209px;
    margin-bottom: 50px;
    color: #3f7e77;
}

.memberItem__image {
    width: 209px;
    height: 209px;
    border: 3px solid #3f7e77;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.memberItem__imageContainer {
    width: 80%;
    height: 80%;
    border-radius: 100%;
    background-position: center;
    background-size: cover;
}

.memberItem__textContent {
    text-align: center;
    color: #3f7e77;
}

.memberItem__memberName {
    font-size: 15px;
    color: #3f7e77;
}

.memberItem__textContent > p:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
}

.memberItem__textContent > p:last-child::before,
.memberItem__textContent > p:last-child::after {
    content: '';
    margin: 10px;
    display: block;
    width: 35px;
    height: 1px;
    background-color: #3f7e77;
}
</style>
