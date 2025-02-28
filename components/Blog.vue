<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Latest News & Resources</h2>
          <p class="mt-2 text-lg/8 text-gray-600">Stay informed about medical transportation best practices and industry updates.</p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="post in posts" :key="post.id" class="flex flex-col items-start justify-between">
            <div class="relative w-full">
              <img :src="post.imageUrl" alt="" class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2" />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
            </div>
            <div class="max-w-xl">
              <div class="mt-8 flex items-center gap-x-4 text-xs">
                <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
                <a :href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</a>
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a :href="post.href">
                    <span class="absolute inset-0" />
                    {{ post.title }}
                  </a>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">{{ post.description }}</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <img :src="post.author.imageUrl" alt="" class="size-10 rounded-full bg-gray-100" />
                <div class="text-sm/6">
                  <p class="font-semibold text-gray-900">
                    <a :href="post.author.href">
                      <span class="absolute inset-0" />
                      {{ post.author.name }}
                    </a>
                  </p>
                  <p class="text-gray-600">{{ post.author.role }}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const posts = [
    {
      id: 1,
      title: 'Choosing the Right Medical Transportation Service for Your Needs',
      href: '/blog/choosing-medical-transport',
      description:
        'Understanding the differences between ambulatory, wheelchair, and stretcher transports can make all the difference in patient comfort and safety. Learn how to select the appropriate service based on mobility needs and medical requirements.',
      imageUrl: '/images/blog/wheelchair-transport.jpg',
      date: 'Feb 12, 2025',
      datetime: '2025-02-12',
      category: { title: 'Patient Care', href: '/category/patient-care' },
      author: {
        name: 'Dr. Sarah Johnson',
        role: 'Medical Director',
        href: '/team/sarah-johnson',
        imageUrl: '/images/team/sarah-johnson.jpg',
      },
    },
    {
      id: 2,
      title: 'Compassionate Care: The Importance of Specialized Hospice Transport',
      href: '/blog/hospice-transport',
      description:
        'Hospice transportation requires a unique approach that balances medical needs with emotional sensitivity. Our experienced team discusses best practices for ensuring dignity and comfort during these critical moments for patients and their families.',
      imageUrl: '/images/blog/hospice-care.jpg',
      date: 'Jan 28, 2025',
      datetime: '2025-01-28',
      category: { title: 'Hospice Care', href: '/category/hospice-care' },
      author: {
        name: 'James Rivera',
        role: 'Transport Specialist',
        href: '/team/james-rivera',
        imageUrl: '/images/team/james-rivera.jpg',
      },
    },
    {
      id: 3,
      title: 'Safety Protocols in Long-Distance Medical Transportation',
      href: '/blog/long-distance-safety',
      description:
        'When patients require interstate medical transport, additional considerations come into play. This article covers essential safety protocols, comfort measures, and logistics planning that ensure successful long-distance medical journeys.',
      imageUrl: '/images/blog/long-distance-transport.jpg',
      date: 'Jan 15, 2025',
      datetime: '2025-01-15',
      category: { title: 'Safety Standards', href: '/category/safety' },
      author: {
        name: 'Michelle Torres',
        role: 'Operations Manager',
        href: '/team/michelle-torres',
        imageUrl: '/images/team/michelle-torres.jpg',
      },
    },
  ]
  </script>