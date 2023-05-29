<template>
    <main class="startpage">
        <div class="startpage_wrapper">
            <div class="logo">
                <router-link :to="{ name: 'listing' }">
                    <img src="../assets/logo_startpage.svg" :to="{ name: 'listing' }" alt="Logo">
                </router-link>
            </div>
            <h1 class="clickToStart">
                <router-link :to="{ name: 'listing' }" class="link">Click here to start</router-link>
            </h1>
        </div>
    </main>
</template>