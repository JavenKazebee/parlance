<template>
  <q-layout view="hhh lpr fff">
    <q-header>
      <div class="row">
        <div class="text-h4 header-text">Parlance</div>
      </div>
    </q-header>

    <q-drawer side="left" v-model="drawer">
      <q-list>
        <template v-for="item in menu" :key="item">
          <q-item
            clickable
            @click="navToPage(item)"
            :active="route.path == item.route"
          >
            <q-item-section> {{ item.label }} </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>

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

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const drawer = ref(true);

interface MenuItem {
  label: string;
  route: string;
}

const menu: MenuItem[] = [
  {
    label: 'Phonology',
    route: '/',
  },
  {
    label: 'Phonotactics',
    route: '/phonotactics',
  },
  { label: 'Spelling', route: '/spelling' },
  { label: 'Words', route: '/words' },
];

function navToPage(item: MenuItem) {
  router.push(item.route);
}
</script>

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
