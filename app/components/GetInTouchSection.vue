<template>
  <section class="grid md:grid-cols-2">
    <div class="flex justify-end container h-full py-8 md:py-12">
      <div class="max-w-[36.8125rem] space-y-4 md:space-y-8">
        <h3>GET IN <span class="text-primary">TOUCH</span></h3>
        <div class="h-[.1875rem] w-[6.0938rem]" />
        <p>
          justify-center Lorem ipsum Neque porro quisquam est qui do lorem ipsum
          quia dolor sit amet, Neque porro elit NeDque porro
        </p>
        <ul class="space-y-6 md:space-y-12">
          <li class="flex items-center gap-x-3 md:gap-x-6">
            <AddressIcon />
            <div>
              <p class="font-bold">Office Address</p>
              <p class="text-primary">
                98, Arca St, PR City, 33414 , Indonesia
              </p>
            </div>
          </li>
          <li class="flex items-center gap-x-3 md:gap-x-6">
            <PhoneIcon />
            <div>
              <p class="font-bold">Call Us</p>
              <p class="text-primary">(+BK) 123 456 7891</p>
            </div>
          </li>
          <li class="flex items-center gap-x-3 md:gap-x-6">
            <MailIcon />
            <div>
              <p class="font-bold">Mail Us</p>
              <p class="text-primary">info@creaticagency.com</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="flex items-center justify-start py-8 md:py-12 container"
      style="
        background-image: linear-gradient(
          223deg,
          rgba(109, 149, 252, 0.24) 3.19%,
          rgba(21, 21, 21, 0) 61.55%
        );
      "
    >
      <div
        class="max-w-[33.6875rem] w-full rounded-2xl xl:rounded-[2.125rem]"
        style="
          background: linear-gradient(
            180deg,
            #12192b 0.03%,
            rgba(18, 25, 43, 0) 109.04%
          );
        "
      >
        <form class="p-6 md:p-14 grid gap-y-4 md:gap-y-8">
          <div class="space-y-3 md:space-y-6">
            <div>
              <label for="name">YOUR NAME</label>
              <input
                type="text"
                id="name"
                class="flex h-12 w-full border border-inherit bg-transparent px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div>
              <label for="email">YOUR EMAIL</label>
              <input
                type="text"
                id="email"
                class="flex h-12 w-full border border-inherit bg-transparent px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div>
              <label for="message">YOUR MESSAGE</label>
              <textarea
                id="message"
                class="flex min-h-44 w-full border border-inherit bg-transparent px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              ></textarea>
            </div>
          </div>
          <Button variant="default" class="mx-auto">SEND MESSAGE</Button>
        </form>
      </div>
    </div>
  </section>
</template>
