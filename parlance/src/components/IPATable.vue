<template>
  <q-markup-table separator="cell" dense>
    <tr>
      <td></td>
      <th v-for="header in columnHeaders" :key="header">{{ header }}</th>
    </tr>
    <tr v-for="(row, i) in rowHeaders" :key="i">
      <th>{{ row }}</th>
      <IPACell v-for="(cell, j) in data[i]" :key="j" :colspan="cell.colspan">
        <IPAComponent :sound="cell.voiced" :editing="editing" />
        <IPAComponent :sound="cell.unvoiced" :editing="editing" />
      </IPACell>
    </tr>
  </q-markup-table>
</template>

<script lang="ts" setup>
import { IPA } from 'src/ts/ipa';
import IPACell from './IPACell.vue';
import IPAComponent from './IPAComponent.vue';

defineProps<{
  columnHeaders: string[];
  rowHeaders: string[];
  data: CellData[][];
  editing: boolean;
}>();

type CellData = {
  voiced: IPA;
  unvoiced: IPA;
  colspan: number;
};
</script>
