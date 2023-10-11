<template>
    <AdminLayout>
        <div class="flex justify-between items-center my-4">
            <div class="text-3xl font-bold">User</div>
        </div>
        <Table :headers="['Name', 'Role', 'Status', 'Update At', '']">
            <tr v-for="(user, index) in adminUserStore.list" :key="user">
                <td>{{ user.fullname }}</td>
                <td>{{ user.role }}</td>
                <td>  
                    <div :class=" user.status === 'active' ? 'badge-success' : 'badge-error' "
                    class="badge ">
                        {{ user.status }}
                    </div>          
                </td>
                <td>{{ user.updateAt }}</td>
                <td>
                    <div class="flex gap-2">
                        <RouterLink 
                        :to="{ name: 'admin-users-update', params: { id: index } }" 
                        class="btn">
                            Edit
                        </RouterLink>
                        <button class="btn" @click="changeStatus(index)">
                            {{ user.status === 'active' ? 'Disable' : 'Enable' }}
                        </button>
                    </div>
                </td>
            </tr>
        </Table>
    </AdminLayout>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { useAdminUserStore } from '@/stores/admin/user'

import AdminLayout from '@/layouts/AdminLayout.vue'

import Edit from '@/components/icons/Edit.vue'
import Trash from '@/components/icons/Trash.vue'
import Table from '@/components/Table.vue'



const adminUserStore = useAdminUserStore()

const changeStatus = (index) => {
    let selectedUser = adminUserStore.list[index]
    selectedUser.status = selectedUser.status === 'active' ? 'inactive' : 'active'
    adminUserStore.updateAt(selectedUser)
}

</script>