<template>
  <q-card class="card justify-center">
    <q-card-section>
      <div class="text-h4">Consonants</div>
    </q-card-section>
    <q-markup-table dense separator="cell">
      <thead>
        <tr>
          <th></th>
          <th>Bilabial</th>
          <th>Labiodental</th>
          <th>Dental</th>
          <th>Alveolar</th>
          <th>Postalveolar</th>
          <th>Retroflex</th>
          <th>Palatal</th>
          <th>Velar</th>
          <th>Uvular</th>
          <th>Pharyngeal</th>
          <th>Glottal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-bold text-right">Plosive</td>
          <IPACell>
            <IPAComponent sound="p" :editing="editing" />
            <IPAComponent sound="b" :editing="editing" />
          </IPACell>
          <td></td>
          <IPACell :colspan="3">
            <IPAComponent sound="t" :editing="editing" />
            <IPAComponent sound="d" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="ʈ" :editing="editing" />
            <IPAComponent sound="ɖ" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="c" :editing="editing" />
            <IPAComponent sound="ɟ" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="k" :editing="editing" />
            <IPAComponent sound="g" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="q" :editing="editing" />
            <IPAComponent sound="ɢ" :editing="editing" />
          </IPACell>
          <td></td>
          <IPACell>
            <IPAComponent sound="ʔ" :editing="editing" />
          </IPACell>
        </tr>

        <tr>
          <td class="text-bold text-right">Nasal</td>
          <IPACell>
            <IPAComponent sound="m" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="ɱ" :editing="editing" />
          </IPACell>
          <IPACell :colspan="3">
            <IPAComponent sound="n" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="ɳ" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="ɲ" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="ŋ" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="ɴ" :editing="editing" />
          </IPACell>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td class="text-bold text-right">Trill</td>
          <IPACell>
            <IPAComponent sound="ʙ" :editing="editing" />
          </IPACell>
          <td></td>
          <IPACell :colspan="3">
            <IPAComponent sound="r" :editing="editing" />
          </IPACell>
          <td></td>
          <td></td>
          <td></td>
          <IPACell>
            <IPAComponent sound="ʀ" :editing="editing" />
          </IPACell>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td class="text-bold text-right">Flap/Tap</td>
          <td></td>
          <IPACell>
            <IPAComponent sound="ⱱ" :editing="editing" />
          </IPACell>
          <IPACell :colspan="3">
            <IPAComponent sound="ɾ" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="ɽ" :editing="editing" />
          </IPACell>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td class="text-bold text-right">Fricative</td>
          <IPACell>
            <IPAComponent sound="ɸ" :editing="editing" />
            <IPAComponent sound="β" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="f" :editing="editing" />
            <IPAComponent sound="v" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="θ" :editing="editing" />
            <IPAComponent sound="ð" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="s" :editing="editing" />
            <IPAComponent sound="z" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="ʃ" :editing="editing" />
            <IPAComponent sound="ʒ" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="ʂ" :editing="editing" />
            <IPAComponent sound="ʐ" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="ç" :editing="editing" />
            <IPAComponent sound="ʝ" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="x" :editing="editing" />
            <IPAComponent sound="ɣ" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="χ" :editing="editing" />
            <IPAComponent sound="ʁ" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="ħ" :editing="editing" />
            <IPAComponent sound="ʕ" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="h" :editing="editing" />
            <IPAComponent sound="ɦ" :editing="editing" />
          </IPACell>
        </tr>

        <tr>
          <td class="text-bold text-right">Lateral Fricative</td>
          <td></td>
          <td></td>
          <IPACell :colspan="3">
            <IPAComponent sound="ɬ" :editing="editing" />
            <IPAComponent sound="ɮ" :editing="editing" />
          </IPACell>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td class="text-bold text-right">Approximant</td>
          <td></td>
          <IPACell>
            <IPAComponent sound="ʋ" :editing="editing" />
          </IPACell>
          <IPACell :colspan="3">
            <IPAComponent sound="ɹ" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="ɻ" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="j" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="ɰ" :editing="editing" />
          </IPACell>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td class="text-bold text-right">Lateral Approximant</td>
          <td></td>
          <td></td>
          <IPACell :colspan="3">
            <IPAComponent sound="l" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="ɭ" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="ʎ" :editing="editing" />
          </IPACell>
          <IPACell>
            <IPAComponent sound="ʟ" :editing="editing" />
          </IPACell>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </q-markup-table>
    <q-card-section class="row justify-end">
      <q-btn :icon="editSymbol" round flat @click="toggleEditing()">
        <q-tooltip>{{ editTooltip }}</q-tooltip>
      </q-btn>
      <q-btn icon="lock_open" round flat v-if="!editing">
        <q-tooltip>Lock</q-tooltip>
      </q-btn>
      <q-btn icon="autorenew" round flat v-if="!editing">
        <q-tooltip>Generate</q-tooltip>
      </q-btn>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import IPAComponent from 'src/components/IPAComponent.vue';
import IPACell from 'src/components/IPACell.vue';
import { ref, computed } from 'vue';

let editing = ref(false);

function toggleEditing() {
  editing.value = !editing.value;
}

const editSymbol = computed(() => {
  if (editing.value) return 'save';
  return 'edit';
});

const editTooltip = computed(() => {
  if (editing.value) return 'Save';
  return 'Edit';
});
</script>
