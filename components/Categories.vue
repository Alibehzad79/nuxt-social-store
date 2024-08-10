<script setup>

const categories = ['همه', 'تلگرام', 'اینستاگرام', 'یوتیوب']
const selected = ref(categories[0])

</script>

<template>
    <div>
        <div class="flex flex-col gap-5">
            <div class="flex flex-col md:flex-row items-center justify-between gap-5">
                <div class="flex flex-col gap-5">
                    <strong class="text-3xl flex items-center gap-2">
                        <Icon name="uil:tag" class="text-primary animate-bounce " />
                        <span>خدمات ما</span>
                    </strong>
                    <p>سرویس های ما دارای بهترین کیفیت و به صرفه ترین قیمت هستند.</p>
                </div>
                <div>
                    <USelect color="white" variant="outline" icon="uil:filter" :options="categories" v-model="selected"
                        size="xl" placeholder="فیلتر کردن" />
                </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <NuxtLink to="#" v-for="category in 8" class="hover:scale-110 duration-300">
                    <div class="flex flex-col rounded gap-5 p-5 shadow-xl bg-white dark:bg-gray-800" :key="category">
                        <NuxtImg :src="`https://picsum.photos/1920/1080?random=${category}`" format="png" />
                        <strong class="text-3xl md:text-4xl">{{ selected }}</strong>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>