<template>
  <q-page>
    <div class="row">
      <SectionCard
        title="Stress"
        :editing="editingStress"
        @generate="generateStress"
        @editing="editingStress = !editingStress"
      >
        <StressDisplay :editing="editingStress" />
      </SectionCard>

      <SectionCard
        title="Syllables"
        :editing="editingSyllables"
        @generate="generateSyllables"
        @editing="editingSyllables = !editingSyllables"
      >
        <SyllableDisplay :editing="editingSyllables" />
      </SectionCard>

      <SectionCard
        title="Rules"
        :editing="editingRules"
        @generate="generateRules"
        @editing="editingRules = !editingRules"
      >
        <RulesDisplay />
      </SectionCard>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SectionCard from 'src/components/SectionCard.vue';
import StressDisplay from 'src/components/StressDisplay.vue';
import { genStress } from 'src/ts/genStress';
import { genSyllables } from 'src/ts/genSyllables';
import SyllableDisplay from 'src/components/SyllableDisplay.vue';
import RulesDisplay from 'src/components/RulesDisplay.vue';
import { genRules } from 'src/ts/genRules';

let editingStress = ref(false);
let editingSyllables = ref(false);
let editingRules = ref(false);

function generateStress() {
  genStress();
}

function generateSyllables() {
  genSyllables();
}

function generateRules() {
  genRules();
}
</script>

<style lang="scss" scoped>
.card {
  margin: 3rem 0rem 0rem 3rem;
}

.row {
  align-items: flex-start;
}
</style>
