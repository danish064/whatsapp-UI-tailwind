<template>
  <div class="w-screen h-screen">
    <div id="main-container">
      <default-header />
      <div id="container">
        <slot />
      </div>
      <default-footer @open-pop-over="open = true" />
      <default-footerpopover v-if="open" @close-pop-over="open = false" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const open = ref(false);
</script>

<style lang="postcss" scoped>
  #main-container {
    @apply relative max-w-4xl w-full h-full bg-white 4xl:m-auto flex flex-col;
  }

  #container {
    @apply bg-zircon w-full px-7% py-3%;
    height: calc(100% - 8rem);
  }
</style>
