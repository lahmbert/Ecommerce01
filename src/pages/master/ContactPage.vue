<template>
  <div>
    <NavBar />
    <section class="h-screen pt-28 px-8 md:px-[5rem] dashboard">
      <div class="text-white pt-4 font-bold text-4xl">Kontak Kami</div>
      <div>
        <div class="wave wave9"></div>
        <div class="wave wave10"></div>
        <div class="wave wave11"></div>
        <div class="wave wave12"></div>
      </div>
    </section>
    <section class="relative mt-[-250px] z-20">
      <div
        class="bg-white text-black px-8 md:px-[5rem] pt-[50px] w-full h-auto min-h-[30rem]"
      >
        <div class="md:grid gap-8 grid-cols-8">
          <div class="col-span-6 flex flex-col">
            <div class="flex flex-row gap-1">
              <div class="font-bold text-gray-700">Kontak Resmi</div>
              <div class="font-bold text-webPrimary">Nama Toko Kami</div>
            </div>
            <div class="text-gray-600 text-sm mt-3">
              Whatsapp :
              <span class="text-webPrimary cursor-pointer">0800 8080 8808</span>
            </div>
            <div class="text-gray-600 text-sm mt-3">
              Instagram :
              <span class="text-webPrimary cursor-pointer"
                >https://instagram.com/nama-toko-kami</span
              >
            </div>
            <div class="text-gray-600 text-sm mt-3">
              Facebook :
              <span class="text-webPrimary cursor-pointer"
                >https://facebook.com/nama-toko-kami</span
              >
            </div>
            <div class="text-gray-600 text-sm mt-3">
              Youtube :
              <span class="text-webPrimary cursor-pointer"
                >https://youtube.com/nama-toko-kami</span
              >
            </div>
            <div class="text-gray-600 text-sm mt-3">
              Tiktok :
              <span class="text-webPrimary cursor-pointer"
                >https://tiktok.com/nama-toko-kami</span
              >
            </div>
            <div class="text-gray-600 text-sm flex flex-col gap-4 mt-4">
              <span>Jam Operasional Smmnusantara :</span>
              <span>Senin - Minggu : 12.00 AM - 12.00 AM</span>
              <span class="mt-2 italic">Note : tidak menerima telpon </span>
            </div>
          </div>
          <div
            class="col-span-2 flex justify-end items-end md:justify-center md:items-center mt-4 md:mt-0"
          >
            <img
              class="text-end w-1/2 md:w-4/5"
              src="../../assets/img/general/contact.png"
              alt="Kontak"
            />
          </div>
        </div>
      </div>
    </section>
    <FooterPage />
  </div>
</template>

<script>
import FooterPage from "@/components/FooterPage.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
    FooterPage,
  },
};
</script>

<style scoped>
.wave.wave9 {
  animation: animate 30s linear infinite;
  z-index: 10;
  opacity: 1;
  animation-delay: 0s;
  bottom: 250px;
}

.wave.wave10 {
  animation: animate2 15s linear infinite;
  z-index: 9;
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 260px;
}

.wave.wave11 {
  animation: animate 30s linear infinite;
  z-index: 8;
  opacity: 0.2;
  animation-delay: -2s;
  bottom: 260px;
}

.wave.wave12 {
  animation: animate2 5s linear infinite;
  z-index: 7;
  opacity: 0.7;
  animation-delay: -5s;
  bottom: 270px;
}

@keyframes animate {
  0% {
    background-position: 0;
  }
  100% {
    background-position: 1000px;
  }
}

@keyframes animate2 {
  0% {
    background-position: 0;
  }
  100% {
    background-position: -1000px;
  }
}
</style>
