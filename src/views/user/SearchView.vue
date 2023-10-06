<template>
    <UserLayout>
        <div class="text-2xl m-4">Search: <b>{{ searchText }}</b></div>
        <Product :products="filerProducts"
        :addToCart="addToCart"/>
    </UserLayout>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import UserLayout from '@/layouts/UserLayout.vue'
import Product from "@/components/Product.vue";

import { useProductStore } from '@/stores/user/product'
import { useCartStore } from '@/stores/user/cart'

const productStore = useProductStore()
const cartStore = useCartStore()
const route = useRoute()
const router = useRouter()
const searchText = ref('')

onMounted(() => {
    if (route.query.q) {
        searchText.value = route.query.q
    }
})

watch(() => route.query.q, (newSearchText) => {
    searchText.value = newSearchText
}, { immediate: true })  // โหลดจังหวะแรก

const filerProducts = computed(() => {
    return productStore.filerProducts(searchText.value)
})

const addToCart = (product) => {
  // console.log('Hello Add To Cart')
  // console.log(product)
  cartStore.addToCart(product)
  router.push({ name: 'cart' })
}
</script>