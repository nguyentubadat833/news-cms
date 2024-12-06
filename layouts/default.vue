<script setup lang="ts">
const colorMode = useColorMode()

const menuItems = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }], [{
    label: 'Domain',
    icon: 'heroicons:globe-asia-australia-20-solid',
    click: () => {
      navigateTo('/domain')
    }
  }, {
    label: 'Post',
    icon: 'heroicons:newspaper',
    click: () => {
      navigateTo('/post')
    }
  }]
]

function changeColorMode() {
  if (colorMode.value !== 'light') {
    colorMode.value = 'light'
  } else {
    colorMode.value = 'dark'
  }
}
</script>

<template>
  <UContainer class="h-screen py-4">
    <UCard class="h-full overflow-hidden overflow-y-auto">
      <template #header>
        <div class="flex justify-between">
          <NuxtLink to="/" class="flex items-center gap-3 cursor-pointer">
            <Icon name="fluent-emoji-flat:rolled-up-newspaper" size="30"/>
            <span class="text-xl font-bold">NEWS CMS</span>
          </NuxtLink>
          <div class="flex items-center gap-5">
            <UDropdown :items="menuItems" :popper="{ placement: 'bottom-start' }">
              <UButton color="white" label="Menu" trailing-icon="i-heroicons-chevron-down-20-solid"/>
            </UDropdown>
            <ColorScheme>
              <UButton @click="changeColorMode" color="gray" variant="ghost"
                       :icon="colorMode.value === 'dark' ? 'heroicons:sun' : 'heroicons:moon'"/>
            </ColorScheme>
          </div>
        </div>
      </template>
      <NuxtPage/>
    </UCard>
  </UContainer>
</template>

<style scoped>

</style>