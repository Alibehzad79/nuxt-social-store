<script setup>

const appConfig = useAppConfig()
const themeColor = useCookie('themeColor')

tryOnBeforeMount(() => {
  appConfig.ui.primary = themeColor.value ? themeColor.value : 'green'
})

</script>

<template>
  <UContainer class="mt-5">
    <NuxtLayout dir="rtl">
      <NuxtPage />
    </NuxtLayout>
  </UContainer>
</template>
