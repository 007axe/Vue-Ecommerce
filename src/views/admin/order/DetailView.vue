<template>
    <AdminLayout>
        <div class="shadow-2xl p-8 mt-4">
            <div class="text-xl font-bold">Order Detail</div>
            <div class="divider"></div>
            <div class="grid grid-cols-2">
                <div>
                    <div>
                        <div class="font-bold">Order data</div>
                        <div>{{ orderData.updatedAt }}</div>
                    </div>
                    <div>
                        <div class="font-bold mt-4">Payment method</div>
                        <div>{{ orderData.paymentMethod }}</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="font-bold">Order Number</div>
                        <div>{{ orderData.no }}</div>
                    </div>
                    <div>
                        <div class="font-bold mt-4">Address</div>
                        <div>{{ orderData.address }}</div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-4 items-center" v-for="product in orderData.products" :key="product">
                <div class="mx-auto">
                    <img class="p-2 w-20" :src="product.imageUrl">
                </div>
                <div>
                    <div class="font-bold">{{ product.name }}</div>
                    <div>{{ product.description }}</div>
                </div>
                <div>จำนวน {{ product.quantity }} ชิ้น</div>
                <div>{{ product.price }} บาท</div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between">
                <div class="font-bold">ราคาสินค้าทั้งหมด</div>
                <div>{{ orderData.totalPrice }} บาท</div>
            </div>
            <div class="flex justify-end mt-4">
                <RouterLink class="btn btn-ghost" :to="{ name: 'admin-orders-list' }">back</RouterLink>
            </div>
        </div>
    </AdminLayout>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useAdminOrderStore } from '@/stores/admin/order'
import AdminLayout from '@/layouts/AdminLayout.vue'

const route = useRoute()

const orderIndex = ref(-1)
const orderData = ref({
    products: []
})
const adminOrderStore = useAdminOrderStore()

onMounted(() => {
    if (route.params.id) {
        orderIndex.value = parseInt(route.params.id)
        const selectedOrder = adminOrderStore.getOrder(orderIndex.value)
        orderData.value = selectedOrder

    }
})


</script>