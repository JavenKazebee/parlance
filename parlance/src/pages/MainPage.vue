<template>
  <q-page>
    <div class="row">
      <SectionCard title="Consonants" v-slot="slotProps">
        <IPATable
          :editing="slotProps.editing"
          :columnHeaders="consonantColumnHeaders"
          :rowHeaders="consonantRowHeaders"
          :data="consonantData"
        />
      </SectionCard>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { QPage } from 'quasar';
import IPATable from 'src/components/IPATable.vue';
import SectionCard from 'src/components/SectionCard.vue';
import { IPA, ipa, Manner, Place } from 'src/ts/ipa';

const consonantColumnHeaders = [
  'Bilabial',
  'Labiodental',
  'Dental',
  'Alveolar',
  'Postaveolar',
  'Retroflex',
  'Palatal',
  'Velar',
  'Uvular',
  'Pharyngeal',
  'Glottal',
];

const consonantRowHeaders = ['Plosive', 'Nasal', 'Trill'];

const consonantData = [
  [
    {
      voiced: ipa[1],
      unvoiced: ipa[0],
      colspan: 1,
    },
    {
      voiced: new IPA('', Manner.Approximant, Place.Alveolar, false, false),
      unvoiced: new IPA('', Manner.Approximant, Place.Alveolar, false, false),
      colspan: 1,
    },
    {
      voiced: ipa[2],
      unvoiced: ipa[3],
      colspan: 3,
    },
    {
      voiced: ipa[4],
      unvoiced: ipa[5],
      colspan: 1,
    },
    {
      voiced: ipa[6],
      unvoiced: ipa[7],
      colspan: 1,
    },
    {
      voiced: ipa[8],
      unvoiced: ipa[9],
      colspan: 1,
    },
    {
      voiced: ipa[10],
      unvoiced: ipa[11],
      colspan: 1,
    },
    {
      voiced: new IPA('', Manner.Approximant, Place.Alveolar, false, false),
      unvoiced: new IPA('', Manner.Approximant, Place.Alveolar, false, false),
      colspan: 1,
    },
    {
      voiced: ipa[12],
      unvoiced: new IPA('', Manner.Approximant, Place.Alveolar, false, false),
      colspan: 1,
    },
  ],
  [
    {
      voiced: ipa[13],
      unvoiced: new IPA('', Manner.Approximant, Place.Alveolar, false, false),
      colspan: 1,
    },
    {
      voiced: ipa[14],
      unvoiced: new IPA('', Manner.Approximant, Place.Alveolar, false, false),
      colspan: 1,
    },
    {
      voiced: ipa[15],
      unvoiced: new IPA('', Manner.Approximant, Place.Alveolar, false, false),
      colspan: 3,
    },
    {
      voiced: ipa[16],
      unvoiced: new IPA('', Manner.Approximant, Place.Alveolar, false, false),
      colspan: 1,
    },
    {
      voiced: ipa[17],
      unvoiced: new IPA('', Manner.Approximant, Place.Alveolar, false, false),
      colspan: 1,
    },
    {
      voiced: ipa[18],
      unvoiced: new IPA('', Manner.Approximant, Place.Alveolar, false, false),
      colspan: 1,
    },
    {
      voiced: ipa[19],
      unvoiced: new IPA('', Manner.Approximant, Place.Alveolar, false, false),
      colspan: 1,
    },
    {
      voiced: new IPA('', Manner.Approximant, Place.Alveolar, false, false),
      unvoiced: new IPA('', Manner.Approximant, Place.Alveolar, false, false),
      colspan: 1,
    },
    {
      voiced: new IPA('', Manner.Approximant, Place.Alveolar, false, false),
      unvoiced: new IPA('', Manner.Approximant, Place.Alveolar, false, false),
      colspan: 1,
    },
  ],
];
</script>

<style lang="scss" scoped>
.card {
  margin: 3rem 0rem 0rem 3rem;
}
</style>
