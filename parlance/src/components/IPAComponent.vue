<template>
  <div
    v-if="props.editing || store.containsSound(props.sound)"
    :class="{ 'active-sound': store.containsSound(props.sound) }"
    class="sound"
    @click="toggleSound()"
  >
    {{ props.sound.char }}
  </div>
</template>

<script lang="ts" setup>
import { useLanguageStore } from 'src/stores/language';
import { IPA } from 'src/ts/ipa';

const props = defineProps<{
  sound: IPA;
  editing: boolean;
}>();

const store = useLanguageStore();

function toggleSound() {
  if (store.containsSound(props.sound)) {
    store.removeSound(props.sound);
  } else {
    store.addSound(props.sound);
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
