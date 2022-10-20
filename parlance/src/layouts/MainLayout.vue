<template>
  <q-layout view="hhh LpR fff">
    <q-header>
      <div class="row">
        <div class="text-h4 header-text">Parlance</div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <div class="row">
        <div class="footer-text">Created by Javen Kazebee</div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.header {
  background-color: $primary;
}

.header-text {
  margin: 1rem 0rem 1rem 1rem;
}

.menu-item {
  cursor: pointer;
  &:hover {
    background-color: $grey-5;
  }
}

.menu-item-active {
  color: $primary;
}

.footer-text {
  margin: 0.5rem 0rem 0.5rem 1rem;
}
</style>
