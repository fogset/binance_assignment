<template>
  <div class="leftMenu_Dashboard">
    <router-link to="/">Dashboard </router-link>
  </div>
  <div class="leftMenu_List">
    <router-link to="/List">List </router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.leftMenu_Dashboard {
  font-size: 30px;
  position: absolute;
  left: 50px;
  top: 300px;
}

.leftMenu_List {
  font-size: 30px;
  position: absolute;
  left: 50px;
  top: 400px;
}

leftMenu a.router-link-exact-active {
  color: #42b983;
}
</style>
