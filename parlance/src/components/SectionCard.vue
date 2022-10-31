<template>
  <q-card class="card justify-center">
    <q-card-section>
      <div class="text-h4">{{ title }}</div>
    </q-card-section>

    <slot :editing="editing"></slot>

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
import { ref, computed } from 'vue';

defineProps<{
  title: string;
}>();

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
