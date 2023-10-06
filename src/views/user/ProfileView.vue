<template>
    <UserLayout>
        <div class="max-w-2xl  mx-auto border border-base-200 shadow-xl p-8 my-4">
            <div class="text-2xl font-bold">Your Profile Page</div>
            <div class="flex flex-col items-center">
                <div class="flex flex-col items-center">
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <img :src="profileImageUrl">
                        </div>
                    </div>
                    <input type="file" @change="handleFileUpload">
                </div>
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input v-model="email" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input v-model="name" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
            </div>
            <button @click="updateProfile" class="btn btn-secondary w-full mt-4">Update profile</button>
        </div>
    </UserLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import UserLayout from '@/layouts/UserLayout.vue'

const profileImageUrl = ref('https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop')
const email = ref('')
const name = ref('')

onMounted(() => {
    let profileData = localStorage.getItem('profile-data')
    if (profileData) {
        if (profileData) {
        profileData = JSON.parse(profileData)
        profileImageUrl.value = profileData.imageUrl
        name.value = profileData.name
        email.value = profileData.email
    }
    }
})

const handleFileUpload = (event) => {
    const file = event.target.files[0]

    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            profileImageUrl.value = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

const updateProfile = () => {
    const profileData = {
        imageUrl: profileImageUrl.value,
        name: name.value,
        email: email.value
    }
    localStorage.setItem('profile-data', JSON.stringify(profileData))
    alert('Update profile complate')
}
</script>