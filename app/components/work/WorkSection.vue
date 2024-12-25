<script setup lang="ts">
import Slider from './Slider.vue';
</script>

<template>
  <section class="py-8 md:py-16 space-y-6 md:space-y-12">
    <div
      class="container gap-y-6 md:gap-y-12 grid place-content-center place-items-center text-center"
    >
      <h3 class="max-w-[688px]">
        ENJOY OUR <span class="text-primary">LATEST</span> PROJECTS
      </h3>
      <div
        class="inline-grid grid-cols-[auto_1fr_auto] place-items-center gap-x-2"
      >
        <div class="w-[6.0938rem] h-[.1875rem] bg-foreground" />
        <p class="text-primary">OUR WORK</p>
        <div class="w-[6.0938rem] h-[.1875rem] bg-foreground" />
      </div>
    </div>
    <Slider />
  </section>
</template>
