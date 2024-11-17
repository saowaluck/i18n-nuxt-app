<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <span class="text-xl font-semibold text-gray-700">MyWebsite</span>
      </div>

      <!--  TODO: DEMO HERE -->
      <!-- Navigation Menu -->
      <nav class="hidden md:flex space-x-6">
        <a class="text-gray-600 hover:text-blue-500" href="#home">{{ t('home') }}</a>
        <a class="text-gray-600 hover:text-blue-500" href="#about">{{ t('about')}}</a>
        <a class="text-gray-600 hover:text-blue-500" href="#services">{{ t('services')}}</a>
        <a class="text-gray-600 hover:text-blue-500" href="#contact">{{ t('contact')}}</a>
      </nav>

      <!-- Language Switcher -->
      <div class="flex items-center space-x-2">
        <form>
          <label for="locale-select">{{ t('language') }}: </label>
          <select v-model="locale" class="text-gray-600 border border-gray-300 rounded-md p-1">
            <option v-for="locale in availableLocales" :key="`locale-${locale}`" :value="locale">{{
                locale
              }}
            </option>
          </select>
        </form>
      </div>
    </div>
  </header>
</template>


<script setup>
const {t, locale, availableLocales} = useI18n();

</script>


<script>
export default {
  name: 'desktopHeader'
}
</script>
