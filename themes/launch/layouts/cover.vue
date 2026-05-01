<template>
  <div class="slidev-layout cover" :data-mode="$frontmatter.mode || 'light'">
    <div class="accent-bar" />
    <div class="eyebrow">Launch by NTT DATA</div>
    <slot />
    <div class="footer">{{ $frontmatter.preparedFor || '' }}</div>
  </div>
</template>
