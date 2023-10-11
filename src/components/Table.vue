<template>
    <div class="overflow-x-auto">
        <table class="table">
            <thead>
                <tr>
                    <th v-for="header in headers" :key="header">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <slot></slot>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
    headers: Array
})
</script>