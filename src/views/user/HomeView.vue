<template>
  <UserLayout>
    <div class="hero h-96 bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello To Axe Shop</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
    
    <Product :products="productStore.list"
            :addToCart="addToCart"/>  

    
  </UserLayout>
</template>

<script setup>
import { useRouter } from 'vue-router'

import UserLayout from "@/layouts/UserLayout.vue";

import Product from "@/components/Product.vue";

import { useProductStore } from '@/stores/user/product'
import { useCartStore } from '@/stores/user/cart'

const productStore = useProductStore()
const cartStore = useCartStore()
const router = useRouter()

const addToCart = (product) => {
  // console.log('Hello Add To Cart')
  // console.log(product)
  cartStore.addToCart(product)
  router.push({ name: 'cart' })
}
</script>