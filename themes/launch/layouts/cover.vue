<template>
  <div class="slidev-layout cover">
    <div class="accent-bar" />
    <div class="content">
      <slot />
    </div>
    <div class="footer">
      <span class="logo">Launch</span>
      <span class="divider">|</span>
      <span class="byline">NTT DATA</span>
    </div>
  </div>
</template>

<style scoped>
.cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-bottom: 5rem;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer {
  position: absolute;
  bottom: 2.5rem;
  left: 4rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.4);
}

.logo {
  font-weight: 700;
  color: var(--launch-white);
}

.divider {
  color: var(--launch-blue);
}
</style>
