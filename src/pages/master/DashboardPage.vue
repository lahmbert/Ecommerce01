<template>
  <div>
    <NavBar />
    <section class="min-h-screen pt-28 px-8 text-white md:px-[5rem] dashboard">
      <div class="md:grid grid-cols-6 pb-0">
        <div
          class="flex md:hidden col-span-2 items-center w-full text-center justify-center"
        >
          <span class="text-lg"
            ><img
              class="h-[150px]"
              src="../../assets/img/general/logo-1.png"
              alt="logo-1"
          /></span>
        </div>
        <div class="grid grid-cols-1 col-span-4">
          <span class="text-lg pb-2">Dashboard</span>
          <span class="text-2xl md:text-4xl pb-6 font-semibold"
            >SMM Panel Indonesia Termurah dan Terbaik</span
          >
          <span class="mb-4"
            >Menyediakan berbagai layanan Social Media Terlengkap dan
            Berkualitas dengan harga paling terjangkau di indonesia.</span
          >
          <span class="flex gap-4">
            <button
              class="flex gap-1 items-center hover:-translate-y-2 duration-300 p-2 px-6 bg-white rounded-full shadow-lg bg-gradient-to-tr text-webPrimary text-sm"
            >
              <i class="fas fa-sign-in-alt"></i>Masuk
            </button>
            <button
              class="flex gap-1 items-center p-2 px-6 from-orange-300 to-webPrimary bg-gradient-to-br hover:-translate-y-2 duration-300 rounded-full shadow-lg text-white text-sm"
            >
              <i class="fas fa-user-plus"></i>Daftar
            </button>
          </span>
        </div>
        <div
          class="hidden col-span-2 items-center w-full text-center justify-center md:flex"
        >
          <span class="text-lg"
            ><img
              class="h-[16rem]"
              src="../../assets/img/general/logo-1.png"
              alt="logo-1"
          /></span>
        </div>
        <div class="col-span-5">
          <div class="wave wave1"></div>
          <div class="wave wave2"></div>
          <div class="wave wave3"></div>
          <div class="wave wave4"></div>
        </div>
      </div>
    </section>
    <section class="md:mt-[-150px] mt-[-100px] px-8 md:px-[5rem]">
      <div
        class="w-full text-center justify-center flex md:flex-row flex-col gap-8 items-center relative z-10"
      >
        <div
          class="flex-col border rounded-xl bg-white shadow-md w-[20rem] md:w-[15rem] py-3 flex"
        >
          <div class="mb-1 text-2xl text-webPrimary font-bold">38.600</div>
          <div class="text-webAccent">Pengguna Aktif</div>
        </div>
        <div
          class="flex-col border rounded-xl bg-white shadow-md w-[20rem] md:w-[15rem] py-3 flex"
        >
          <div class="mb-1 text-2xl text-webPrimary font-bold">38.600</div>
          <div class="text-webAccent">Pesanan Dikerjakan</div>
        </div>
        <div
          class="flex-col border rounded-xl bg-white shadow-md w-[20rem] md:w-[15rem] py-3 flex"
        >
          <div class="mb-1 text-2xl text-webPrimary font-bold">38.600</div>
          <div class="text-webAccent">Layanan Tersedia</div>
        </div>
      </div>
    </section>
    <section
      class="justify-center mb-[5rem] text-[.94rem] text-center mt-[80px]"
    >
      <div class="relative z-10">
        <div class="md:grid flex flex-col grid-cols-3 px-8 md:px-[5rem]">
          <div
            class="col-span-1 md:mb-0 mb-6 px-[5rem] text-center justify-center"
          >
            <img
              class="w-[14rem] justify-center text-center"
              src="../../assets/img/general/logo-1.png"
              alt="Logo"
            />
          </div>
          <div class="col-span-2 px-2 flex flex-col text-start">
            <div class="text-3xl mb-4 font-bold">NAMA TOKO</div>
            <div class="mb-2">
              Smmnusantara adalah salah satu Platform Panel SMM Indonesia
              Termurah dan Terbaik yang menyediakan layanan Media Sosial
              Terlengkap dan Berkualitas dengan harga paling terjangkau di
              indonesia. Solusi terbaik untuk Media Sosial anda! Membeli Layanan
              SMM Termurah, Terbaik dan Tercepat milik kami adalah pilhan yang
              tepat.
            </div>
            <div>
              <button
                class="items-center p-2 px-6 hover:-translate-y-2 from-orange-300 to-webPrimary bg-gradient-to-br text-white mt-1 rounded-full hover:bg-webPrimary-dark shadow-md duration-300 flex gap-1"
              >
                <i class="fas fa-phone text-sm"></i>Kontak Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="md:px-[5rem] text-center justify-center bg-opacity-80 bg-webAccent-light"
    >
      <div class="grid grid-cols-3">
        <div
          class="col-span-3 text-center md:text-3xl text-xl py-14 font-semibold justify-center"
        >
          Kenapa harus <br />
          NAMA TOKO KU?
        </div>
        <div
          class="flex md:col-span-1 pb-6 mx-8 md:mb-0 flex-row col-span-3 gap-4 items-center"
        >
          <i class="fas text-6xl fa-crown"></i>
          <div>
            <div class="md:text-xl text-lg font-bold text-start">
              Kualitas Layanan
            </div>
            <p class="text-start text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam reprehenderit neque necessitatibus quasi aliquid
              corrupti!
            </p>
          </div>
        </div>
        <div
          class="flex md:col-span-1 pb-6 mx-8 md:mb-0 flex-row col-span-3 gap-4 items-center"
        >
          <i class="fas text-6xl fa-headset"></i>
          <div>
            <div class="md:text-xl text-lg font-bold text-start">
              Pelayanan Bantuan
            </div>
            <p class="text-start text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam reprehenderit neque necessitatibus quasi aliquid
              corrupti!
            </p>
          </div>
        </div>
        <div
          class="flex md:col-span-1 pb-6 mx-8 md:mb-0 flex-row col-span-3 gap-4 items-center"
        >
          <i class="fas text-6xl fa-wallet"></i>
          <div>
            <div class="md:text-xl text-lg font-bold text-start">
              Metode Pembayaran
            </div>
            <p class="text-start text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam reprehenderit neque necessitatibus quasi aliquid
              corrupti!
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="md:px-[5rem] bg-webAccent-light bg-opacity-80 px-8">
      <div class="col-span-3 text-center pt-14 md:text-3xl text-xl font-bold">
        Apa kata mereka?
      </div>
      <div class="col-span-3 py-14">
        <CarouSel />
      </div>
      <div class="md:flex hidden">
        <div class="wave wave5"></div>
        <div class="wave wave6"></div>
        <div class="wave wave7"></div>
        <div class="wave wave8"></div>
      </div>
    </section>
    <section class="md:px-[5rem] justify-center text-center px-8">
      <PaymentComps />
    </section>
    <FooterPage />
  </div>
</template>

<script>
import CarouSel from "@/components/CarouSel.vue";
import FooterPage from "@/components/FooterPage.vue";
import NavBar from "@/components/NavBar.vue";
import PaymentComps from "@/components/PaymentComps.vue";

export default {
  components: {
    NavBar,
    FooterPage,
    CarouSel,
    PaymentComps,
  },
};
</script>

<style>
.dashboard {
  background-image: url("../../assets/img/general/landing01.jpg");
  background-size: cover;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("../../assets/img/general/wave.png");
  background-size: 1000px 100px;
}

.wave.wave1 {
  animation: animate 30s linear infinite;
  z-index: 10;
  opacity: 1;
  animation-delay: 0s;
  bottom: 0;
}

.wave.wave2 {
  animation: animate2 15s linear infinite;
  z-index: 9;
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 10px;
}

.wave.wave3 {
  animation: animate 30s linear infinite;
  z-index: 8;
  opacity: 0.2;
  animation-delay: -2s;
  bottom: 10px;
}

.wave.wave4 {
  animation: animate2 5s linear infinite;
  z-index: 7;
  opacity: 0.7;
  animation-delay: -5s;
  bottom: 20px;
}

.wave.wave5 {
  animation: animate 30s linear infinite;
  z-index: 6;
  opacity: 0.4;
  animation-delay: -7s;
  bottom: -1090px; /* Adjusted to be further down */
}

.wave.wave6 {
  animation: animate2 15s linear infinite;
  z-index: 5;
  opacity: 0.3;
  animation-delay: -10s;
  bottom: -1080px; /* Further down */
}

.wave.wave7 {
  animation: animate 30s linear infinite;
  z-index: 4;
  opacity: 0.6;
  animation-delay: -12s;
  bottom: -1080px; /* Further down */
}

.wave.wave8 {
  animation: animate2 5s linear infinite;
  z-index: 3;
  opacity: 0.5;
  animation-delay: -15s;
  bottom: -1070px; /* Further down */
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
@media screen and (max-width: 640px) {
  .wave.wave5 {
    animation: animate 30s linear infinite;
    z-index: 6;
    opacity: 0.4;
    animation-delay: -7s;
    bottom: -1960px; /* Adjusted to be further down */
  }

  .wave.wave6 {
    animation: animate2 15s linear infinite;
    z-index: 5;
    opacity: 0.3;
    animation-delay: -10s;
    bottom: -1950px; /* Further down */
  }

  .wave.wave7 {
    animation: animate 30s linear infinite;
    z-index: 4;
    opacity: 0.6;
    animation-delay: -12s;
    bottom: -1950px; /* Further down */
  }

  .wave.wave8 {
    animation: animate2 5s linear infinite;
    z-index: 3;
    opacity: 0.5;
    animation-delay: -15s;
    bottom: -1940px; /* Further down */
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
}
</style>