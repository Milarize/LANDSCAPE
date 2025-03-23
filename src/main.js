import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#2E7D32', // เขียวเข้ม
          secondary: '#4CAF50', // เขียว
          accent: '#8BC34A', // เขียวอ่อน
          background: '#FFFFFF', // พื้นหลังขาว
          surface: '#F5F5F5', // พื้นผิวสีเทาอ่อน
          text: '#333333', // ข้อความสีเข้ม
          'on-background': '#333333',
          'on-surface': '#333333',
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#caba9c', // เขียวเข้ม
          secondary: '#caba9c', // เขียวกลางโทน
          accent: '#caba9c', // เขียวอ่อน
          background: '#4d2d18', // น้ำตาลเข้ม
          surface: '#caba9c', // น้ำตาลเข้ม
          text: '#FAFAFA', // ข้อความสีขาว
          'on-background': '#FAFAFA', // ข้อความบนพื้นหลัง
          'on-surface': '#FAFAFA', // ข้อความบนพื้นผิว
        }
        
      }
    }
  },
  defaults: {
    global: {
      font: {
        family: 'Prompt'
      }
    },
    VApp: {
      style: 'font-family: "Prompt", sans-serif;'
    },
    VBtn: {
      style: 'font-family: "Prompt", sans-serif;'
    },
    VCard: {
      style: 'font-family: "Prompt", sans-serif;'
    },
    VTextField: { fontFamily: 'Prompt' },
    VList: { fontFamily: 'Prompt' },
    VAppBar: { fontFamily: 'Prompt' },
    VFooter: { fontFamily: 'Prompt' },
  },
})

const app = createApp(App)
app.use(vuetify)
app.mount('#app')
