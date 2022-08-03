<template>
  <div class="home">
    <h1>This is an Dashboard page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "HomeView",
  components: {
    Header,
  },
};
</script>

<style>
.home {
  font-size: 25px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
