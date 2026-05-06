<template>
  <div class="slidev-layout conversation">
    <div class="cv-top">
      <div v-if="$frontmatter.eyebrow" class="cv-eyebrow">{{ $frontmatter.eyebrow }}</div>
      <slot name="heading" />
      <slot name="subheading" />
    </div>
    <div class="cv-questions">
      <slot name="questions" />
    </div>
    <div class="cv-footer">
      <div v-if="$frontmatter.cta" class="cv-cta">{{ $frontmatter.cta }}</div>
    </div>
    <img class="layout-logo" src="../l-mark-black.svg" alt="Launch by NTT DATA">
  </div>
</template>
