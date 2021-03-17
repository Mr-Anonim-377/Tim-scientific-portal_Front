<template>
<section class="calendar">

  <div class="calendar-container-banner">
    <TitleSection :styleTitle="styleTitle.style" :title="this.titleCalendar" :headerVisible="visibleCalendar" />
    <div class="banner-date">
      04.01.2021
    </div>
    <p>Москва, Россия</p>
  </div>

  <div class="calendar-container-information">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    
    <div class="information-img">
      <div class="img-block">
        <img src="https://www.timacad.ru/uploads/media/cache/full_image/uploads/images/20180709/1531153061_1530284873_b_img5ad5b4b2609317.59118158.jpg">
      </div>

      <div class="img-block">
        <img src="https://www.timacad.ru/uploads/media/cache/full_image/uploads/images/20180709/1531153061_1530284873_b_img5ad5b4b2609317.59118158.jpg">
      </div>

      <div class="img-block">
        <img src="https://www.timacad.ru/uploads/media/cache/full_image/uploads/images/20180709/1531153061_1530284873_b_img5ad5b4b2609317.59118158.jpg">
      </div>

    </div>

  </div>

</section>
</template>

<script>
import TitleSection from '../unitComponents/TitleSection';
export default {
name: "CalendarPage",
  components:{
    TitleSection
  },
  data() {
   return{
      titleCalendar: 'Название первой новости из календаря событий',
      visibleCalendar: false,
      /**
       * Стили
       */
      styleTitle: {
        style: ['font-size: 26px; letter-spacing: 0.06em; max-width: 1200px; margin: 10px auto 0 auto'],
      },
    }
  }
}
</script>

<style scoped>
p{
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #F8F5E6;
}

.calendar{
  margin: auto;
}

.calendar-container-banner{
  width: 100%;
  background: linear-gradient(0deg, rgba(63, 126, 119, 0.8), rgba(63, 126, 119, 0.8)), url("../../assets/image/calendarBackgroundPage.png");
  background-size: cover;
  margin: auto;
  padding: 96px 0 158px 0;
}

.banner-date{
  width: 282px;
  height: 45px;
  background: #F8F5E6;
  margin: 39px auto 41px auto;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 132.19%;
  letter-spacing: 0.2em;
  color: #3F7E77;
}

.calendar-container-information{
  max-width: 1200px;
  margin: 129px auto 102px auto;
}

.calendar-container-information p{
  font-size: 14px;
  line-height: 150%;
  color: #4D5668;
  text-align: left;
  margin-bottom: 111px;
}

.information-img{
  display: flex;
  justify-content: space-between;
}

.img-block{
  width: 341px;
  height: 226px;
}

.img-block img{
  width: 100%;
  height: 100%;
}
</style>