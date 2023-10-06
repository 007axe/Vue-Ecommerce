<template>
    <div class="container mx-auto">
        <NavBar/>
        <!-- Main Conmtent -->
        <slot></slot> 
        <Footer/>
    </div>
</template>
<script setup>


import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

</script>