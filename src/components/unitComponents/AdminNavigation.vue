<template>
    <div class="admin-nav">
        <ul>
            <router-link
                style="text-decoration: none"
                :to="{ name: 'AdminNewsPage' }"
                ><li class="active">Новости</li></router-link
            >
            <router-link
                style="text-decoration: none"
                :to="{ name: 'AdminResearchPage' }"
                ><li>Исследования</li></router-link
            >
            <router-link
                style="text-decoration: none"
                :to="{ name: 'AdminCalendarPage' }"
                ><li>События</li></router-link
            >

            <router-link
                style="text-decoration: none"
                :to="{ name: 'AdminPartyPage' }"
                ><li>Исследователи</li></router-link
            >

            <router-link
                style="text-decoration: none"
                :to="{ name: 'AdminDocumentPage' }"
                ><li>Документы</li></router-link
            >
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AdminNavigation',
};
</script>

<style scoped>
.disable {
    opacity: 0.5;
    cursor: auto;
}

.admin-nav {
    margin-bottom: 54px;
}

ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
}

li {
    list-style-type: none;
    cursor: pointer;
    color: #3f7e77;
    margin: 0;
    padding: 10px 49px;
    border: 1px solid #3f7e77;
    border-radius: 10px;
}

li.active:hover {
    background: #3f7e77;
    color: white;
}
</style>
