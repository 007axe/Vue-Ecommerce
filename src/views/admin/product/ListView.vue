<template>
    <AdminLayout>
        <div class="flex justify-between items-center my-4">
            <div class="text-3xl font-bold">Product</div>
            <div>
                <RouterLink :to="{ name: 'admin-products-create' }" class="btn btn-neutral">Add new</RouterLink>
            </div>
        </div>
        <Table
        :headers="['name', 'image', 'price', 'quantity', 'status', 'updatedAt', '']">
            <tr v-for="(product, index) in adminProductStore.list" :key="product">
                <th>{{ product.name }}</th>
                <td><img class="w-12" :src="product.imageUrl"></td>
                <td>{{ product.price }}</td>
                <td>{{ product.remainQuantity }}/{{ product.quantity }}</td>
                <td :class="product.status === 'open' ? 'badge badge-success' : 'badge badge-error'">{{ product.status }}
                </td>
                <td>{{ product.updatedAt }}</td>
                <td class="flex ">
                    <RouterLink :to="{ name: 'admin-products-update', params: { id: index } }" class="btn btn-ghost">
                        <Edit />
                    </RouterLink>
                    <div @click="removeProduct(index)" class="btn btn-ghost">
                        <Trash />
                    </div>
                </td>
            </tr>
        </table>
    </AdminLayout>
</template>
<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

import { useAdminProductStore } from '@/stores/admin/product'

import AdminLayout from '@/layouts/AdminLayout.vue'

import Edit from '@/components/icons/Edit.vue'
import Trash from '@/components/icons/Trash.vue'
import Table from '@/components/Table.vue'


const adminProductStore = useAdminProductStore()

onMounted(() => {
    adminProductStore.loadProducts()
})

const removeProduct = (id) => {
    adminProductStore.removeProduct(id)
}
</script>