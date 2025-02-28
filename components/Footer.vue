<template>
  <footer class="bg-gray-50">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <div
        class="border-t border-gray-900/10 pt-12 xl:grid xl:grid-cols-3 xl:gap-8"
      >
        <div>
          <a href="/">
            <img class="h-12" src="/logo.jpg" alt="Apollo" />
          </a>
          <p class="mt-4 text-sm text-gray-600">
            Providing exceptional medical transportation services. Licensed and
            certified.
          </p>
          <div class="mt-4 space-y-2">
            <a
              href="tel:+1(956)382-4168"
              class="flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (956) 382-4168
            </a>
            <a
              href="sms:+1(956)382-4168"
              class="flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              Text Us
            </a>
            <p class="flex items-center text-sm text-gray-600">
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Serving San Antonio, New Braunfels, Schertz, Cibolo, and Boerne
            </p>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm/6 font-semibold text-gray-950">Services</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.services" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm/6 text-gray-600 hover:text-red-600 transition-colors duration-200"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm/6 font-semibold text-gray-950">Company</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm/6 text-gray-600 hover:text-red-600 transition-colors duration-200"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm/6 font-semibold text-gray-950">Resources</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.resources" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm/6 text-gray-600 hover:text-red-600 transition-colors duration-200"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm/6 font-semibold text-gray-950">Legal</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-sm/6 text-gray-600 hover:text-red-600 transition-colors duration-200"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-12 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between"
      >
        <div class="flex gap-x-6 md:order-2">
          <a
            v-for="item in navigation.social"
            :key="item.name"
            :href="item.href"
            class="text-gray-600 hover:text-red-600 transition-colors duration-200"
            target="_blank"
          >
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="size-6" aria-hidden="true" />
          </a>
        </div>
        <p class="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">
          &copy; {{ new Date().getFullYear() }} Apollo Ambulance Service Inc.
          All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from "vue";

const navigation = {
  services: [
    { name: "Emergency Transport", href: "#services" },
    { name: "Non-Emergency Transport", href: "#services" },
    { name: "Long-Distance Transport", href: "#services" },
    { name: "Bariatric Transport", href: "#services" },
    { name: "Special Care Transport", href: "#services" },
  ],
  company: [
    { name: "Home", href: "/" },
    { name: "Coverage Areas", href: "#coverage" },
    { name: "Careers", href: "/careers/" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Patient Resources", href: "/resources" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "HIPAA Compliance", href: "/hipaa" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61573706578890",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
  ],
};
</script>
