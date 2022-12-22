<template>
  <q-card class="card justify-center">
    <q-card-section>
      <div class="text-h4">{{ title }}</div>
    </q-card-section>

    <slot :editing="editing"></slot>

    <q-card-section class="row justify-end">
      <q-btn :icon="editSymbol" round flat @click="$emit('editing')">
        <q-tooltip>{{ editTooltip }}</q-tooltip>
      </q-btn>
      <q-btn icon="lock_open" round flat v-if="!editing">
        <q-tooltip>Lock</q-tooltip>
      </q-btn>
      <q-btn icon="autorenew" round flat v-if="!editing" @click="generate">
        <q-tooltip>Generate</q-tooltip>
      </q-btn>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  title: string;
  editing: boolean;
}>();

const emit = defineEmits(['generate', 'editing']);

const editSymbol = computed(() => {
  if (props.editing) return 'save';
  return 'edit';
});

const editTooltip = computed(() => {
  if (props.editing) return 'Save';
  return 'Edit';
});

function generate() {
  emit('generate');
}
</script>
