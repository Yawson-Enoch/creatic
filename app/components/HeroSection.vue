<script setup lang="ts">
import Button from './ui/Button.vue';
</script>

<template>
  <section
    class="py-8 md:py-12 xl:py-[11.5625rem]"
    style="
      background-image: linear-gradient(
        269deg,
        rgba(109, 149, 252, 0.67) -53.1%,
        rgba(109, 149, 252, 0) 30.41%
      );
    "
  >
    <div
      class="container flex flex-col-reverse md:grid md:grid-cols-[2fr_1fr] xl:grid-cols-[max-content_auto] gap-x-8 gap-y-8"
    >
      <div class="max-w-[51.1875rem] md:space-y-10 space-y-5">
        <p class="uppercase text-primary">Welcome to creatic</p>
        <h1>WE ARE <span class="text-primary">CREATIVE</span> DESIGN AGENCY</h1>
        <div class="h-[.1875rem] w-[9rem] bg-primary" />
        <p>
          Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit Neque porro elit Neque porro quis
          ipsum
        </p>
        <Button>GET IN TOUCH</Button>
      </div>
      <NuxtImg
        src="/images/hero.webp"
        class="size-full object-cover object-center"
      />
    </div>
  </section>
</template>
