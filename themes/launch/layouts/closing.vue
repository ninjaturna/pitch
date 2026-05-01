<template>
  <div class="slidev-layout closing">
    <div class="accent-bar" />
    <slot />
    <div class="cta-block">
      <span class="cta-label">Launch by NTT DATA</span>
    </div>
  </div>
</template>

<style scoped>
.closing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.cta-block {
  position: absolute;
  bottom: 2.5rem;
  right: 4rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--launch-gold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
</style>
