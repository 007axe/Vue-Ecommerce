<template>
  <div class="h-screen flex items-center">
    <div class="flex-1 max-w-2xl shadow-xl mx-auto p-8">
      <div class="flex flex-col items-center">
        <h1 class="text-2xl">Login</h1>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Your Email"
            class="input input-bordered w-full"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Your Password"
            class="input input-bordered w-full"
          />
        </div>
        <RouterLink :to="{ name: 'admin-dashboard'}" class="btn mt-4 w-full">Login</RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'

</script>
