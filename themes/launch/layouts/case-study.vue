<template>
  <div class="slidev-layout case-study">
    <div class="cs-main">
      <div class="cs-top">
        <slot />
      </div>
      <div class="cs-outcomes">
        <slot name="outcomes" />
      </div>
    </div>
    <div class="cs-sidebar">
      <slot name="sidebar" />
    </div>
    <img class="layout-logo" src="/logo-white.svg" alt="Launch by NTT DATA">
  </div>
</template>
