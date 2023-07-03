<template>
  <div class="sidebar">
    <nav v-if="sideVisible" class="sidebar__navigation">
      <div class="sidebar__navigation_main">
        <router-link class="main__page" to="/">Главная</router-link>
        <router-link class="calendar__page" to="/calendar">Календарь</router-link>
        <router-link class="todo__page" to="/todolist">Список дел</router-link>
      </div>
      <router-link class="personal__page" to="/personal">Личный кабинет</router-link>
    </nav>
    <div v-else class="hidden__navigation">
      <div class="hidden__navigation_main">
        <div class="main__page" :class="{ 'active': isActive('/') }"></div>
        <div class="calendar__page" :class="{ 'active': isActive('/calendar') }"></div>
        <div class="todo__page" :class="{ 'active': isActive('/todolist') }"></div>
      </div>
      <div class="personal__page" :class="{ 'active': isActive('/personal') }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSidebar",
  props: {
    sideVisible: Boolean
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    }
  }
}
</script>

<style lang="scss" scoped>

$activeColor: #ffffff;

@mixin after($content_value) {
  position: absolute;
  top: 0;
  right: 15px;
  font-family: "icomoon";
  font-size: 30px;
  content: $content_value;
}
@mixin page() {
  width: 100%;
  text-align: right;
  position: relative;
  padding-right: 60px;
}

@function setColor($color) {
  $activeColor: $color;
}

.sidebar {
  background-color: #fdfcfc;
  z-index: 2;
}

.router-link-exact-active {
  background-color: #ceeaff;
}
.active {
  color: #1a9bf8;
}

.sidebar__navigation {
  height: 100%;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 80px 0 30px;
  line-height: 40px;
  border-right: 2px solid #2c3e50;

  .sidebar__navigation_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 18px;
  }
}

.hidden__navigation {
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px 0 30px;
  line-height: 40px;
  .hidden__navigation_main {
    display: flex;
    flex-direction: column;
    div {
      height: 40px;
    }
  }
  .personal__page {
    height: 40px;
  }
}

.main__page:after {
  @include after("\f015")
}
.main__page {
  @include page()
}
.calendar__page:after {
  @include after("\f073")
}
.calendar__page {
  @include page()
}
.todo__page:after {
  @include after("\f022")
}
.todo__page {
  @include page()
}
.personal__page:after {
  @include after("\f2be")
}
.personal__page {
  @include page()
}

</style>