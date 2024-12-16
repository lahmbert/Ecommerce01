<template>
  <div>
    <div
      class="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-center"
    >
      <div
        class="bg-white mt-24 mx-6 md:mx-auto px-10 md:px-10 text-sm shadow-md flex flex-col justify-center rounded-xl md:w-[26rem] m-auto md:p-6"
      >
        <div class="py-4 flex justify-center items-center duration-100">
          <img
            src="../../assets/img/general/logo-1.png"
            width="80px"
            alt="logo-1"
          />
        </div>
        <div class="py-4 flex flex-col gap-1 justify-center">
          <span class="text-gray-800 text-lg font-bold">Daftar</span>
          <span class="text-gray-400"
            >Segera mendaftar dan dapatkan keuntungan.</span
          >
        </div>
        <div class="py-4">
          <div class="flex flex-col pb-4">
            <span class="text-start font-semibold text-gray-600 pl-1 pb-2"
              ><label for="name">Nama Lengkap</label></span
            >
            <input
              class="p-2 focus:outline-none text-gray-700 border rounded-lg"
              type="name"
              name="name"
              id="name"
              placeholder="Enter name!"
            />
          </div>
          <div class="flex flex-col pb-4">
            <span class="text-start font-semibold text-gray-600 pl-1 pb-2"
              ><label for="email">Email</label></span
            >
            <input
              class="p-2 focus:outline-none text-gray-700 border rounded-lg"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email!"
            />
          </div>
          <div class="flex flex-col pb-4">
            <span class="text-start font-semibold text-gray-600 pl-1 pb-2"
              ><label for="password">Password</label></span
            >
            <input
              class="p-2 focus:outline-none text-gray-700 border rounded-lg"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password!"
            />
          </div>
          <div class="flex flex-col pb-4">
            <span class="text-start font-semibold text-gray-600 pl-1 pb-2"
              ><label for="confirm-password">Konfirmasi Password</label></span
            >
            <input
              class="p-2 focus:outline-none text-gray-700 border rounded-lg"
              type="confirm-password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Enter password again!"
            />
          </div>
          <div class="py-2 text-start">
            Dengan mendaftar berarti Anda setuju dengan
            <br class="md:flex hidden" />
            <span class="text-webPrimary cursor-pointer"
              >Ketentuan Layanan.</span
            >
          </div>
          <div>
            <button
              class="from-orange-300 bg-gradient-to-br duration-300 to-webPrimary hover:-translate-y-1 text-center justify-center w-full p-2 rounded-full text-white"
            >
              Daftar
            </button>
          </div>
          <div class="pt-6">
            Sudah Mempunyai Akun?
            <span class="cursor-pointer text-webPrimary"
              ><router-link to="/?login=1">Masuk</router-link></span
            >
          </div>
        </div>
      </div>
      <div class="py-12 text-sm">
        <p>&copy; <span id="year">2024</span> Polleck. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style>
</style>
  