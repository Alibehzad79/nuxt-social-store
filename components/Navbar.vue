<script setup>

const load = ref(true)
tryOnMounted(() => {
    load.value = false
})

const appConfig = useAppConfig()
const colors = appConfig.ui.colors
const gries = ['zinc', 'cool', 'stone', 'neutral', 'slate']
const themeColor = useCookie('themeColor')
const themeGray = useCookie('themeGray')
const colorMode = useColorMode()
const isOpen = ref(false)
const popoverOpen = ref(false)
const searchDialog = ref(false)


const changeThemeMode = () => colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
const changeTheme = (name) => {
    appConfig.ui.primary = name
    themeColor.value = name
}
const changeThemeGray = (name) => {
    appConfig.ui.gray = name
    themeGray.value = name
}
</script>

<template>
    <div v-if="load" class="text-center">
        <Icon name="svg-spinners:bars-rotate-fade" />
    </div>
    <div class="sticky top-4 md:top-0 z-10 mt-5" v-if="!load">
        <nav class="flex justify-between  items-center py-5 md:py-2 px-5 bg-white rounded dark:bg-gray-900">
            <div>
                <NuxtLink to="/">
                    <NuxtImg src="/logo.png" sizes="sm:150px md:260px" class="fill-red-500" loading="lazy" />
                </NuxtLink>
            </div>
            <div class="hidden md:block">
                <ul class="flex gap-5 items-center ">
                    <li>
                        <NuxtLink to="/">خانه</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products">فروشگاه</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog">وبلاگ</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">تماس با ما</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="flex gap-5 items-center ">
                <Icon :name="colorMode.value === 'dark' ? 'uil:sun' : 'uil:moon'" class="cursor-pointer text-xl"
                    @click="changeThemeMode" />
                <UPopover v-model:open="popoverOpen" mode="hover">
                    <Icon name="uil:paint-tool" class="text-primary text-xl" @click="popoverOpen = !popoverOpen" />
                    <template #panel>
                        <div class="p-4 grid grid-cols-4 gap-4">
                            <UTooltip v-for="color in colors" :text="color" class="capitalize">
                                <Icon name="uil:circle" :class="'text-' + color + '-500'" class="cursor-pointer text-xl"
                                    @click="changeTheme(color)" />
                            </UTooltip>
                        </div>
                        <UDivider class="mb-5" />
                        <div class="p-4 grid grid-cols-4 gap-4">
                            <UTooltip v-for="gray in gries" :text="gray" class="capitalize">
                                <Icon name="ic:baseline-circle" class="text-gray-500 cursor-pointer text-xl"
                                    @click="changeThemeGray(gray)" />
                            </UTooltip>
                        </div>
                    </template>
                </UPopover>
                <UButton icon="uil:search" variant="ghost" class="hidden md:block"
                    @click="searchDialog = !searchDialog" />
                <UButton icon="uil:bars" class="md:hidden" @click="isOpen = true" />
            </div>
            <USlideover v-model="isOpen" class="md:hidden">
                <UCard class="flex flex-col flex-1"
                    :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                    <template #header>
                        <UButton color="gray" variant="ghost" size="sm" icon="i-heroicons-x-mark-20-solid"
                            class="flex sm:hidden absolute end-5 top-5 z-10" square padded @click="isOpen = false" />
                        <NuxtLink to="/">
                            <NuxtImg src="/logo.png" sizes="sm:150px md:260px" class="fill-red-500" loading="lazy" />
                        </NuxtLink>
                    </template>

                    <div class="flex flex-col gap-10">
                        <div class="flex gap-1">
                            <UInput type="search" placeholder="جستوجو کنید..." class="w-full" size="xl" />
                            <UButton icon="uil:search" size="xl" />
                        </div>
                        <div>
                            <ul class="flex flex-col gap-5 mx-5">
                                <li>
                                    <NuxtLink to="/">خانه</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/products">فروشگاه</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/blog">وبلاگ</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/contact">تماس با ما</NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p class="text-gray-400">توضیحات سایت</p>
                        </div>
                    </div>
                </UCard>
            </USlideover>
        </nav>
        <UModal v-model="searchDialog" class="hidden md:block" fullscreen>
            <UCard :ui="{
        base: 'h-full flex flex-col',
        rounded: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        body: {
            base: 'grow'
        }
    }">
                <template #header>
                    <div class="flex items-center">
                        <UButton color="red" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="searchDialog = false" />
                    </div>
                </template>
                <div class="p-4 flex flex-col gap-32 items-center justify-center">
                    <div class="w-full flex gap-2">
                        <UInput type="search" size="xl" class="w-full" placeholder="تلگرام...." />
                        <UButton icon="uil:search" size="xl" />
                    </div>
                    <div class="grid grid-cols-2 gap-5">
                        <NuxtLink to="#">
                            <NuxtImg src="logo.png" />
                        </NuxtLink>
                        <NuxtLink to="#">
                            <NuxtImg src="logo.png" />
                        </NuxtLink>
                        <NuxtLink to="#">
                            <NuxtImg src="logo.png" />
                        </NuxtLink>
                        <NuxtLink to="#">
                            <NuxtImg src="logo.png" />
                        </NuxtLink>
                    </div>
                </div>
                <template #footer>
                    <div class="flex items-center">
                        <UButton color="red" label="بستن" trailing icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="searchDialog = false" />
                    </div>
                </template>
            </UCard>
        </UModal>
    </div>
</template>