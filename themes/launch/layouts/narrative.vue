<template>
  <div class="slidev-layout narrative" :data-mode="$frontmatter.mode || 'light'">
    <div class="accent-bar" />
    <div class="eyebrow">{{ $frontmatter.eyebrow || 'Launch' }}</div>
    <slot />
    <div class="footer">Launch · HP Inc · April 2026</div>
  </div>
</template>
