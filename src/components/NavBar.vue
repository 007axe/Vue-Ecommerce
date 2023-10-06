<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <RouterLink :to="{ name: 'home' }" class="text-xl">AxeShop</RouterLink>
        </div>
        <div class="flex-none">
            <div class="form-control">
                <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" v-model="searchText"
                    @keyup="handleSearch" />
            </div>
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span class="badge badge-sm indicator-item">{{ cartStore.summaryQuantity }}</span>
                    </div>
                </label>
                <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div class="card-body">
                        <span class="font-bold text-lg">{{ cartStore.summaryQuantity }} Items</span>
                        <span class="text-info">Subtotal: {{ cartStore.summaryPrice }} B</span>
                        <div class="card-actions">
                            <RouterLink :to="{ name: 'cart' }" class="btn btn-primary btn-block">View cart</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <button v-if="!isLoggedIn" @click="login" class="btn btn-ghost">
                Login
            </button>
            <div v-else class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img
                            src="https://images.unsplash.com/photo-1553524082-82690780f842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80" />
                    </div>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <RouterLink :to="{ name: 'profile' }">Profile</RouterLink>
                    </li>
                    <li><a @click="logout">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import { RouterLink, useRouter } from "vue-router"

import { useCartStore } from '@/stores/user/cart'

const cartStore = useCartStore()

const router = useRouter()

const isLoggedIn = ref(false)
const searchText = ref('')


onMounted(() => {
    if (localStorage.getItem("isLoggedIn")) {
        isLoggedIn.value = true
    }
})
const login = () => {
    isLoggedIn.value = true;
    localStorage.setItem("isLoggedIn", true)
}
const logout = () => {
    isLoggedIn.value = false;
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("cart-data")
    localStorage.removeItem("order-data")
    window.location.reload() //refresh เว็ป
}

const handleSearch = (event) => {
    if (event.key === 'Enter') {
      router.push({
        name: 'search',
        query: {
          q: searchText.value
        }
      })
    }
  }
</script>