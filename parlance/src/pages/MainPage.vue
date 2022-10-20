<template>
  <q-page>
    <div class="row">
      <IPATable></IPATable>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import IPATable from 'src/components/IPATable.vue';
import genConsonants from 'src/ts/genConsonants';
import { ref } from 'vue';
</script>

<style lang="scss" scoped>
.card {
  margin: 3rem 0rem 0rem 3rem;
}
</style>
