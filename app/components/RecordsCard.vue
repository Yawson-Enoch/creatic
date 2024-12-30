<script setup lang="ts">
interface Props {
  image: string;
  count: number;
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex flex-col justify-center items-center text-center">
    <NuxtImg :src="props.image" />
    <h2>{{ props.count }}+</h2>
    <p>{{ props.title }}</p>
  </div>
</template>
