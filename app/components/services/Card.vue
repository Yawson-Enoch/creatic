<script setup lang="ts">
interface Props {
  image: string;
  title: string;
  description: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="xl:min-w-[18.75rem] xl:aspect-square grid place-items-center place-content-center p-2 md:p-4 text-center"
  >
    <NuxtImg :src="props.image" />
    <p class="text-primary mt-4">
      {{ props.title }}
    </p>
    <p class="xl:text-[1.0625rem] text-sm">{{ props.description }}</p>
  </div>
</template>
