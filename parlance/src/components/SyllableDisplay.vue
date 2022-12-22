<template>
  <div>
    <q-select
      class="selector"
      v-model="store.syllables"
      :options="syllableOptions"
      :disable="!editing"
    />
  </div>
</template>

<script lang="ts" setup>
import { useLanguageStore } from 'src/stores/language';
import { syllableOptions } from 'src/ts/genSyllables';

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
