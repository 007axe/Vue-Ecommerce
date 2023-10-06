<template>
    <UserLayout>
        <h1 class="text-2xl font-bold m-4">Shoping Cart</h1>
        <div class="flex">

            <div class="flex-auto w-64 bg-base-200 p-4">
                <div v-if="cartStore.items.length === 0">
                    Cart is empty
                </div>
                <div v-else class="flex px-8" v-for="(item, index) in cartStore.items" :key="item">
                    <div class="flex-1">
                        <img class="w-48 " :src="item.imageUrl">
                    </div>
                    <div class="flex-1 pl-4">
                        <div class="flex flex-col justify-between h-full">
                            <div>
                                <div class="relative grid grid-cols-2">
                                    <div>
                                        <div><b>{{ item.name }}</b></div>
                                        <div>{{ item.about }}</div>
                                        <div>{{ item.price }}</div>
                                    </div>
                                    <div>
                                        <select v-model="item.quantity" @change="changeQuantity($event, index)" class="select select-bordered w-1/2 mx-6">
                                            <option v-for="quantity in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="quantity">{{ quantity }}
                                            </option>
                                        </select>
                                    </div>
                                    <div @click="cartStore.removeItemeInCart(index)"
                                        class="absolute top-0 right-0 cursor-pointer">
                                        <Close />
                                    </div>
                                </div>
                            </div>
                            <div><b>In Stock</b></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-auto w-32 bg-slate-200 p-4">
                <div class="text-xl font-bold">Order Summary</div>
                <div class="my-4 divide-y divide-gray-500">
                    <div class="flex justify-between py-2">
                        <div>ราคาสินค้าทั้งหมด</div>
                        <div>{{ cartStore.summaryPrice }}</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div>ค่าส่ง</div>
                        <div>0</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div>ราคารวมทั้งหมด</div>
                        <div>{{ cartStore.summaryPrice }}</div>
                    </div>
                    <RouterLink :to="{ name: 'checkout' }" class="btn btn-primary w-full mt-4">ชำระเงิน</RouterLink>
                </div>
            </div>
        </div>
    </UserLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import UserLayout from '@/layouts/UserLayout.vue'
import Close from '@/components/icons/Close.vue'

import { useCartStore } from '@/stores/user/cart'

const cartStore = useCartStore()

const changeQuantity = (event, index) => {
    const newQuantity = parseInt(event.target.value)
    cartStore.updateQuantity(index, newQuantity)
}

</script>