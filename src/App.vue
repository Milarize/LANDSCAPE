<template>
  <v-app :theme="theme">
    <TheNavbar 
      :theme="theme"
      @toggle-theme="toggleTheme"
    />

    <v-main :class="theme === 'light' ? 'bg-background' : 'bg-background'">
      <v-container fluid class="pa-0">
        <!-- Home Section -->
        <v-section id="home" class="min-h-screen bg-grey-lighten-4">
          <v-container class="py-16">
            <v-row justify="space-between" align="center" class="min-h-screen">
              <!-- Left Content -->
              <v-col cols="12" md="5" class="text-left">
                <v-img
                  src="/logo.png"
                  max-width="150"
                  class="mb-8"
                  alt="Logo"
                ></v-img>
                <BaseHeader
                  tag="h1"
                  size="h2"
                  weight="black"
                  color="primary"
                  margin="mb-4"
                >
                  MODERN<br>
                  LANDSCAPE<br>
                  DESIGN
                </BaseHeader>
                <BaseText
                  size="body-1"
                  color="text"
                  margin="mb-8"
                  style="max-width: 500px;"
                >
                  ออกแบบและจัดสวนด้วยสไตล์โมเดิร์น สร้างสรรค์พื้นที่สีเขียวที่ลงตัวกับบ้านของคุณ
                  ด้วยทีมงานมืออาชีพที่พร้อมให้คำปรึกษาและดูแล
                </BaseText>
                <v-btn 
                  color="primary" 
                  size="x-large" 
                  class="text-none px-8 py-3 mr-4"
                  rounded
                >
                  ดูผลงาน <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
                <v-btn 
                  variant="outlined"
                  color="primary" 
                  size="x-large" 
                  class="text-none px-8 py-3"
                  rounded
                >
                  ติดต่อเรา
                </v-btn>
              </v-col>
              
              <!-- Right Content -->
              <v-col cols="12" md="7" class="d-flex justify-end">
                <v-img
                  src="/house.jpg"
                  max-width="800"
                  class="modern-house-image"
                  cover
                  alt="Modern House Design"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-section>

        <!-- About Section -->
        <v-section id="about" class="py-16">
          <v-container>
            <BaseHeader
              size="h3"
              center
              margin="mb-12"
            >
              เกี่ยวกับเรา
            </BaseHeader>
            
            <!-- Profile Card -->
            <v-row class="mb-12">
              <v-col cols="12">
                <v-card class="profile-card">
                  <v-row>
                    <v-col cols="12" md="4" class="profile-image-section pa-8">
                      <v-avatar size="280" class="profile-avatar">
                        <v-img
                          src="/profile.jpg"
                          alt="YNWA Profile"
                          cover
                          class="profile-image"
                        ></v-img>
                      </v-avatar>
                   
                    </v-col>

                    <v-col cols="12" md="8" class="profile-content pa-8">
                      <BaseHeader
                        tag="h3"
                        size="h3"
                        weight="bold"
                        color="caba9c"
                        margin="mb-2"
                      >
                        ปรัชญา ตกแต่ง
                      </BaseHeader>

                      <BaseText
                        size="subtitle-1"
                        color="caba9c"
                        margin="mb-6"
                        class="profile-title"
                      >
                        ผู้เชี่ยวชาญด้านการออกแบบและจัดสวน
                      </BaseText>

                      <v-divider class="mb-6"></v-divider>

                      <div class="stats-grid mb-6">
                        <div class="stat-item" v-for="(stat, index) in [
                          { icon: 'mdi-calendar-check', value: '10+', label: 'ปีประสบการณ์', color: '#caba9c' },
                          { icon: 'mdi-home-variant', value: '200+', label: 'โครงการสำเร็จ', color: '#ba9787' },
                          { icon: 'mdi-heart', value: '100%', label: 'ลูกค้าพึงพอใจ', color: '#4d2d18' }
                        ]" :key="index">
                          <div class="stat-icon-wrapper" :style="`background-color: ${stat.color}15`">
                            <v-icon :color="stat.color" size="32" :icon="stat.icon"></v-icon>
                          </div>
                          <div class="stat-value" :style="`color: ${stat.color}`">{{ stat.value }}</div>
                          <div class="stat-label">{{ stat.label }}</div>
                        </div>
                      </div>

                      <BaseText
                        size="body-1"
                        color="text"
                        margin="mb-6"
                        class="profile-description"
                      >
                        ด้วยประสบการณ์กว่า 10 ปีในการออกแบบและจัดสวน เรามุ่งมั่นที่จะสร้างสรรค์พื้นที่สีเขียวที่สวยงามและยั่งยืน 
                        เพื่อให้ลูกค้าได้มีพื้นที่พักผ่อนที่เป็นธรรมชาติและตอบโจทย์การใช้งาน
                      </BaseText>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>

            <!-- Experience Cards -->
            <v-row>
              <v-col cols="12" md="6">
                <v-card class="experience-card" elevation="0">
                  <div class="card-content pa-8">
                    <div class="d-flex align-center mb-6">
                      <div class="icon-wrapper mr-6">
                        <v-icon
                          icon="mdi-certificate-outline"
                          size="32"
                          color="#caba9c"
                        ></v-icon>
                      </div>
                      <div>
                        <BaseHeader
                          tag="h3"
                          size="h4"
                          weight="bold"
                          color="caba9c"
                          margin="mb-2"
                        >
                          ประสบการณ์กว่า 10 ปี
                        </BaseHeader>
                        <BaseText
                          size="body-1"
                          color="text"
                        >
                          ทีมงานของเรามีประสบการณ์ในการออกแบบและจัดสวนมาอย่างยาวนาน พร้อมให้คำปรึกษาและบริการที่ตรงใจคุณ
                        </BaseText>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card class="experience-card" elevation="0">
                  <div class="card-content pa-8">
                    <div class="d-flex align-center mb-6">
                      <div class="icon-wrapper mr-6">
                        <v-icon
                          icon="mdi-account-group-outline"
                          size="32"
                          color="#caba9c"
                        ></v-icon>
                      </div>
                      <div>
                        <BaseHeader
                          tag="h3"
                          size="h4"
                          weight="bold"
                          color="caba9c"
                          margin="mb-2"
                        >
                          ทีมงานมืออาชีพ
                        </BaseHeader>
                        <BaseText
                          size="body-1"
                          color="text"
                        >
                          เรามีทีมงานที่เชี่ยวชาญด้านการออกแบบสวน การจัดวางองค์ประกอบ และการดูแลรักษาสวน
                        </BaseText>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="py-16">
          <v-container>
            <BaseHeader
              size="h3"
              center
              margin="mb-12"
              color="caba9c"
            >
              ผลงานของเรา
            </BaseHeader>
            <v-row>
              <v-col v-for="(garden, index) in gardens" :key="index" cols="12" md="4">
                <v-card class="garden-card" height="300" @click="openGardenDialog(garden)">
                  <v-img
                    :src="garden.image"
                    height="100%"
                    cover
                  >
                    <div class="garden-overlay d-flex align-center justify-center">
                      <BaseHeader
                        tag="h3"
                        size="h4"
                        weight="bold"
                        color="white"
                        center
                      >
                        {{ garden.title }}
                      </BaseHeader>
                    </div>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>

            <!-- Garden Detail Dialog -->
            <v-dialog v-model="showGardenDialog" max-width="800">
              <v-card class="garden-detail-card" elevation="0">
                <v-img
                  :src="selectedGarden?.image"
                  height="400"
                  cover
                  class="garden-detail-image"
                >
                  <div class="garden-detail-overlay">
                    <div class="d-flex justify-space-between align-center pa-6">
                      <BaseHeader
                        tag="h2"
                        size="h3"
                        weight="bold"
                        color="white"
                      >
                        {{ selectedGarden?.title }}
                      </BaseHeader>
                      <v-btn
                        icon="mdi-close"
                        variant="text"
                        color="white"
                        size="small"
                        @click="showGardenDialog = false"
                      ></v-btn>
                    </div>
                  </div>
                </v-img>

                <div class="pa-8 garden-detail-content">
                  <v-row class="mb-6">
                    <v-col v-for="(stat, index) in selectedGarden?.stats" :key="index" cols="4">
                      <div class="stat-item glass-effect">
                        <div class="stat-icon-wrapper" :style="`background-color: ${stat.color}15`">
                          <v-icon :color="stat.color" size="24" :icon="stat.icon"></v-icon>
                        </div>
                        <div class="stat-value" :style="`color: ${stat.color}`">{{ stat.value }}</div>
                        <div class="stat-label">{{ stat.label }}</div>
                      </div>
                    </v-col>
                  </v-row>

                  <div class="glass-effect pa-6 mb-6 rounded-lg">
                    <BaseText
                      size="body-1"
                      color="text"
                    >
                      {{ selectedGarden?.description }}
                    </BaseText>
                  </div>

                  <BaseHeader
                    tag="h4"
                    size="h5"
                    weight="bold"
                    color="caba9c"
                    margin="mb-4"
                  >
                    รูปภาพเพิ่มเติม
                  </BaseHeader>
                  
                  <v-row>
                    <v-col v-for="(image, index) in selectedGarden?.gallery" :key="index" cols="4">
                      <div class="gallery-image-wrapper glass-effect">
                        <v-img
                          :src="image"
                          aspect-ratio="1"
                          cover
                          class="gallery-image rounded-lg"
                        ></v-img>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-dialog>
          </v-container>
        </section>

        <!-- Services Section -->
        <v-section id="services" class="py-16">
          <v-container>
            <BaseHeader
              size="h3"
              center
              margin="mb-12"
              color="caba9c"
            >
              บริการของเรา
            </BaseHeader>
            <v-row>
              <v-col v-for="(service, index) in services" :key="index" cols="12" md="4">
                <v-card class="service-card" elevation="0">
                  <div class="card-content pa-8">
                    <div class="d-flex flex-column align-center mb-6">
                      <div class="icon-wrapper mb-6">
                        <v-icon
                          :icon="service.icon"
                          size="32"
                          color="#caba9c"
                        ></v-icon>
                      </div>
                      <BaseHeader
                        tag="h3"
                        size="h4"
                        weight="bold"
                        color="caba9c"
                        margin="mb-4"
                        center
                      >
                        {{ service.title }}
                      </BaseHeader>
                      <BaseText
                        size="body-1"
                        color="text"
                        center
                      >
                        {{ service.description }}
                      </BaseText>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-section>

        <!-- Testimonials Section -->
        <v-section id="testimonials" class="py-16">
          <v-container>
            <BaseHeader
              size="h3"
              center
              margin="mb-12"
              color="caba9c"
            >
              รีวิวจากลูกค้า
            </BaseHeader>
            <v-row>
              <v-col v-for="(testimonial, index) in testimonials" :key="index" cols="12" md="6">
                <v-card class="testimonial-card" elevation="0">
                  <div class="card-content pa-8">
                    <div class="quote-icon-wrapper mb-6">
                      <v-icon icon="mdi-format-quote-open" size="32" color="#caba9c"></v-icon>
                    </div>
                    <BaseText
                      size="body-1"
                      color="text"
                      margin="mb-6"
                    >
                      {{ testimonial.text }}
                    </BaseText>
                    <v-divider class="mb-6"></v-divider>
                    <BaseText
                      size="subtitle-1"
                      color="caba9c"
                      weight="bold"
                    >
                      {{ testimonial.author }}
                    </BaseText>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-section>

        <!-- Contact Section -->
        <v-section id="contact" class="py-16">
          <v-container>
            <BaseHeader
              size="h3"
              center
              margin="mb-12"
              color="caba9c"
            >
              ติดต่อเรา
            </BaseHeader>
            <v-row>
              <v-col cols="12" md="6">
                <v-card class="contact-card" elevation="0">
                  <div class="card-content pa-8">
                    <BaseHeader
                      tag="h3"
                      size="h4"
                      weight="bold"
                      color="caba9c"
                      margin="mb-6"
                    >
                      ช่องทางการติดต่อ
                    </BaseHeader>
                    <v-list class="contact-list">
                      <v-list-item v-for="(contact, index) in contacts" :key="index">
                        <template v-slot:prepend>
                          <div class="contact-icon-wrapper">
                            <v-icon :icon="contact.icon" color="#caba9c"></v-icon>
                          </div>
                        </template>
                        <v-list-item-title>
                          <BaseText size="body-1" color="text">
                            {{ contact.text }}
                          </BaseText>
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card class="social-card" elevation="0">
                  <div class="card-content pa-8">
                    <BaseHeader
                      tag="h3"
                      size="h4"
                      weight="bold"
                      color="caba9c"
                      margin="mb-6"
                    >
                      ติดตามเรา
                    </BaseHeader>
                    <div class="social-grid">
                      <v-btn
                        v-for="(social, index) in socials"
                        :key="index"
                        :color="social.color"
                        class="social-btn"
                        variant="text"
                        size="x-large"
                      >
                        <v-icon :icon="social.icon" size="24"></v-icon>
                      </v-btn>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-section>
      </v-container>
    </v-main>

    <TheFooter />

    <!-- Floating Action Menu -->
<!-- Floating Action Menu -->
<div class="floating-menu">
  <transition-group name="menu-expand">
    <template v-if="isMenuExpanded">
      <v-btn
        v-for="(item, index) in menuItems"
        :key="item.title"
        :color="item.color"
        :href="item.action"
        target="_blank"
        icon
        elevation="2"
        class="floating-menu-item mb-2"
        :style="`transform-origin: bottom left; transition-delay: ${index * 0.05}s`"
      >
        <v-icon>{{ item.icon }}</v-icon>
        <span class="floating-menu-label">{{ item.title }}</span>
      </v-btn>
    </template>
  </transition-group>

  <!-- Main Toggle Button -->
  <v-btn
    class="floating-menu-toggle"
    color="primary"
    size="x-large"
    icon
    elevation="4"
    @click="toggleMenu"
  >
    <v-icon>{{ isMenuExpanded ? 'mdi-close' : 'mdi-message-text' }}</v-icon>
  </v-btn>
</div>

    <!-- Contact Dialog -->
    <v-dialog v-model="showContactDialog" max-width="400">
      <v-card class="contact-dialog pa-4">
        <div class="d-flex justify-space-between align-center mb-4">
          <div class="text-h6">บริษัทที่นี่เลยค่ะ</div>
          <v-btn icon @click="showContactDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-img
          src="/logo.png"
          width="64"
          height="64"
          class="mb-4 rounded-circle mx-auto"
        ></v-img>
        <div class="text-subtitle-1 text-center mb-4">Modern Landscape Design</div>
        <v-list>
          <v-list-item
            v-for="(contact, index) in quickContacts"
            :key="index"
            :href="contact.action"
            target="_blank"
            class="mb-2"
          >
            <template v-slot:prepend>
              <v-icon :color="contact.color">{{ contact.icon }}</v-icon>
            </template>
            <v-list-item-title>{{ contact.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
import BaseHeader from '@/components/BaseHeader.vue'
import BaseText from '@/components/BaseText.vue'

const theme = ref('light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const services = [
  {
    title: 'ออกแบบสวน',
    description: 'ออกแบบสวนตามความต้องการและงบประมาณของคุณ',
    icon: 'mdi-pencil-ruler'
  },
  {
    title: 'จัดสวน',
    description: 'จัดสวนตามแบบที่ออกแบบไว้ พร้อมติดตั้งอุปกรณ์ต่างๆ',
    icon: 'mdi-tree'
  },
  {
    title: 'ดูแลสวน',
    description: 'บริการดูแลรักษาสวนให้สวยงามตลอดปี',
    icon: 'mdi-sprout'
  }
]

const testimonials = [
  {
    text: 'บริการดีมาก ทีมงานเป็นมืออาชีพ สวนสวยตามที่ต้องการ',
    author: 'คุณสมชาย ใจดี'
  },
  {
    text: 'ราคาเป็นมิตร คุณภาพเกินราคา แนะนำมากๆ',
    author: 'คุณสมหญิง รักสวน'
  }
]

const contacts = [
  { icon: 'mdi-phone', text: 'โทร: 099-999-9999' },
  { icon: 'mdi-email', text: 'อีเมล: contact@suan-sua.com' },
  { icon: 'mdi-map-marker', text: 'ที่อยู่: กรุงเทพมหานคร' }
]

const socials = [
  { name: 'Facebook', color: '#4267B2', icon: 'mdi-facebook' },
  { name: 'LINE', color: '#00B900', icon: 'mdi-line' },
  { name: 'Instagram', color: '#E1306C', icon: 'mdi-instagram' }
]

const gardens = [
  {
    id: 'family',
    title: 'สวนครอบครัว',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
    description: 'สวนสำหรับครอบครัวที่ออกแบบมาให้ทุกคนในครอบครัวได้ใช้เวลาร่วมกัน พร้อมพื้นที่พักผ่อนและกิจกรรมสำหรับทุกวัย',
    stats: [
      { icon: 'mdi-ruler', value: '250', label: 'ตารางเมตร', color: '#caba9c' },
      { icon: 'mdi-calendar-check', value: '45', label: 'วันทำงาน', color: '#ba9787' },
      { icon: 'mdi-currency-usd', value: '2.5M', label: 'งบประมาณ', color: '#4d2d18' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
      'https://images.unsplash.com/photo-1598902108854-10e335adac99',
      'https://images.unsplash.com/photo-1558293842-c0fd3db86157'
    ]
  },
  {
    id: 'modern',
    title: 'สวนโมเดิร์น',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99',
    description: 'สวนสไตล์โมเดิร์นที่ผสมผสานความเรียบง่ายกับความสวยงาม เน้นการจัดวางที่เป็นระเบียบและใช้วัสดุร่วมสมัย',
    stats: [
      { icon: 'mdi-ruler', value: '180', label: 'ตารางเมตร', color: '#caba9c' },
      { icon: 'mdi-calendar-check', value: '30', label: 'วันทำงาน', color: '#ba9787' },
      { icon: 'mdi-currency-usd', value: '1.8M', label: 'งบประมาณ', color: '#4d2d18' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1598902108854-10e335adac99',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea'
    ]
  },
  {
    id: 'minimal',
    title: 'สวนมินิมอล',
    image: 'https://images.unsplash.com/photo-1558293842-c0fd3db86157',
    description: 'สวนสไตล์มินิมอลที่เน้นความเรียบง่าย ใช้พื้นที่อย่างคุ้มค่า เหมาะสำหรับบ้านขนาดกลางถึงเล็ก',
    stats: [
      { icon: 'mdi-ruler', value: '120', label: 'ตารางเมตร', color: '#caba9c' },
      { icon: 'mdi-calendar-check', value: '25', label: 'วันทำงาน', color: '#ba9787' },
      { icon: 'mdi-currency-usd', value: '1.2M', label: 'งบประมาณ', color: '#4d2d18' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1558293842-c0fd3db86157',
      'https://images.unsplash.com/photo-1598902108854-10e335adac99',
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea'
    ]
  },
  {
    id: 'tropical',
    title: 'สวนทรอปิคอล',
    image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea',
    description: 'สวนสไตล์ทรอปิคอลที่เน้นความเขียวขจีและความอุดมสมบูรณ์ของพืชเมืองร้อน สร้างบรรยากาศแบบรีสอร์ท',
    stats: [
      { icon: 'mdi-ruler', value: '300', label: 'ตารางเมตร', color: '#caba9c' },
      { icon: 'mdi-calendar-check', value: '60', label: 'วันทำงาน', color: '#ba9787' },
      { icon: 'mdi-currency-usd', value: '3.0M', label: 'งบประมาณ', color: '#4d2d18' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
      'https://images.unsplash.com/photo-1558293842-c0fd3db86157'
    ]
  },
  {
    id: 'japanese',
    title: 'สวนญี่ปุ่น',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
    description: 'สวนสไตล์ญี่ปุ่นที่เน้นความสงบและการจัดวางอย่างพิถีพิถัน สร้างบรรยากาศแห่งการพักผ่อนและสมาธิ',
    stats: [
      { icon: 'mdi-ruler', value: '200', label: 'ตารางเมตร', color: '#caba9c' },
      { icon: 'mdi-calendar-check', value: '50', label: 'วันทำงาน', color: '#ba9787' },
      { icon: 'mdi-currency-usd', value: '2.8M', label: 'งบประมาณ', color: '#4d2d18' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea',
      'https://images.unsplash.com/photo-1558293842-c0fd3db86157'
    ]
  },
  {
    id: 'vertical',
    title: 'สวนแนวตั้ง',
    image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99',
    description: 'สวนแนวตั้งที่เหมาะสำหรับพื้นที่จำกัด ออกแบบให้ใช้พื้นที่ในแนวดิ่งอย่างมีประสิทธิภาพ',
    stats: [
      { icon: 'mdi-ruler', value: '80', label: 'ตารางเมตร', color: '#caba9c' },
      { icon: 'mdi-calendar-check', value: '20', label: 'วันทำงาน', color: '#ba9787' },
      { icon: 'mdi-currency-usd', value: '0.9M', label: 'งบประมาณ', color: '#4d2d18' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1598902108854-10e335adac99',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea'
    ]
  }
]

const showGardenDialog = ref(false)
const selectedGarden = ref(null)

const openGardenDialog = (garden) => {
  selectedGarden.value = garden
  showGardenDialog.value = true
}

const showContactDialog = ref(false)

const quickContacts = [
  {
    title: 'โทร: 099-999-9999',
    icon: 'mdi-phone',
    action: 'tel:0999999999',
    color: 'green'
  },
  {
    title: 'Line: @suansua',
    icon: 'mdi-line',
    action: 'https://line.me/ti/p/@suansua',
    color: '#00B900'
  },
  {
    title: 'Facebook: สวนสวย',
    icon: 'mdi-facebook',
    action: 'https://facebook.com/suansua',
    color: '#4267B2'
  }
]

const isMenuExpanded = ref(false)

const toggleMenu = () => {
  isMenuExpanded.value = !isMenuExpanded.value
}

const menuItems = [
  {
    title: 'Instagram',
    icon: 'mdi-instagram',
    action: 'https://instagram.com/your-account',
    color: '#E4405F'
  },
  {
    title: 'พูดคุยผ่าน Facebook',
    icon: 'mdi-facebook-messenger',
    action: 'https://m.me/your-page',
    color: '#0078FF'
  },
  {
    title: 'พูดคุยผ่าน Line',
    icon: 'mdi-line',
    action: 'https://line.me/ti/p/@your-line',
    color: '#00B900'
  },
  {
    title: 'ผ่านอีเมลเพิ่มเติม',
    icon: 'mdi-email',
    action: 'mailto:your@email.com',
    color: '#EA4335'
  },
  {
    title: 'โทรหาเรา',
    icon: 'mdi-phone',
    action: 'tel:0999999999',
    color: '#34A853'
  },
  {
    title: 'Powered by Autodigi',
    icon: 'mdi-robot',
    action: '#',
    color: '#4CAF50'
  }
]
</script>

<style>
html {
  scroll-behavior: smooth;
  font-family: 'Prompt', sans-serif;
}

.v-application {
  font-family: 'Prompt', sans-serif !important;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.v-btn {
  font-family: 'Prompt', sans-serif !important;
}

.v-card {
  font-family: 'Prompt', sans-serif !important;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.v-list-item {
  font-family: 'Prompt', sans-serif !important;
}

.v-card-title {
  font-family: 'Prompt', sans-serif !important;
}

.v-card-text {
  font-family: 'Prompt', sans-serif !important;
}

.garden-card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.garden-card:hover {
  transform: scale(1.02);
}

.garden-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  transition: background 0.3s ease;
}

.garden-card:hover .garden-overlay {
  background: rgba(0, 0, 0, 0.6);
}

.garden-overlay h3 {
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.profile-card {
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(145deg, var(--v-background-base), var(--v-surface-base));
  border: 1px solid rgba(var(--v-border-opacity), 0.05);
  backdrop-filter: blur(10px);
}

.profile-image-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(145deg, var(--v-primary-base)15, transparent);
}

.profile-avatar {
  border: 4px solid white;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.profile-avatar:hover {
  transform: scale(1.02);
}

.profile-image {
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.1);
}

.social-link-item {
  transition: transform 0.3s ease;
}

.social-link-item:hover {
  transform: translateX(5px);
}

.social-icon-btn {
  border-radius: 12px;
  width: 48px;
  height: 48px;
}

.social-text {
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 0.9rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 30px 0;
}

.stat-item {
  text-align: center;
  padding: 24px 16px;
  background: var(--v-surface-base);
  border-radius: 20px;
  transition: all 0.3s ease;
  border: 1px solid rgba(var(--v-border-opacity), 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.stat-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  transition: transform 0.3s ease;
}

.stat-item:hover .stat-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  margin: 8px 0;
  background: linear-gradient(45deg, var(--v-primary-base), var(--v-secondary-base));
  -webkit-background-clip: text;
  background-clip: text;
}

.stat-label {
  font-size: 1rem;
  font-weight: 500;
  color: var(--v-text-base);
  opacity: 0.85;
}

/* Dark mode adjustments */
:deep(.v-theme--dark) .stat-item {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.05);
}

:deep(.v-theme--dark) .stat-icon-wrapper {
  background-color: rgba(255, 255, 255, 0.05);
}

:deep(.v-theme--dark) .stat-label {
  color: rgba(255, 255, 255, 0.85);
}

.profile-title {
  font-size: 1.2rem;
  opacity: 0.9;
}

.profile-description {
  line-height: 1.8;
}

.floating-image {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.modern-house-image {
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;
}

.modern-house-image:hover {
  transform: translateY(-10px);
}

.bg-background {
  transition: background-color 0.3s ease;
}

.theme--light {
  color: var(--v-text-base);
}

.theme--dark {
  color: var(--v-text-base);
}

.service-card,
.testimonial-card,
.contact-card,
.social-card {
  background: linear-gradient(145deg, var(--v-background-base), var(--v-surface-base));
  border: 1px solid rgba(202, 186, 156, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.service-card:hover,
.testimonial-card:hover,
.contact-card:hover,
.social-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border-color: #caba9c;
}

.icon-wrapper,
.quote-icon-wrapper,
.contact-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background-color: rgba(202, 186, 156, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.service-card:hover .icon-wrapper,
.testimonial-card:hover .quote-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  background-color: rgba(202, 186, 156, 0.2);
}

.contact-list {
  background: transparent !important;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.social-btn {
  border-radius: 16px !important;
  height: 64px !important;
  background-color: rgba(202, 186, 156, 0.1) !important;
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: scale(1.1);
  background-color: rgba(202, 186, 156, 0.2) !important;
}

/* Dark mode adjustments */
:deep(.v-theme--dark) .service-card,
:deep(.v-theme--dark) .testimonial-card,
:deep(.v-theme--dark) .contact-card,
:deep(.v-theme--dark) .social-card {
  background: linear-gradient(145deg, 
    rgba(77, 45, 24, 0.8),
    rgba(186, 151, 135, 0.1)
  );
  border-color: rgba(202, 186, 156, 0.1);
}

.garden-detail-card {
  background: rgba(255, 255, 255, 0.6) !important;
  backdrop-filter: blur(20px) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.garden-detail-image {
  position: relative;
}

.garden-detail-overlay {
  background: linear-gradient(to bottom, rgba(0,0,0,0.7), transparent) !important;
  height: 100%;
}

.garden-detail-content {
  position: relative;
  z-index: 1;
}

.glass-effect {
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  transition: all 0.3s ease;
}

.glass-effect:hover {
  background: rgba(255, 255, 255, 0.8) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.gallery-image-wrapper {
  overflow: hidden;
  border-radius: 16px;
  height: 100%;
}

.gallery-image {
  transition: all 0.5s ease;
}

.gallery-image:hover {
  transform: scale(1.1);
}

/* Dark mode adjustments */
:deep(.v-theme--dark) .garden-detail-card {
  background: rgba(0, 0, 0, 0.6) !important;
}

:deep(.v-theme--dark) .glass-effect {
  background: rgba(0, 0, 0, 0.3) !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
}

:deep(.v-theme--dark) .glass-effect:hover {
  background: rgba(0, 0, 0, 0.4) !important;
}

.floating-menu {
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.floating-menu-toggle {
  width: 64px !important;
  height: 64px !important;
  border-radius: 50% !important;
  transition: transform 0.3s ease !important;
}

.floating-menu-item {
  position: relative;
  width: 48px !important;
  height: 48px !important;
  border-radius: 50% !important;
}

.floating-menu-label {
  position: absolute;
  left: 64px;
  background: white;
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.3s ease;
  pointer-events: none;
}

.floating-menu-item:hover .floating-menu-label {
  opacity: 1;
  transform: translateX(0);
}

/* Animation for menu expansion */
.menu-expand-enter-active,
.menu-expand-leave-active {
  transition: all 0.3s ease;
}

.menu-expand-enter-from,
.menu-expand-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Dark mode adjustment */
:deep(.v-theme--dark) .floating-menu-label {
  background: #1E1E1E;
  color: white;
}
</style>
