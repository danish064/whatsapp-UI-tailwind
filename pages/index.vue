<template>
  <div id="main_wrapper">
    <div id="content_wrapper">
      <allChatsSection />
      <currentChatSection />
    </div>
  </div>
</template>
<style lang="postcss" scoped>
#main_wrapper {
  @apply h-screen w-screen;
  @apply bg-primary;
  @apply flex justify-center items-center;
  @apply py-6;
  /* @apply px-10 py-6; */
  /* @apply text-primary; */
  /* @apply border-8 border-primary; */
  > #content_wrapper {
    @apply h-full;
    @apply w-[1600px];
    @apply bg-white;
    @apply flex flex-row;
    /* @apply text-primary; */
    /* @apply border-8 border-primary; */
  }
}
</style>
