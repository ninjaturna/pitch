<template>
  <div class="slidev-layout closing">
    <div style="width: 3rem; height: 4px; background: #1E5AF2; margin-bottom: 1.5rem;"></div>
    <slot />
    <div class="cta-block">
      <slot name="cta" />
    </div>
    <img class="layout-logo" src="../logo-white.svg" alt="Launch by NTT DATA">
  </div>
</template>
