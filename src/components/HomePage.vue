<template>
  <v-container>
    <v-card class="mx-auto" width="400" prepend-icon="mdi-home">
      <template v-slot:title> Wellcome to this app! </template>

      <v-card-text> You can select your picture in the gallery </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "HomePage",
};
</script>
