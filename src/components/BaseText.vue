<template>
  <p
    :class="[
      `text-${size}`,
      `text-${color}`,
      margin,
      { 'text-center': center }
    ]"
  >
    <slot></slot>
  </p>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: 'body-1',
    validator: (value) => ['body-1', 'body-2', 'subtitle-1', 'subtitle-2'].includes(value)
  },
  color: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'primary', 'secondary', 'grey'].includes(value)
  },
  margin: {
    type: String,
    default: 'mb-4'
  },
  center: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
p {
  font-family: 'Prompt', sans-serif !important;
  transition: color 0.3s ease;
}

.text-text {
  color: var(--v-text-base);
}

.text-primary {
  color: var(--v-primary-base);
}

.text-secondary {
  color: var(--v-secondary-base);
}

.text-grey {
  color: var(--v-text-base);
  opacity: 0.7;
}
</style> 