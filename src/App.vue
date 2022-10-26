<template>
  <v-app>
    <v-main>
      <SideBar />
      <router-view />
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    SideBar,
    FooterComponent,
  },
};
</script>
