<template>
  <div class="slidev-layout observation-cards">
    <div class="oc-top">
      <div v-if="$frontmatter.client" class="oc-eyebrow">{{ $frontmatter.client }}</div>
      <slot name="heading" />
      <slot name="subheading" />
    </div>
    <div class="oc-cards">
      <slot name="cards" />
    </div>
    <div v-if="$frontmatter.footer" class="oc-footer">{{ $frontmatter.footer }}</div>
    <div class="oc-brand">Launch | NTT DATA</div>
  </div>
</template>
