<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">I SEA</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <router-link to="/user/" class="nav-link px-3">首頁</router-link>
            <router-link to="/user/products" class="nav-link px-3">所有產品</router-link>
            <router-link to="/user/coupons" class="nav-link px-3">優惠券</router-link>
            <router-link to="/user/cart" class="nav-link px-3">購物車</router-link>
          </div>
          </div>
      </div>
  </nav>
</template>