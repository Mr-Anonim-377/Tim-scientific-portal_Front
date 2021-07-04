<template>
    <div v-if="loadSuccess">
        <section class="admin">
            <!--    Навигация-->
            <AdminNavigation />

            <!--      Шапка и кнопка добавить-->
            <router-link
                style="text-decoration: none"
                :to="{ name: 'UI_calendar', params: { mode: 'create' } }"
            >
                <button class="btn_add">Добавить событие</button>
            </router-link>

            <div class="admin-headers">
                <span class="admin-headers__number">№</span>
                <p class="admin-headers__left">Название</p>
                <p class="admin-headers__right">Действия</p>
            </div>

            <!--    список-->
            <AdminItemCalendar
                :section-data="availableEntities"
                type="CALENDAR"
            />
        </section>
    </div>

    <div v-else>
        <Preloader />
    </div>
</template>

<script>
import AdminNavigation from '@/components/unitComponents/AdminNavigation';
import Preloader from './../unitComponents/CommonElements/Preloader';

import mixin from '../../utils/methodsMixin';
import AdminItemCalendar from '@/components/unitComponents/AdminItemCalendar';
import axios from 'axios';
export default {
    name: 'AdminCalendarPage',
    components: {
        AdminItemCalendar,
        AdminNavigation,
        Preloader
    },
    mixins: [mixin],
    data() {
        return {
            loadSuccess: false,
            availableEntities: []
        };
    },

    created() {
        /* Проверка авторизации */
        this.authCheck()
            .then(() => {
                this.isAuth = true;
            })
            .catch(() => {
                this.$router.push({ name: 'auth' });
            });
    },

    async mounted() {
        axios({
            method: 'GET',
            url: '/user/allEntityInstance?type=CALENDAR'
        })
            .then(response => {
                this.availableEntities = response.data;
                this.debug('Доступные сущности', this.availableEntities);
            })
            .finally(() => {
                this.loadSuccess = true;
            });
    }
};
</script>

<style scoped>
.admin {
    max-width: 1200px;
    align-items: center;
    margin: 55px auto 100px auto;
    min-height: calc(100vh - 275px);
}

.admin-headers {
    display: flex;
    margin-top: 10px;
    background: #3f7e77;
    padding: 15px 0;
    color: white;
}

.admin-headers__number {
    margin: 0 0 0 14px;
}

.admin-headers__left {
    margin: auto auto auto 35px;
}

.admin-headers__right {
    margin: auto 134px auto auto;
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

.btn_add {
    background: #3f7e77;
    padding: 4px 20px;
    height: 35px;
}
</style>
