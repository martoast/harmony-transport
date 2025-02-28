<template>
    <div>
      <Navbar/>
      <slot />
      <Footer/>
    </div>
  </template>
  
  <script setup>
  
  useSeoMeta({
          robots: 'index, follow',
          title: 'Harmony Homecare',
          ogTitle: 'Harmony Homecare',
      
          author: 'Alex Martos',
          charset: 'utf-8',
      
          description: "Our mission is simple: provide dignity, comfort, and a sense of belonging to those who need it most. From personalized care plans to specialized memory care, our compassionate team is dedicated to providing exceptional support in a warm and nurturing environment designed for comfort and well-being.",
          ogDescription: "Our mission is simple: provide dignity, comfort, and a sense of belonging to those who need it most. From personalized care plans to specialized memory care, our compassionate team is dedicated to providing exceptional support in a warm and nurturing environment designed for comfort and well-being.",
      
          googleSiteVerification: 'ByJ5-rnCYL33Ld2dFoqsnAIRz2LmOc58iB52O8eOaPQ',
      
          appleMobileWebAppCapable: 'yes',
          mobileWebAppCapable: 'yes',
      
          ogImage: '/tea.jpeg',
      
          ogLocaleAlternate: ['es_LA'],
          ogType: 'website',
          viewport: 'width=device-width, initial-scale=1',
      })
  
  </script>