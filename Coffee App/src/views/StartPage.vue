<template>
    <div class="startpage_wrapper">
        <div class="logo">
            <img src="../assets/logo_startpage.svg" :to="{ name: 'listing' }" alt="Logo">
        </div>
        <h1 class="clickToStart">
            <router-link :to="{ name: 'listing' }" class="link">Click here to start</router-link>
        </h1>
    </div>
</template>