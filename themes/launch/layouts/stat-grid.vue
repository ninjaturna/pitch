<template>
  <div class="slidev-layout stat-grid">
    <div v-if="$slots.eyebrow" class="sg-eyebrow"><slot name="eyebrow" /></div>
    <slot />
    <div class="sg-stats">
      <slot name="stats" />
    </div>
  </div>
</template>
