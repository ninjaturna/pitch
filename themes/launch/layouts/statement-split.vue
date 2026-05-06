<template>
  <div class="slidev-layout statement-split">
    <div class="ss-left">
      <div v-if="$frontmatter.eyebrow" class="ss-eyebrow">{{ $frontmatter.eyebrow }}</div>
      <slot name="statement" />
      <div v-if="$frontmatter.attribution" class="ss-attr">
        <div class="ss-attr-line"></div>
        <div class="ss-attr-text">{{ $frontmatter.attribution }}</div>
      </div>
    </div>
    <div class="ss-right">
      <div v-if="$frontmatter.listHeading" class="ss-right-heading">{{ $frontmatter.listHeading }}</div>
      <slot />
    </div>
    <img class="layout-logo" src="../logo-white.svg" alt="Launch by NTT DATA">
  </div>
</template>
