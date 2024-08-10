<script setup>
import { useImage } from '@vueuse/core'
const load = ref(true)
tryOnMounted(() => {
    load.value = false
})

const props = defineProps([
    'title',
    'slug',
    'image',
    'views'
])

const { isLoading } = useImage({ src: props.image })

</script>

<template>
    <div>
        <div v-if="load" class="text-center">
            <Icon name="svg-spinners:bars-rotate-fade" />
        </div>
        <div class="flex flex-col gap-5 bg-white dark:bg-gray-800 p-5 rounded" v-if="!load">
            <Icon v-if="isLoading" name="svg-spinners:bars-rotate-fade" />
            <img :src="image" :alt="title" class="rounded" v-if="!isLoading" loading="lazy">
            <h4 class="text-2xl line-clamp-1">{{ title }}</h4>
            <span class="flex gap-1 items-center">
                <Icon name="uil:eye" />:
                {{ views }} بازدید
            </span>
            <NuxtLink to="#">
                <UButton label="بیشتر" class="justify-center w-full" variant="outline" size="xl" />
            </NuxtLink>
        </div>
    </div>
</template>