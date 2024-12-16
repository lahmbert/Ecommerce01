<template>
  <div class="w-full relative">
    <div class="swiper centered-slide-carousel swiper-container relative">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div
            class="bg-orange-300 flex flex-col gap-4 shadow-md rounded p-8 justify-center items-center"
          >
            <span class="text-sm text-gray-700"
              >"Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt, vero illo assumenda velit nam consequuntur molestiae
              voluptate impedit perferendis tenetur."</span
            >
            <span class="text-xl font-semibold text-gray-700">Slide 1 </span>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="bg-orange-300 flex flex-col gap-4 shadow-md rounded p-8 justify-center items-center"
          >
            <span class="text-sm text-gray-700"
              >"Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt, vero illo assumenda velit nam consequuntur molestiae
              voluptate impedit perferendis tenetur."</span
            >
            <span class="text-xl font-semibold text-gray-700">Slide 2 </span>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="bg-orange-300 flex flex-col gap-4 shadow-md rounded p-8 justify-center items-center"
          >
            <span class="text-sm text-gray-700"
              >"Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt, vero illo assumenda velit nam consequuntur molestiae
              voluptate impedit perferendis tenetur."</span
            >
            <span class="text-xl font-semibold text-gray-700">Slide 3 </span>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="bg-orange-300 flex flex-col gap-4 shadow-md rounded p-8 justify-center items-center"
          >
            <span class="text-sm text-gray-700"
              >"Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt, vero illo assumenda velit nam consequuntur molestiae
              voluptate impedit perferendis tenetur."</span
            >
            <span class="text-xl font-semibold text-gray-700">Slide 4 </span>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="bg-orange-300 flex flex-col gap-4 shadow-md rounded p-8 justify-center items-center"
          >
            <span class="text-sm text-gray-700"
              >"Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt, vero illo assumenda velit nam consequuntur molestiae
              voluptate impedit perferendis tenetur."</span
            >
            <span class="text-xl font-semibold text-gray-700">Slide 5 </span>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="bg-orange-300 flex flex-col gap-4 shadow-md rounded p-8 justify-center items-center"
          >
            <span class="text-sm text-gray-700"
              >"Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt, vero illo assumenda velit nam consequuntur molestiae
              voluptate impedit perferendis tenetur."</span
            >
            <span class="text-xl font-semibold text-gray-700">Slide 6 </span>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="bg-orange-300 flex flex-col gap-4 shadow-md rounded p-8 justify-center items-center"
          >
            <span class="text-sm text-gray-700"
              >"Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt, vero illo assumenda velit nam consequuntur molestiae
              voluptate impedit perferendis tenetur."</span
            >
            <span class="text-xl font-semibold text-gray-700">Slide 7 </span>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="bg-orange-300 flex flex-col gap-4 shadow-md rounded p-8 justify-center items-center"
          >
            <span class="text-sm text-gray-700"
              >"Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt, vero illo assumenda velit nam consequuntur molestiae
              voluptate impedit perferendis tenetur."</span
            >
            <span class="text-xl font-semibold text-gray-700">Slide 8 </span>
          </div>
        </div>
        <div class="swiper-slide">
          <div
            class="bg-orange-300 flex flex-col gap-4 shadow-md rounded p-8 justify-center items-center"
          >
            <span class="text-sm text-gray-700"
              >"Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt, vero illo assumenda velit nam consequuntur molestiae
              voluptate impedit perferendis tenetur."</span
            >
            <span class="text-xl font-semibold text-gray-700">Slide 9 </span>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css"; // Import Swiper CSS

export default {
  mounted() {
    new Swiper(".centered-slide-carousel", {
      centeredSlides: true,
      paginationClickable: true,
      loop: true,
      spaceBetween: 30,
      slideToClickedSlide: true,
      pagination: {
        el: ".centered-slide-carousel .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1920: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1028: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        990: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  },
};
</script>

<style scoped>
.swiper-wrapper {
  height: max-content !important;
  padding-bottom: 64px !important;
  -webkit-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
  position: relative;
}
.swiper-pagination-bullet {
  background: #4f46e5;
}
.swiper-pagination-bullet-active {
  background: #4f46e5 !important;
}
</style>
