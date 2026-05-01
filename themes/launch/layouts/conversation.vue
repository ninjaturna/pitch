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
      <div class="cv-brand"><span>Launch</span> | NTT DATA</div>
    </div>
  </div>
</template>
