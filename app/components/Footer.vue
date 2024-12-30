<script setup lang="ts">
const links = [
  {
    label: 'Categories',
    to: '/categories',
  },
  {
    label: 'About',
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
    label: 'Support',
    to: '/support',
  },
];
</script>

<template>
  <section
    style="
      background-image: linear-gradient(
        to top,
        rgba(109, 149, 252, 0.24) 3.19%,
        rgba(21, 21, 21, 0) 61.55%
      );
    "
  >
    <div class="container py-8 md:p-12">
      <div class="grid justify-items-center text-center gap-y-4">
        <NuxtLink to="/">
          <div class="w-fit text-center">
            <p
              class="text-primary text-2xl xl:text-[length:3.4375rem] font-semibold"
            >
              CREATIC
            </p>
            <p class="text-sm">CREATIVE AGENCY</p>
          </div>
        </NuxtLink>
        <div class="w-[6.3125rem] h-[.125rem] bg-foreground" />
        <ul
          class="flex items-center md:gap-x-10 gap-x-5 gap-y-3 flex-wrap justify-center"
        >
          <li v-for="{ to, label } of links" :key="label">
            <NuxtLink :to class="text-primary">{{ label }}</NuxtLink>
          </li>
        </ul>
        <p class="max-w-[44.8125rem]">
          Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit
          amet, Neque porro elit NeDque
        </p>
        <ul class="flex items-center justify-center gap-x-3 md:gap-x-6">
          <li>
            <FacebookIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <WhatsAppIcon />
          </li>
          <li>
            <LinkedinIcon />
          </li>
          <li>
            <PinterestIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
        </ul>
      </div>
      <p class="mt-20 xl:mt-48 text-sm text-center">
        Copyright © 2003-2023 Creatic Agency All rights reserved.
      </p>
    </div>
  </section>
</template>
