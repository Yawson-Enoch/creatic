<script setup lang="ts">
import Card from './Card.vue';
</script>

<template>
  <section
    style="
      background: linear-gradient(
        90deg,
        #6d95fc -127.55%,
        rgba(21, 21, 21, 0.35) 77.97%
      );
    "
  >
    <div
      class="container grid grid-cols-2 md:grid-cols-4 place-items-center place-content-center gap-8 md:gap-12 xl:gap-48 xl:min-h-[22.4375rem] py-8 md:py-12"
    >
      <Card
        image="/images/records/team-members.webp"
        :count="50"
        title="Team Members"
      />
      <Card
        image="/images/records/projects-done.webp"
        :count="200"
        title="Projects Done"
      />
      <Card
        image="/images/records/happy-customers.webp"
        :count="500"
        title="Happy Customers"
      />
      <Card
        image="/images/records/award-winnings.webp"
        :count="75"
        title="Award Winnings"
      />
    </div>
  </section>
</template>
