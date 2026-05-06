<template>
  <div class="slidev-layout two-pane">
    <div class="tp-left">
      <slot name="left" />
    </div>
    <div class="tp-right">
      <slot />
    </div>
    <img class="layout-logo" src="/logo-white.svg" alt="Launch by NTT DATA">
  </div>
</template>
