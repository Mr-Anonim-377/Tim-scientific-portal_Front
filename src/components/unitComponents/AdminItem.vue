<template>
    <div class="admin-elements">
        <div
            v-for="(item, i) in sectionData"
            :key="item"
            class="admin-elements__text"
            :class="{ active: i === active }"
            @click="active = i"
        >
            <span class="admin-items__number">{{ i + 1 }}</span>
            <p>{{ item.name }}</p>
            <div class="admin-elements__btn">
                <router-link
                    style="text-decoration: none"
                    :to="{
                        name: `${formName}`,
                        params: { mode: 'edit', entityId: item.pageId },
                    }"
                >
                    <button class="btn_edit">Редактировать</button>
                </router-link>
                <button class="btn_delete" @click="deleteNews(item.pageId)">
                    Удалить
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AdminItem',
    props: {
        sectionData: Object,
        formName: String,
        type: String,
    },
    data() {
        return {
            active: false,
        };
    },

    methods: {
        deleteNews(id) {
            axios({
                method: 'DELETE',
                url: '/user/delete',
                params: { pageId: id, entityType: this.type },
            }).then(() => {
                this.$router.go();
            });
        },
    },
};
</script>

<style scoped>
.admin-items__number {
    margin: auto 42px auto 10px;
}

.admin-elements__text p {
    width: 75%;
}

button {
    padding: 4px 10px;
    margin: 0 2px;
    height: 33px;
    color: white;
    font-weight: bold;
    border: 1px solid #f8f5e6;
    border-radius: 10px;
}

button:hover {
    color: #3f7e77;
    background: white;
    border: 1px solid #3f7e77;
}

.btn_delete {
    background: red;
}

.btn_edit {
    background: yellowgreen;
}

.active {
    color: white;
    background: yellowgreen;
}

.admin-elements {
    background: #f8f5e6;
}

.admin-elements__text {
    display: flex;
    margin: 0;
    padding: 0 5px;
    border-bottom: 1px solid black;
}

.admin-elements__text:last-child {
    border-bottom: none;
}

.admin-elements__btn {
    margin: auto 0 auto auto;
}
</style>
