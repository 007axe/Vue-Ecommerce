<template>
    <AdminLayout>
        <div class="flex justify-between items-center my-4">
            <div class="text-3xl font-bold">Order</div>
        </div>
        <Table :headers="['Customer Name', 'Price', 'Status', 'Update At', '']">
            <tr v-for="(order, index) in adminOrderStore.list" :key="order">
                <td>{{ order.customerName }}</td>
                <td>{{ order.totalPrice }}</td>
                <td>{{ order.status }}</td>
                <td>{{ order.updatedAt }}</td>
                <td>
                    <RouterLink :to="{ name: 'admin-orders-detail', params: { id: index }}" class="btn">Detail</RouterLink>
                </td>
            </tr>
        </Table>
    </AdminLayout>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { useAdminOrderStore } from '@/stores/admin/order'

import AdminLayout from '@/layouts/AdminLayout.vue'

import Table from '@/components/Table.vue'

const adminOrderStore = useAdminOrderStore()
</script>