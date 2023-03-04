<template>
  <div id="allChats">
    <div id="header">
      <img src="" alt="" />
      <div>
        <img src="https://placehold.co/40" alt="" />
        <img src="https://placehold.co/40" alt="" />
        <img src="https://placehold.co/40" alt="" />
      </div>
    </div>
    <div id="search_chats"></div>
  </div>
</template>
<script setup></script>
<style lang="postcss" scoped>
#allChats {
  @apply h-full;
  @apply w-[480px];
  @apply bg-red-700;
  @apply flex flex-col justify-start;

  > #header {
    @apply w-full h-[60px] px-4;
    @apply bg-gray-800;
    @apply flex flex-row justify-between items-center;

    > img {
      @apply w-10 h-10;
      @apply bg-gray-700;
      @apply rounded-full;
    }
    > div {
      @apply flex flex-row justify-center items-center;
      > img {
        @apply w-8 h-8;
        @apply bg-gray-700;
        @apply rounded-full;
        @apply mx-1;
      }
    }
  }
  > #search_chats {
    @apply w-full h-full;
    @apply bg-blue-600;
  }
}
</style>
