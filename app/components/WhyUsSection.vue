<template>
  <section class="grid md:grid-cols-2 items-center content-center">
    <div class="container py-4 md:py-12 max-md:pt-8 h-full">
      <div class="inline-grid justify-items-center">
        <p>WHY US?</p>
        <div class="w-[6.9014rem] h-[.1816rem] bg-primary" />
      </div>
      <h3 class="max-w-[47.5rem] md:mt-6 mt-3 uppercase">
        25 years of <span class="text-primary">experience</span> as a creative
        agency
      </h3>
      <Button class="md:mt-10 mt-5"> READ MORE </Button>
    </div>

    <div
      class="h-full"
      style="
        background-image: linear-gradient(
          to top left,
          rgba(109, 149, 252, 0.24) 3.19%,
          rgba(21, 21, 21, 0) 61.55%
        );
      "
    >
      <div class="container py-4 md:py-12 md:space-y-8 space-y-4 max-md:mb-8">
        <p class="max-w-[35.25rem]">
          Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit
          amet, Neque porro elit NeDque porro Lorem ipsum
        </p>
        <ul class="space-y-1.5">
          <li class="flex items-center gap-x-3">
            <CheckIcon />
            <p>Happy Customer</p>
          </li>
          <li class="flex items-center gap-x-3">
            <CheckIcon />
            <p>Experienced Team</p>
          </li>
          <li class="flex items-center gap-x-3">
            <CheckIcon />
            <p>Modern Technology</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
