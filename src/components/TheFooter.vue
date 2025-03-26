<template>
  <v-footer color="primary" class="text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="(social, index) in socials"
        :key="index"
        :icon="social.icon"
        variant="text"
      ></v-btn>
    </div>
    <div class="text-h6 mt-4">
      &copy; {{ new Date().getFullYear() }} สวนสวย. สงวนลิขสิทธิ์.
    </div>
  </v-footer>
</template>

<script setup>
const socials = [
  { name: 'Facebook', icon: 'mdi-facebook' },
  { name: 'LINE', icon: 'mdi-line' },
  { name: 'Instagram', icon: 'mdi-instagram' }
]
</script> 