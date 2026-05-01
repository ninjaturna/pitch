<template>
  <div class="slidev-layout closing" :data-mode="$frontmatter.mode || 'dark'">
    <div class="accent-bar" />
    <slot />
    <div class="footer">launch.nttdata.com</div>
  </div>
</template>
