<template>
  <section>
    <div
      class="flex flex-col md:grid md:grid-cols-[1fr_2fr] xl:grid-cols-[auto_max-content] gap-x-8"
    >
      <div
        style="
          background-image: linear-gradient(
            94deg,
            rgba(109, 149, 252, 0.26) 6.51%,
            rgba(109, 149, 252, 0) 57.56%
          );
        "
      >
        <div class="container size-full">
          <NuxtImg
            src="/images/about.webp"
            class="object-center object-cover size-full"
          />
        </div>
      </div>
      <div
        class="space-y-3 md:space-y-6 max-w-[44.25rem] place-self-center container py-8 md:py-12"
      >
        <p class="uppercase text-primary">ABOUT US</p>
        <h3>
          We Bring <span class="text-primary">Creative</span> ideas to life.
        </h3>
        <div class="w-[6.0938rem] h-[3px] bg-foreground" />
        <p class="text-primary">We love Creating</p>
        <p>
          Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor sit
          amet, Neque porro elit NeDque porro Lorem ipsum Neque porro Neque
          porro Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,
          Lorem ipsum Neque quis ipsum
        </p>
        <Button>Read More</Button>
      </div>
    </div>
  </section>
</template>
