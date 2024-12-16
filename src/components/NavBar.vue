<template>
  <div
    :class="[
      'fixed w-full top-0 z-50 transition-colors duration-300',
      { 'bg-white shadow-md': isScrolled, 'bg-transparent': !isScrolled },
    ]"
  >
    <header
      class="p-4 flex md:p-4 text-sm px-9 md:px-[5rem] justify-between items-center"
      :class="[
        {
          'bg-orange-500': isVisibleMenu && !isScrolled,
          'bg-white': isVisibleMenu && isScrolled,
        },
      ]"
    >
      <div class="font-semibold">
        <img src="../assets/img/general/logo-1.png" alt="" width="10%" />
      </div>
      <div class="md:flex hidden">
        <div
          :class="[
            'text-black justify-around items-center flex gap-5',
            { hidden: !isScrolled },
          ]"
        >
          <div>Utama</div>
          <div>Layanan</div>
          <div>Kontak</div>
          <div>
            <button
              class="bg-webPrimary hover:bg-webPrimary-dark duration-300 flex items-center gap-1 text-white p-2 px-6 rounded-full"
            >
              <i class="fas fa-sign-in-alt"></i>
              <span>Masuk</span>
            </button>
          </div>
        </div>
        <div
          :class="[
            'text-white justify-around items-center flex gap-5',
            { hidden: isScrolled },
          ]"
        >
          <div>Utama</div>
          <div>Layanan</div>
          <div>Kontak</div>
          <div>
            <button
              class="bg-white text-webPrimary flex items-center gap-1 p-2 px-6 rounded-full"
            >
              <i class="fas fa-sign-in-alt"></i>
              <span>Masuk</span>
            </button>
          </div>
        </div>
      </div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-xl">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </header>
    <div
      v-if="isVisibleMenu"
      :class="[
        'items-center pt-1 justify-start px-10',
        { 'bg-white': isScrolled, 'bg-orange-500': !isScrolled },
      ]"
    >
      <ul>
        <li class="pb-2">Utama</li>
        <li class="pb-2">Layanan</li>
        <li class="pb-2">Kontak</li>
        <li class="pb-4">
          <Button
            :class="[
              'text-webPrimary bg-white p-2 px-6 w-full rounded-full',
              { hidden: isScrolled },
            ]"
          >
            <div class="items-center justify-center gap-1 flex">
              <i class="fas fa-sign-in-alt"></i>Masuk
            </div>
          </Button>
          <Button
            :class="[
              'text-white p-2 px-6 w-full rounded-full bg-webPrimary',
              { hidden: !isScrolled },
            ]"
            ><div class="items-center justify-center gap-1 flex">
              <i class="fas fa-sign-in-alt"></i>Masuk
            </div></Button
          >
        </li>
      </ul>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      isScrolled: false,
      isVisibleMenu: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMenu() {
      this.isVisibleMenu = !this.isVisibleMenu;
    },
  },
};
</script>
  
  <style scoped>
.fixed {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
</style>
  