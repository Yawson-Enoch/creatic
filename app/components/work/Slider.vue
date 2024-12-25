<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { ref } from 'vue';

const SwiperAutoplay = Autoplay;
const SwiperPagination = Pagination;
const SwiperEffectCoverflow = EffectCoverflow;

const slides = ref([
  { title: 'Slide 1', image: '/images/slider/slider1.webp' },
  { title: 'Slide 2', image: '/images/slider/slider2.webp' },
  { title: 'Slide 3', image: '/images/slider/slider3.webp' },
  { title: 'Slide 4', image: '/images/slider/slider1.webp' },
  { title: 'Slide 5', image: '/images/slider/slider2.webp' },
  { title: 'Slide 6', image: '/images/slider/slider3.webp' },
]);
</script>

<template>
  <div>
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination, SwiperEffectCoverflow]"
      :slides-per-view="3"
      :center-sliding="true"
      :effect="'coverflow'"
      :loop="true"
      :pagination="{
        clickable: true,
        el: '.swiper-pagination',
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :coverflow-effect="{
        rotate: 0,
        stretch: 1,
        depth: 100,
        modifier: 3,
        slideShadows: false,
      }"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index + slide.title">
        <NuxtImg
          :src="slide.image"
          :alt="slide.title"
          class="max-md:min-h-[200px] xl:min-h-[50.25rem] object-center object-cover"
        />
      </SwiperSlide>

      <div class="swiper-pagination mt-6 md:mt-8" />
    </Swiper>
  </div>
</template>

<style>
.swiper-pagination {
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-pagination-bullet {
  width: 0.5rem;
  height: 0.5rem;
  margin-inline: 0.5rem;
  background: white;
  opacity: 1;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.swiper-pagination-bullet-active {
  scale: 1.5;
}
</style>
