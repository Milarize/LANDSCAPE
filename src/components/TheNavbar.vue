<template>
  <div>
    <!-- App Bar -->
    <v-app-bar :color="theme === 'light' ? 'primary' : 'primary'" dark>
      <v-app-bar-nav-icon
        class="d-flex d-md-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-app-bar-title>สวนสวย</v-app-bar-title>
      
      <v-spacer></v-spacer>
      
      <!-- Desktop Menu -->
      <div class="d-none d-md-flex">
        <v-btn 
          v-for="item in menuItems" 
          :key="item.href"
          variant="text" 
          :href="item.href"
        >
          {{ item.title }}
        </v-btn>
      </div>

      <v-btn icon @click="$emit('toggle-theme')" class="ml-4">
        <v-icon>{{ theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      location="left"
      temporary
    >
      <v-list>
        <v-list-item
          prepend-avatar="/logo.png"
          :title="'สวนสวย'"
          :subtitle="'Modern Landscape Design'"
        ></v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item
          v-for="item in menuItems"
          :key="item.href"
          :href="item.href"
          @click="drawer = false"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item @click="$emit('toggle-theme')">
          <template v-slot:prepend>
            <v-icon>{{ theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny' }}</v-icon>
          </template>
          <v-list-item-title>{{ theme === 'light' ? 'โหมดกลางคืน' : 'โหมดกลางวัน' }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  theme: {
    type: String,
    required: true
  }
})

const drawer = ref(false)

const menuItems = [
  { title: 'หน้าแรก', href: '#home', icon: 'mdi-home' },
  { title: 'เกี่ยวกับเรา', href: '#about', icon: 'mdi-information' },
  { title: 'ผลงาน', href: '#portfolio', icon: 'mdi-image-multiple' },
  { title: 'บริการ', href: '#services', icon: 'mdi-tree' },
  { title: 'รีวิว', href: '#testimonials', icon: 'mdi-star' },
  { title: 'ติดต่อเรา', href: '#contact', icon: 'mdi-phone' }
]
</script>

<style scoped>
.v-navigation-drawer {
  max-width: 280px;
}

/* ปรับแต่ง transition ของ drawer */
.v-navigation-drawer--temporary {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ปรับแต่งสไตล์ของ list items */
:deep(.v-list-item) {
  min-height: 48px;
  padding: 0 16px;
  margin: 4px 8px;
  border-radius: 8px;
}

:deep(.v-list-item:hover) {
  background-color: rgba(202, 186, 156, 0.1);
}

:deep(.v-list-item--active) {
  background-color: rgba(202, 186, 156, 0.2);
}

/* ปรับแต่ง icon ใน list items */
:deep(.v-list-item__prepend) {
  margin-right: 12px;
}
</style> 