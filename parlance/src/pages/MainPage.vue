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
      <SectionCard title="Vowels" v-slot="slotProps">
        <IPATable
          :editing="slotProps.editing"
          :columnHeaders="vowelColumnHeaders"
          :rowHeaders="vowelRowHeaders"
          :data="vowelData"
        />
      </SectionCard>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { QPage } from 'quasar';
import IPATable from 'src/components/IPATable.vue';
import SectionCard from 'src/components/SectionCard.vue';
import { ipa, emptyIPA } from 'src/ts/ipa';

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

const consonantRowHeaders = [
  'Plosive',
  'Nasal',
  'Trill',
  'Flap/Tap',
  'Fricative',
  'Lateral Fricative',
  'Approximant',
  'Lateral Approximant',
];

const consonantData = [
  [
    {
      voiced: ipa[1],
      unvoiced: ipa[0],
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
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
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[12],
      unvoiced: emptyIPA,
      colspan: 1,
    },
  ],
  [
    {
      voiced: ipa[13],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[14],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[15],
      unvoiced: emptyIPA,
      colspan: 3,
    },
    {
      voiced: ipa[16],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[17],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[18],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[19],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
  ],
  [
    {
      voiced: ipa[20],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[21],
      unvoiced: emptyIPA,
      colspan: 3,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[22],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
  ],
  [
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[23],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[24],
      unvoiced: emptyIPA,
      colspan: 3,
    },
    {
      voiced: ipa[25],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
  ],
  [
    {
      voiced: ipa[26],
      unvoiced: ipa[27],
      colspan: 1,
    },
    {
      voiced: ipa[28],
      unvoiced: ipa[29],
      colspan: 1,
    },
    {
      voiced: ipa[30],
      unvoiced: ipa[31],
      colspan: 1,
    },
    {
      voiced: ipa[32],
      unvoiced: ipa[33],
      colspan: 1,
    },
    {
      voiced: ipa[34],
      unvoiced: ipa[35],
      colspan: 1,
    },
    {
      voiced: ipa[36],
      unvoiced: ipa[37],
      colspan: 1,
    },
    {
      voiced: ipa[38],
      unvoiced: ipa[39],
      colspan: 1,
    },
    {
      voiced: ipa[40],
      unvoiced: ipa[41],
      colspan: 1,
    },
    {
      voiced: ipa[42],
      unvoiced: ipa[43],
      colspan: 1,
    },
    {
      voiced: ipa[44],
      unvoiced: ipa[45],
      colspan: 1,
    },
    {
      voiced: ipa[46],
      unvoiced: ipa[47],
      colspan: 1,
    },
  ],
  [
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[48],
      unvoiced: ipa[49],
      colspan: 3,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
  ],
  [
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[50],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[51],
      unvoiced: emptyIPA,
      colspan: 3,
    },
    {
      voiced: ipa[52],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[53],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[54],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
  ],
  [
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[55],
      unvoiced: emptyIPA,
      colspan: 3,
    },
    {
      voiced: ipa[56],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[57],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[58],
      unvoiced: emptyIPA,
      colspan: 1,
    },
  ],
];

const vowelColumnHeaders = ['Front', 'Central', 'Back'];

const vowelRowHeaders = [
  'Close',
  'Near-Close',
  'Close-Mid',
  'Mid',
  'Open-Mid',
  'Near-Open',
  'Open',
];

const vowelData = [
  [
    {
      voiced: ipa[59],
      unvoiced: ipa[60],
      colspan: 1,
    },
    {
      voiced: ipa[61],
      unvoiced: ipa[62],
      colspan: 1,
    },
    {
      voiced: ipa[63],
      unvoiced: ipa[64],
      colspan: 1,
    },
  ],
  [
    {
      voiced: ipa[65],
      unvoiced: ipa[66],
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[67],
      unvoiced: emptyIPA,
      colspan: 1,
    },
  ],
  [
    {
      voiced: ipa[68],
      unvoiced: ipa[69],
      colspan: 1,
    },
    {
      voiced: ipa[70],
      unvoiced: ipa[71],
      colspan: 1,
    },
    {
      voiced: ipa[72],
      unvoiced: ipa[73],
      colspan: 1,
    },
  ],
  [
    {
      voiced: ipa[74],
      unvoiced: ipa[75],
      colspan: 1,
    },
    {
      voiced: ipa[76],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[77],
      unvoiced: ipa[78],
      colspan: 1,
    },
  ],
  [
    {
      voiced: ipa[79],
      unvoiced: ipa[80],
      colspan: 1,
    },
    {
      voiced: ipa[81],
      unvoiced: ipa[82],
      colspan: 1,
    },
    {
      voiced: ipa[83],
      unvoiced: ipa[84],
      colspan: 1,
    },
  ],
  [
    {
      voiced: ipa[85],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[86],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: emptyIPA,
      unvoiced: emptyIPA,
      colspan: 1,
    },
  ],
  [
    {
      voiced: ipa[87],
      unvoiced: ipa[88],
      colspan: 1,
    },
    {
      voiced: ipa[89],
      unvoiced: emptyIPA,
      colspan: 1,
    },
    {
      voiced: ipa[90],
      unvoiced: ipa[91],
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
