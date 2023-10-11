<template>
    <div>
        <div class="drawer drawer-open">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content mx-4">
                <slot></slot>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <li class="text-3xl font-bold mb-4">Backoffice</li>
                    <!-- Sidebar content here -->
                    <li v-for="link in SibarRouter" :key="link">
                        <RouterLink :class="link.link === activeMenu ? 'active' :' '" :to="{ name:link.link }">
                            {{ link.name }}
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const SibarRouter = [
    { name: 'Dashboard', link: 'admin-dashboard'},
    { name: 'User', link: 'admin-users-list'},
    { name: 'Product', link: 'admin-products-list'},
    { name: 'Order', link: 'admin-orders-list'},
    { name: 'Logout', link: 'admin-login'},
]

const route = useRoute()
const activeMenu = ref('')

onMounted(() => {
    activeMenu.value = route.name
})
</script>