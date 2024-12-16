<template>
  <div v-if="isOpen" class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div
          class="bg-white w-full text-sm text-center justify-center px-8 pt-5 pb-4 sm:p-6 sm:pb-4"
        >
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center w-full sm:mt-0 sm:mx-4 sm:text-left">
              <div class="flex flex-row justify-between">
                <h3 class="text-lg leading-6 font-bold text-gray-900">Masuk</h3>
                <button @click="closeModal">
                  <i class="fas fa-times text-black text-lg"></i>
                </button>
              </div>
              <div class="mt-8 w-full">
                <div class="w-full flex flex-col gap-2 text-gray-600">
                  <div><label for="email">Email</label></div>
                  <div class="pb-2">
                    <input
                      class="w-full focus:outline-none rounded-xl p-2 items-center border border-gray-300"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Input email!"
                    />
                  </div>
                  <div class="w-full flex flex-row justify-between">
                    <div><label for="password"></label>Kata Sandi</div>
                    <div class="text-webPrimary">
                      <router-link to="/forget">Lupa Kata Sandi?</router-link>
                    </div>
                  </div>
                  <div class="pb-2">
                    <input
                      class="w-full focus:outline-none rounded-xl p-2 items-center border border-gray-300"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Input password!"
                    />
                  </div>
                  <div class="flex flex-row gap-1 justify-start items-center">
                    <div>
                      <input
                        class="mt-[0.35rem]"
                        type="checkbox"
                        name="ingat-saya"
                        id="ingat-saya"
                      />
                    </div>
                    <div><label for="ingat-saya">Ingat Saya</label></div>
                  </div>
                  <div class="my-3">
                    <button
                      class="from-orange-300 bg-gradient-to-br to-webPrimary p-2 rounded-full hover:-translate-y-1 duration-300 text-white w-full"
                    >
                      <router-link to="/product">Masuk</router-link>
                    </button>
                  </div>
                  <div class="justify-center text-center my-4">
                    Belum Mempunyai Akun?
                    <router-link class="text-webPrimary" to="/register"
                      >Daftar</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
   
<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close"); // Emit event untuk menutup modal
    },
  },
};
</script>