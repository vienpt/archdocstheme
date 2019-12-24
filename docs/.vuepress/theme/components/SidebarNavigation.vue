<template>
  <nav class="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8">
    <div class="mb-8" v-for="section in $themeLocaleConfig.sidebar">
      
      <h5 class="mb-3 lg:mb-2 text-gray-700 uppercase tracking-wide font-bold text-sm lg:text-xs">{{ section.title }}</h5>
      <ul>
        <li class="mb-3 lg:mb-1" v-for="[link, title] in section.children">
          <router-link :to="link" v-if="$route.path === link" class="px-2 -mx-2 py-1 transition-fast relative block text-blue-600 font-medium">
            <span class="rounded absolute inset-0 bg-blue-200 opacity-25"></span>
            <span class="relative">{{ title }}</span>
          </router-link>

          <router-link :to="link" v-else class="px-2 -mx-2 py-1 transition-fast relative block hover:translate-r-2px hover:text-gray-900 text-gray-600 font-medium">
            <span class="rounded absolute inset-0 bg-teal-200 opacity-0"></span>
            <span class="relative">{{ title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: [],
  mounted () {}
}
</script>
