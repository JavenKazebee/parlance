<template>
  <div>
    <q-select
      class="selector"
      v-model="store.stress"
      :options="stressOptions"
      :disable="!editing"
    />
  </div>
</template>

<script lang="ts" setup>
import { useLanguageStore } from 'src/stores/language';
import { stressOptions } from '../ts/genStress';

const store = useLanguageStore();

defineProps<{
  editing: boolean;
}>();
</script>

<style lang="scss">
.selector {
  margin: 1rem 1rem 1rem 1rem;
}
</style>
