<template>
  <div class="slidev-layout narrative">
    <div class="accent-bar" />
    <slot />
  </div>
</template>

<style scoped>
.narrative {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
