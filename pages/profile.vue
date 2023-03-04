<template>
  <div class="app-wrapper">
    <div id="left-div">
      <div id="upper">
        <div id="heading">Account</div>
        <NuxtLink class="link-tab" to="/profile">
          <IconsAccountInfo />
          <span> Personal Information</span>
        </NuxtLink>
        <NuxtLink class="link-tab" to="/profile/history">
          <IconsCustomerHistory />
          <span>Consumed Services History</span>
        </NuxtLink>
        <NuxtLink class="link-tab" to="/profile/requests">
          <IconsPendingRequests /> <span>Pending Requests</span>
        </NuxtLink>
      </div>
      <div id="lower">
        <NuxtLink class="link-tab" to="/profile/help_support">
          <IconsHelp />
          <span> Help & Support</span>
        </NuxtLink>
        <button class="link-tab p-10" id="logoutbtn">
          <IconsLogout /><span> Logout</span>
        </button>
      </div>
    </div>
    <div id="right-div">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="postcss" scoped>
.app-wrapper {
  @apply flex flex-row justify-between;

  #left-div {
    @apply px-4 pb-20 pt-4;
    @apply h-full;
    @apply rounded-l-4xl;
    @apply w-1/4;
    @apply flex flex-col justify-between;
    @apply bg-athens-gray;

    #heading {
      @apply text-cod-gray text-xl font-semibold text-left;
      @apply pl-6;
      @apply pt-6 pb-8;
    }

    #upper {
      @apply flex flex-col w-full text-center;
    }

    #lower {
      @apply flex flex-col items-start;

      >#logoutbtn {
        @apply w-full rounded-2xl p-4 pl-10 mb-0;

        >span {
          @apply ml-4;
        }
      }
    }

    a {
      @apply w-full rounded-2xl p-4 pl-10 text-black;
    }

    .link-tab {
      @apply hover:bg-alto;
      @apply flex flex-row items-center;
      @apply mb-4;

      >svg {
        @apply w-5 h-5;
        @apply text-black;
      }

      >span {
        @apply ml-4;
      }
    }

    .router-link-exact-active {
      @apply bg-primary text-white hover:bg-primarydark;

      >svg {
        @apply text-white;
      }
    }


  }

  #right-div {
    @apply h-full;
    @apply w-3/4;
    @apply rounded-tr-4xl;
  }

}
</style>
