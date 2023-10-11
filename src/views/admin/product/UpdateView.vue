<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-xl font-bold">{{ mode }}</div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-4">
                <div v-for="form in formData" :key="form" class="form-control w-full">
                    <label class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </label>
                    <input 
                    type="text" 
                    class="input input-bordered w-full" 
                    v-model="productData[form.field]"
                    />
                </div>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-4">
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Status</span>
                    </label>
                    <select v-model="productData.status" class="select select-bordered w-full">
                        <option disabled selected>choose status</option>
                        <option value="open">Open</option>
                        <option value="close">Close</option>
                    </select>
                </div>
            </div>
            <div class="flex justify-end mt-4">
                <RouterLink :to="{ name: 'admin-products-list'}" class="btn btn-ghost">Back</RouterLink>
                <button @click="updateProduct()" class="btn btn-neutral ml-4">{{ mode }}</button>
            </div>
        </div>
    </AdminLayout>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'

import { useAdminProductStore } from '@/stores/admin/product'


const router = useRouter()
const route = useRoute()
const adminProductStore = useAdminProductStore()

const productIndex = ref(-1)
const mode = ref('ADD')

const formData = [
    {
        name: 'Name',
        field: 'name'
    },
    {
        name: 'Image',
        field: 'imageUrl'
    },
    {
        name: 'Price',
        field: 'price'
    },
    {
        name: 'Quantity',
        field: 'quantity'
    },
    {
        name: 'About',
        field: 'about'
    },
]

onMounted(() => {
    if (route.params.id) {
        productIndex.value = parseInt(route.params.id)
        mode.value = 'UPDATE'
        const selectedProduct = adminProductStore.getProduct(productIndex.value)

        productData.name = selectedProduct.name
        productData.imageUrl = selectedProduct.imageUrl
        productData.price = selectedProduct.price
        productData.quantity = selectedProduct.quantity
        productData.about = selectedProduct.about
        productData.status = selectedProduct.status
    }
})

const productData = reactive({
    name: '',
    imageUrl: '',
    price: 0,
    quantity: 0,
    about: '',
    status: ''
})

const updateProduct = () => {
    if ( mode.value === 'UPDATE') {
        adminProductStore.updateProduct(productIndex.value, productData)
    } else {
        adminProductStore.addProduct(productData)
    }
    router.push({ name: 'admin-products-list' })
}
</script>