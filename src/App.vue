<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/Menu">Menu</router-link>|
      <router-link to="/OrderStatus">Order Status</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import '/src/assets/scss/main.scss';
</style>
