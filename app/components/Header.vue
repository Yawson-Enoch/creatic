<script setup lang="ts">
const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About Us',
    to: '/about',
  },
  {
    label: 'Services',
    to: '/services',
  },
  {
    label: 'Portfolio',
    to: '/portfolio',
  },
  {
    label: 'Pages',
    to: '/pages',
  },
  {
    label: 'Contact Us',
    to: '/contact',
  },
];

const isNavOpen = ref(false);

function toggleNav() {
  isNavOpen.value = !isNavOpen.value;
}
</script>

<template>
  <header>
    <div class="container flex items-center justify-between py-4">
      <!-- logo -->
      <NuxtLink to="/">
        <div class="grid place-items-center">
          <p
            class="text-primary text-2xl xl:text-[length:3.4375rem] font-semibold"
          >
            CREATIC
          </p>
          <p class="text-sm max-md:hidden">CREATIVE AGENCY</p>
        </div>
      </NuxtLink>
      <!-- desktop nav -->
      <div class="flex items-center gap-x-4 md:gap-x-8 lg:gap-x-12">
        <nav class="hidden lg:block">
          <ul class="flex items-center gap-x-12">
            <li v-for="{ to, label } of links" :key="label">
              <NuxtLink :to="to">{{ label }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <SearchIcon class="max-lg:size-5 lg:text-primary" />

        <!-- hamburger menu -->
        <MenuIcon class="size-8 md:size-9 lg:hidden" @click="toggleNav" />
      </div>
    </div>
  </header>
  <!-- mobile nav -->
  <nav
    :class="[
      'fixed overscroll-contain inset-0 bg-background transition-transform duration-300 ease-in-out h-dvh text-foreground',
      isNavOpen ? 'translate-x-0 lg:hidden' : '-translate-x-full',
    ]"
  >
    <div class="container py-4 space-y-8">
      <!-- logo and close button -->
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <p
            class="text-primary text-2xl xl:text-[length:3.4375rem] font-semibold"
          >
            CREATIC
          </p>
        </NuxtLink>
        <CancelIcon class="size-8 md:size-9" @click="toggleNav" />
      </div>
      <ul class="">
        <li v-for="{ label, to } of links" :key="label">
          <NuxtLink :to="to" class="py-4 inline-block">{{ label }}</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
