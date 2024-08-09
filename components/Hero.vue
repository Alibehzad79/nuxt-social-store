<script setup lang="ts">
const items = [
    {
        img: 'https://picsum.photos/1920/1080?random=1',
        title: 'فالور ایرانی',
        content: "متن تستی برای نمایش",
        slug: 'slug'
    },
    {
        img: 'https://picsum.photos/1920/1080?random=2',
        title: 'فالور میکس ایرانی خارجی',
        content: "متن تستی برای نمایش",
        slug: 'slug'
    },
    {
        img: 'https://picsum.photos/1920/1080?random=3',
        title: 'فالور خارجی',
        content: "متن تستی برای نمایش",
        slug: 'slug'
    },
    {
        img: 'https://picsum.photos/1920/1080?random=4',
        title: 'لایک ایرانی',
        content: "متن تستی برای نمایش",
        slug: 'slug'
    },
    {
        img: 'https://picsum.photos/1920/1080?random=5',
        title: 'لایک میکس ایرانی خارجی',
        content: "متن تستی برای نمایش",
        slug: 'slug'
    },
    {
        img: 'https://picsum.photos/1920/1080?random=6',
        title: 'لایک خارجی',
        content: "متن تستی برای نمایش",
        slug: 'slug'
    }
]

const carouselRef = ref()

tryOnMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }

        carouselRef.value.next()
    }, 3000)
})
</script>

<template>
    <div dir="ltr">
        <div class="w-full flex items-center justify-between mt-10 hidden md:block">
            <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
                class="rounded-lg overflow-hidden">
                <div class="flex justify-between items-center gap-5">
                    <div class="flex flex-col justify-between w-1/2 h-full" dir="rtl">
                        <div class="flex flex-col gap-5 justify-center">
                            <strong class="text-5xl">{{ item.title }}</strong>
                            <p>{{ item.content }}</p>
                        </div>
                        <NuxtLink :to="'/' + item.slug">
                            <UButton label="خرید" class="justify-center w-full text-xl" size="xl" />
                        </NuxtLink>
                    </div>
                    <img :src="item.img" class="w-1/2 rounded" draggable="false">
                </div>
            </UCarousel>
        </div>
    </div>
</template>