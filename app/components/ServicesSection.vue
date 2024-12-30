<template>
  <section
    class="flex flex-col md:grid md:grid-cols-2 container py-8 md:py-12 gap-x-8 gap-y-8"
  >
    <div class="max-w-[36.8125rem] space-y-4 md:space-y-8 self-center">
      <p class="text-primary">OUR SERVICES</p>
      <h3>
        Experience The Power Of <span class="text-primary">Innovation</span>
      </h3>
      <div class="h-[.1875rem] w-[6.0938rem] bg-foreground" />
      <p>
        Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit
        amet, Neque porro elit NeDque porro Neque porro quisquam est qui do
        lorem ipsum quia dolor sit amets ipsum
      </p>
      <Button> VIEW ALL </Button>
    </div>

    <div class="grid grid-cols-2 py-4 md:py-8">
      <ServicesCard
        image="/images/services/video-icon.webp"
        title="VIDEO MARKETING"
        description="Lorem ipsum Neque do porro quisquam est qui do quam"
        style="
          background: linear-gradient(
            90deg,
            rgba(109, 149, 252, 0.35) -346.67%,
            rgba(21, 21, 21, 0.31) 74.83%
          );
        "
      />
      <ServicesCard
        image="/images/services/graphic-icon.webp"
        title="GRAPHIC DESIGN"
        description="Lorem ipsum Neque do porro quisquam est qui do quam"
        style="
          background: linear-gradient(
            357deg,
            rgba(109, 149, 252, 0.55) -217.33%,
            rgba(109, 149, 252, 0) 66.64%
          );
        "
      />
      <ServicesCard
        image="/images/services/ux-icon.webp"
        title="UI/UX DESIGN"
        description="Lorem ipsum Neque do porro quisquam est qui do quam"
        style="
          background: linear-gradient(
            2deg,
            rgba(109, 149, 252, 0.55) -180.08%,
            rgba(109, 149, 252, 0) 67.52%
          );
        "
      />
      <ServicesCard
        image="/images/services/web-icon.webp"
        title="WEBSITE DESIGN"
        description="Lorem ipsum Neque do porro quisquam est qui do quam"
        style="
          background: linear-gradient(
            90deg,
            rgba(109, 149, 252, 0.35) -292.67%,
            rgba(21, 21, 21, 0.31) 74.83%
          );
        "
      />
    </div>
  </section>
</template>
