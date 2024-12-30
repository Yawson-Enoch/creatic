<script setup lang="ts">
/* siteUrl fallback to localhost to preview og on localhost */
const config = useRuntimeConfig();
const reqUrl = useRequestURL();
const siteUrl =
  config.public.siteUrl || `http://localhost:${reqUrl.port || 3000}`;

const title = 'Creatic';
const description = 'Building random UIs';

/* charset and meta viewport are set by default */
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [{ rel: 'icon', href: '/favicon.ico' }],
});

useSeoMeta({
  titleTemplate: (t) => (t === title ? t : `${t} | ${title}`),

  title,
  description,

  ogTitle: title,
  ogDescription: description,
  ogImage: `${siteUrl}/og-image.png`,
  ogImageAlt: 'Creatic Agency Website',

  twitterCreator: '@gybex_enock',
  twitterCard: 'summary_large_image',

  themeColor: '#000000',
  /* prevent page indexing in search engines */
  robots: 'noindex, nofollow',
});
</script>

<template>
  <div class="min-h-dvh">
    <Header />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <RecordsSection />
    <WorkSection />
    <WhyUsSection />
    <TestimonialsSection />
    <GetInTouchSection />
    <Footer />
  </div>
</template>
