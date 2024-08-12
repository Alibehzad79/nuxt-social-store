<script setup>
const load = ref(true)
tryOnMounted(() => {
    load.value = false
})

</script>

<template>
    <div>
        <div v-if="load" class="text-center">
            <Icon name="svg-spinners:bars-rotate-fade" />
        </div>
        <footer v-if="!load"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 justify-items-center mt-10">
            <div class="flex flex-col gap-5 items-center">
                <strong class="text-3xl font-bold">خدمات فضای مجازی</strong>
                <p>درباره سایت</p>
            </div>
            <div class="flex flex-col gap-5 items-center">
                <strong class="font-bold text-xl">دسترسی سریع</strong>
                <div class="flex flex-col gap-3">
                    <NuxtLink to="/">خانه</NuxtLink>
                    <NuxtLink to="/products">فروشگاه</NuxtLink>
                    <NuxtLink to="/blog">وبلاگ</NuxtLink>
                    <NuxtLink to="/contact">تماس با ما</NuxtLink>
                </div>
            </div>
            <div class="flex flex-col gap-5 items-center">
                <strong class="font-bold text-xl">دسته بندی</strong>
                <div class="flex flex-col gap-3">
                    <NuxtLink to="">تلگرام</NuxtLink>
                    <NuxtLink to="">اینستاگرام</NuxtLink>
                    <NuxtLink to="">فیسبوک</NuxtLink>
                    <NuxtLink to="">تیک آبی</NuxtLink>
                </div>
            </div>
        </footer>
    </div>
</template>