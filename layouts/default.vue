<script setup>

</script>

<template>
    <div class="flex flex-col gap-5 relative">
        <Navbar />
        <slot />
        <div class="absolute z-10 bottom-0 sticky w-32 right-10">
            <NuxtLink to="#">
                <UChip text="پشتیبانی" size="2xl">
                    <Icon name="ic:twotone-telegram" class="animate-bounce" style="font-size: 5rem;" />
                </UChip>
            </NuxtLink>
        </div>
    </div>
</template>