<template>
  <button
    :class="[
      'px-4 py-[10px] text-sm font-medium transition-colors duration-200',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      variant === 'primary' && 'bg-[#A435F0] hover:bg-[#8710D8] text-white',
      variant === 'secondary' && 'border border-gray-900 hover:bg-gray-50',
      variant === 'white' && 'bg-white border border-gray-900 hover:bg-gray-50',
      variant === 'dark' && 'bg-gray-900 text-white hover:bg-gray-800',
      fullWidth && 'w-full',
      className
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'secondary',
    validator: (value) => ['primary', 'secondary', 'white', 'dark'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
})

defineEmits(['click'])
</script> 