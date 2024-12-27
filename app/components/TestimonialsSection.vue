<script setup lang="ts">
import Blockquote from './Blockquote.vue';
import Button from './ui/Button.vue';
</script>

<template>
  <section
    class="grid xl:grid-cols-3 w-full justify-center xl:justify-between xl:gap-x-20 max-xl:container"
  >
    <NuxtImg
      src="/images/testimonial-image1.webp"
      class="max-xl:hidden size-full"
    />

    <!-- testimonial -->
    <div
      class="max-w-[35.25rem] xl:space-y-20 space-y-10 self-center py-8 md:py-12"
    >
      <div class="text-center grid place-items-center">
        <h3>WHAT <span class="text-primary">OUR</span> CLIENTS SAY?</h3>
        <div class="h-[.1875rem] w-[11.1875rem] bg-primary" />
        <p class="mt-2">TESTIMONIALS</p>
      </div>

      <div class="grid place-items-center text-center">
        <div
          class="rounded-3xl md:rounded-[2.375rem] p-4 md:p-9 space-y-5 md:space-y-10"
          style="
            background: linear-gradient(
              176deg,
              rgba(17, 24, 42, 0.7) 19.67%,
              rgba(17, 24, 42, 0) 121.51%
            );
          "
        >
          <p>
            Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor
            sit amet, Neque porro elit
          </p>
          <div class="flex items-center justify-between">
            <div class="flex items-center px-4 md:gap-x-4 gap-x-2">
              <NuxtImg src="/images/avatar.webp" />
              <div class="grid items-center">
                <p class="font-bold">Carol Chaves</p>
                <p class="text-primary">@caroles.gmail.com</p>
              </div>
            </div>
            <div class="flex items-center max-md:ml-2 self-start">
              <Blockquote class="max-md:size-4" />
              <Blockquote class="max-md:size-4" />
            </div>
          </div>
        </div>

        <Button class="mt-5 md:mt-10">VIEW ALL TESTIMONIALS</Button>
      </div>
    </div>

    <NuxtImg
      src="/images/testimonial-image2.webp"
      class="max-xl:hidden size-full"
    />
  </section>
</template>
