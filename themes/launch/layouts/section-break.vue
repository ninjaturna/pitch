<template>
  <div class="slidev-layout section-break">
    <div class="sb-bg-num" aria-hidden="true">{{ $frontmatter.sectionNum || '' }}</div>
    <div class="sb-content">
      <div v-if="$frontmatter.sectionNum" class="sb-section-num">
        Section {{ $frontmatter.sectionNum }}
      </div>
      <slot />
    </div>
    <img class="layout-logo" src="/logo-white.svg" alt="Launch by NTT DATA">
  </div>
</template>
