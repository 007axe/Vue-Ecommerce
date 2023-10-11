<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-xl font-bold">Update User</div>
            <div class="divider"></div>
            <div class="grid grid-cols-1 gap-2">
                <div v-for="form in formData" :key="form" class="form-control w-full">
                    <label class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </label>
                    <input 
                    v-if="form.type === 'text'" 
                    v-model="userData[form.field]" 
                    type="text" 
                    class="input input-bordered w-full"  />
                    <select 
                    v-if="form.type === 'select'" 
                    v-model="userData[form.field]"
                    class="select select-bordered">
                        <option v-for="item in form.dropdowList" :key="item">{{ item }}</option>
                    </select>
                </div>
            </div>
            <div class="flex justify-end mt-4">
                <RouterLink :to="{ name: 'admin-users-list' }" class="btn btn-ghost">Back</RouterLink>
                <button @click="updateUser()" class="btn btn-neutral ml-4">Update</button>
            </div>
        </div>

    </AdminLayout>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'

import { useAdminUserStore } from '@/stores/admin/user'
import { useEventStore } from '@/stores/event'

const route = useRoute()
const router = useRouter()
const adminUserStore = useAdminUserStore()
const eventStore = useEventStore()

const userIndex = ref(-1)
const userData = reactive({
    fullname: '',
    role: '',
    status: ''
})

const formData = [
    {
        name: 'Name',
        field: 'fullname',
        type: 'text'
    },
    {
        name: 'Role',
        field: 'role',
        type: 'select',
        dropdowList: ['admin', 'moderator', 'user']
    },
    {
        name: 'Status',
        field: 'status',
        type: 'select',
        dropdowList: ['active', 'inactive']
    }
]

onMounted(() => {
    if (route.params.id) {
        userIndex.value = parseInt(route.params.id)
        const selcetedUser = adminUserStore.getUser(userIndex.value)
         userData.fullname = selcetedUser.fullname
         userData.role = selcetedUser.role
         userData.status = selcetedUser.status
    }
})



const updateUser = () => {
    adminUserStore.updateUser(userIndex.value, userData)
    eventStore.popupMessage('info','Update user successful')
    router.push({ name: 'admin-users-list'})
}
</script>