<template>
  <div class="slidev-layout three-things">
    <div class="tt-top">
      <div v-if="$frontmatter.eyebrow" class="tt-eyebrow">{{ $frontmatter.eyebrow }}</div>
      <slot name="heading" />
      <slot name="setup" />
    </div>
    <div class="tt-grid">
      <slot name="cells" />
    </div>
    <div v-if="$frontmatter.footerBar" class="tt-footer-bar" v-html="$frontmatter.footerBar"></div>
    <img class="layout-logo" src="../l-mark-black.svg" alt="Launch by NTT DATA">
  </div>
</template>
