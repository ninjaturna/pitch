<template>
  <div class="slidev-layout stat-grid">
    <div v-if="$slots.eyebrow" class="sg-eyebrow"><slot name="eyebrow" /></div>
    <slot />
    <div class="sg-stats">
      <slot name="stats" />
    </div>
    <img class="layout-logo" src="../l-mark-black.svg" alt="Launch by NTT DATA">
  </div>
</template>
