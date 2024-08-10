<script setup>

const props = defineProps([
    'title',
    'slug',
    'image',
    'views'
])

</script>

<template>
    <div>
        <div class="flex flex-col gap-5 bg-white dark:bg-gray-800 p-5 rounded">
            <img :src="image" :alt="title" class="rounded">
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