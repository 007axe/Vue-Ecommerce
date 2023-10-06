<template>
    <UserLayout>
        <h1 class="text-2xl font-bold m-4">Cheackout</h1>
        <div class="flex">
            <section class="flex-auto w-64 bg-base-200 p-8">
                <div v-for="form in FormData" :key="form" class="form-control w-full">
                    <label class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </label>
                    <input v-model="userFormData[form.field]" type="text" placeholder="Type here"
                        class="input input-bordered w-full" />
                </div>
                <button @click="payment()" class="btn btn-primary w-full mt-4">ชำระเงิน</button>
            </section>
            <section class="flex-auto w-64 bg-slate-200 px-2">
                <div v-for="item in cartStore.items" :key="item" class="flex bg-white m-8 py-4">
                    <div class="flex-1">
                        <img class="w-full p-8" :src="item.imageUrl" alt="">
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col justify-between h-full">
                            <div>
                                <div><b>{{ item.name }}</b></div>
                                <div>จำนวน: {{ item.quantity }}</div>
                            </div>
                            <RouterLink class="btn w-1/2" :to="{ name: 'cart' }">edit</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="p-4">
                    <div><b>Order summary</b></div>
                    <div class="flex justify-between">
                        <div>ราคาสินค้าทั้งหมด</div>
                        <div>{{ cartStore.summaryPrice }}</div>
                    </div>
                    <div class="flex justify-between">
                        <div>ค่าส่ง</div>
                        <div>0</div>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="flex justify-between p-4 mb-4">
                    <div>ราคาสินค้าทั้งหมด</div>
                    <div>{{ cartStore.summaryPrice }}</div>
                </div>
            </section>
        </div>
    </UserLayout>
</template>

<script setup>
import { reactive } from 'vue'
import { RouterLink, useRouter} from 'vue-router'
import UserLayout from '@/layouts/UserLayout.vue'

import { useCartStore } from '@/stores/user/cart'

const cartStore = useCartStore()
const router = useRouter()

const FormData = [
    {
        name: 'Email address',
        field: 'email'
    },
    {
        name: 'Name',
        field: 'name'
    },
    {
        name: 'Address',
        field: 'address'
    },
    {
        name: 'Note',
        field: 'note'
    }
]

const userFormData = reactive({
    email: '',
    name: '',
    address: '',
    note: ''
})

const payment = () => {
    // console.log(userFormData)
    cartStore.placeOrder(userFormData)
    router.push({ name: 'success'})
}

</script>