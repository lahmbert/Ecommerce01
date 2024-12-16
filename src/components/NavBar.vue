<template>
  <div
    :class="[
      'fixed w-full top-0 z-50 transition-colors duration-300',
      { 'bg-white shadow-md': isScrolled, 'bg-transparent': !isScrolled },
    ]"
  >
    <header
      class="p-4 flex md:p-4 text-sm px-9 md:px-[5rem] justify-between items-center"
      :class="{
        'bg-orange-500': isVisibleMenu && !isScrolled,
        'bg-white': isVisibleMenu && isScrolled,
      }"
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
          <div><router-link to="/">Utama</router-link></div>
          <div><router-link to="/home">Layanan</router-link></div>
          <div><router-link to="/contact">Kontak</router-link></div>
          <div>
            <button
              @click="openModal"
              class="from-orange-300 to-webPrimary bg-gradient-to-br hover:bg-webPrimary-dark hover:scale-110 duration-300 flex items-center gap-1 text-white p-2 px-6 rounded-full"
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
          <div><router-link to="/">Utama</router-link></div>
          <div><router-link to="/home">Layanan</router-link></div>
          <div><router-link to="/contact">Kontak</router-link></div>
          <div>
            <button
              @click="openModal"
              class="bg-white duration-300 flex hover:scale-110 items-center gap-1 text-webPrimary p-2 px-6 rounded-full"
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

    <!-- Menu Mobile -->
    <div
      v-if="isVisibleMenu"
      :class="[
        'items-center pt-1 justify-start px-10',
        { 'bg-white': isScrolled, 'bg-orange-500': !isScrolled },
      ]"
    >
      <ul>
        <li class="pb-2"><router-link to="/">Utama</router-link></li>
        <li class="pb-2"><router-link to="/home">Layanan</router-link></li>
        <li class="pb-2"><router-link to="/contact">Kontak</router-link></li>
        <li class="pb-4">
          <button
            @click="openModal"
            :class="[
              'text-webPrimary bg-white hover:scale-110 duration-300 p-2 px-6 w-full rounded-full',
              { hidden: isScrolled },
            ]"
          >
            <div class="items-center justify-center gap-1 flex">
              <i class="fas fa-sign-in-alt"></i>
              <span>Masuk</span>
            </div>
          </button>
          <button
            @click="openModal"
            :class="[
              'text-white p-2 px-6 w-full rounded-full hover:scale-110 duration-300 from-orange-300 to-webPrimary bg-gradient-to-br',
              { hidden: !isScrolled },
            ]"
          >
            <div class="items-center justify-center gap-1 flex">
              <i class="fas fa-sign-in-alt"></i>
              <span>Masuk</span>
            </div>
          </button>
        </li>
      </ul>
    </div>

    <!-- Modal Login: Pastikan hanya ada satu komponen LoginPage di sini -->
    <LoginPage :isOpen="isModalOpen" @close="closeModal" />
  </div>
</template>

<script>
import LoginPage from "@/pages/auth/LoginPage.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "App",
  components: {
    LoginPage,
  },
  setup() {
    const isModalOpen = ref(false); // Menyimpan status modal (terbuka atau tertutup)
    const route = useRoute(); // Mengambil informasi route saat ini

    // Fungsi untuk membuka modal
    const openModal = () => {
      isModalOpen.value = true;
    };

    // Fungsi untuk menutup modal
    const closeModal = () => {
      isModalOpen.value = false;
    };

    // Menangani query parameter saat komponen pertama kali dimuat
    onMounted(() => {
      if (route.query.login === "1") {
        isModalOpen.value = true; // Membuka modal jika query login=1 ada di URL
      }
    });

    return {
      isModalOpen,
      openModal,
      closeModal,
    };
  },
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
