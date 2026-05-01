<template>
  <div class="slidev-layout two-pane">
    <div class="tp-left">
      <slot name="left" />
    </div>
    <div class="tp-right">
      <slot />
    </div>
  </div>
</template>
