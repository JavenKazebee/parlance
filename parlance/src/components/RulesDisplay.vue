<template>
  <div class="row">
    <div>
      <h6>Onsets</h6>
      <q-list>
        <q-item v-for="manner in store.onsets" :key="manner">{{
          manner.toString()
        }}</q-item>
      </q-list>
    </div>
    <div>
      <h6>Codas</h6>
      <q-list>
        <q-list>
          <q-item v-for="manner in store.codas" :key="manner">{{
            manner.toString()
          }}</q-item>
        </q-list>
      </q-list>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLanguageStore } from 'src/stores/language';

const store = useLanguageStore();
</script>
