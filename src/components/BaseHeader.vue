<template>
    <component
      :is="tag"
      :class="[
        `text-${size}`,
        `font-weight-${weight}`,
        `text-${color}`,
        margin,
        { 'text-center': center }
      ]"
      style="font-family: 'Prompt', sans-serif !important;"
    >
      <slot></slot>
    </component>
  </template>
  
  <script setup>
  defineProps({
    tag: {
      type: String,
      default: 'h2'
    },
    size: {
      type: String,
      default: 'h2',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
    },
    weight: {
      type: String,
      default: 'bold',
      validator: (value) => ['black', 'bold', 'medium', 'regular', 'light'].includes(value)
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'white'].includes(value)
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
  .text-primary {
    color: var(--text-primary);
    transition: color 0.3s ease;
  }
  
  .text-secondary {
    color: var(--text-secondary);
    transition: color 0.3s ease;
  }
  
  .text-white {
    color: #FFFFFF;
    transition: color 0.3s ease;
  }
  </style>