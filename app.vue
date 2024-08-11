<script setup>

const appConfig = useAppConfig()
const themeColor = useCookie('themeColor')
const themeGray = useCookie('themeGray')

tryOnBeforeMount(() => {
  appConfig.ui.primary = themeColor.value ? themeColor.value : 'green'
  appConfig.ui.gray = themeGray.value ? themeGray.value : 'cool'
})

</script>

<template>
  <div>
    <UContainer>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UContainer>
  </div>
</template>
