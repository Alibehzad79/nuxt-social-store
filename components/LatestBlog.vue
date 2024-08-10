<script setup>
const load = ref(true)
tryOnMounted(()=>{
    load.value = false
})

</script>

<template>
    <div>
        <div v-if="load" class="text-center">
            <Icon name="svg-spinners:bars-rotate-fade" />
        </div>
        <div class="flex flex-col gap-5 items-center justify-center" v-if="!load">
            <div class="flex flex-col gap-2 items-center">
                <strong class="text-3xl">آخرین وبلاگ</strong>
                <p class="text-gray-500">آخرین مقاله های نوشته شده در سایت</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <ArticleCard v-for="article in 4" :key="article" :title="'مقاله' + article"
                    :image="'https://picsum.photos/1920/1080?random=' + article" :slug="'article-' + article"
                    :views="1000 * article" />
            </div>
        </div>
    </div>
</template>