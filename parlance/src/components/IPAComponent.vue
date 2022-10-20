<template>
  <div
    v-if="props.editing || store.containsConsonant(props.sound)"
    :class="{ 'active-sound': store.containsConsonant(props.sound) }"
    class="sound"
    @click="toggleSound()"
  >
    {{ props.sound }}
  </div>
</template>

<script lang="ts" setup>
import { useLanguageStore } from 'src/stores/language';

const props = defineProps<{
  sound: string;
  editing: boolean;
}>();

const store = useLanguageStore();

function toggleSound() {
  if (store.containsConsonant(props.sound)) {
    store.removeConsonant(props.sound);
  } else {
    store.addConsonant(props.sound);
  }
}
</script>

<style lang="scss" scoped>
.sound {
  color: $grey-6;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  font-size: 1.2em;
}

.active-sound {
  color: white;
  font-weight: bold;
}
</style>
