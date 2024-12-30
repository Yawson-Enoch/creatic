<script setup lang="ts">
import type { NuxtError } from '#app';

interface Props {
  error: NuxtError;
}

const props = defineProps<Props>();

const title = computed(() =>
  props.error.statusCode === 404 ? 'Page Not Found' : 'An Error Occured'
);
const description = computed(() =>
  props.error.statusCode === 404
    ? 'This page could not be found. Check the URL or go to the homepage.'
    : 'Something went wrong! Please try again later or go to the homepage.'
);
const isDev = import.meta.dev;

useHead({
  htmlAttrs: {
    lang: 'en',
  },
});

useSeoMeta({
  title,
  description,
});

function handleRedirect() {
  return clearError({ redirect: '/' });
}
</script>

<template>
  <div
    class="container grid min-h-dvh place-content-center place-items-center gap-y-4 md:gap-y-8 py-4 md:py-8 text-center"
  >
    <div class="space-y-2 flex flex-col items-center justify-center">
      <p class="text-3xl font-semibold">{{ title }}</p>
      <p>
        {{ description }}
      </p>
    </div>
    <Button @click="handleRedirect">Go Home</Button>
    <p class="text-xs" v-if="isDev">
      {{ JSON.stringify(error) }}
    </p>
  </div>
</template>
