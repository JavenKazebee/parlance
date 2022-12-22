<template>
  <q-page>
    <div class="row">
      <SectionCard title="Words" :editing="false">
        <WordsDisplay />
      </SectionCard>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import SectionCard from 'src/components/SectionCard.vue';
import WordsDisplay from 'src/components/WordsDisplay.vue';
</script>

<style lang="scss" scoped>
.card {
  margin: 3rem 0rem 0rem 3rem;
}

.row {
  align-items: flex-start;
}
</style>
