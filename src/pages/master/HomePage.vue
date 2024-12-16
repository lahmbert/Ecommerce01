<template>
  <div class="flex w-full">
    <!-- Sidebar -->
    <div
      class="w-[30rem] shadow-md bg-gray-50 text-center pr-[9rem] z-10 relative"
    >
      <div class="py-9 px-6 pr-12">
        <div class="flex items-center justify-between">
          <div class="cursor-pointer">
            <img
              src="../../assets/img/general/logo-1.png"
              width="30px"
              alt=""
            />
          </div>
          <div>
            <i class="fas fa-bars text-lg cursor-pointer hover:scale-105"></i>
          </div>
        </div>
        <div
          class="uppercase text-start py-4 font-bold pt-12 text-gray-400 text-[.6rem]"
        >
          Menu
        </div>
        <div class="text-start text-sm font-semibold">
          <div
            class="capitalize py-4 flex items-center text-gray-400 cursor-pointer hover:text-gray-800 duration-500 gap-4"
          >
            <i class="fa-solid fa-desktop"></i>Dashboard
          </div>
          <div
            class="capitalize py-4 flex items-center text-gray-400 cursor-pointer hover:text-gray-800 duration-500 gap-4"
          >
            <i class="fa-solid fa-list"></i>Layanan
          </div>
          <div
            class="capitalize py-4 flex items-center text-gray-400 cursor-pointer hover:text-gray-800 duration-500 gap-4"
          >
            <i class="fas fa-shopping-cart"></i>Riwayat Pemesanan
          </div>
          <div
            class="capitalize py-4 flex items-center text-gray-400 cursor-pointer hover:text-gray-800 duration-500 gap-4"
          >
            <i class="fa-solid fa-newspaper"></i>Berita
          </div>
          <div
            class="capitalize py-4 flex items-center text-gray-400 cursor-pointer hover:text-gray-800 duration-500 gap-4"
          >
            <i class="fa-solid fa-user-minus"></i>Logout
          </div>
        </div>
      </div>
    </div>

    <!-- Main -->
    <div
      class="bg-gradient-to-tl shadow-sm relative w-full h-screen from-gray-100 to-gray-200 z-20 rounded-s-[3rem] -ml-[10rem]"
    >
      <div class="p-8 px-10 text-lg font-semibold">Main</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>