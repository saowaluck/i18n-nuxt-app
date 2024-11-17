<template>
  <main class="container mx-auto px-6 py-8">
    <h1>{{ t('hello', {name: 'ODDS CONF 🎉'}) }}</h1>
    <h1 class="text-3xl font-bold text-gray-800">Welcome to My Website</h1>
    <p class="mt-4 text-gray-600">
      This is a simple homepage example with Tailwind CSS, navigation
      menu, and language switcher.
    </p>
    <div class="my-9">
      <img alt="example image" class="object-cover" src="../assets/images/example.png"/>
    </div>
  </main>
</template>


<script setup>
const {t} = useI18n()
</script>


<script>
export default {
  name: 'mainContent'
}
</script>
