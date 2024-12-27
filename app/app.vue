<script setup lang="ts">
import AboutSection from './components/AboutSection.vue';
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import RecordsSection from './components/records/RecordsSection.vue';
import ServicesSection from './components/services/ServicesSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import WhyUsSection from './components/WhyUsSection.vue';
import WorkSection from './components/work/WorkSection.vue';
</script>

<template>
  <div class="font-display bg-background text-foreground min-h-dvh">
    <Header />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <RecordsSection />
    <WorkSection />
    <WhyUsSection />
    <TestimonialsSection />
  </div>
</template>
