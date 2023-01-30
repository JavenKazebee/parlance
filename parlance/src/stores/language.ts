import { defineStore } from 'pinia';
import { IPA, Manner } from 'src/ts/ipa';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    sounds: [] as IPA[],
    spellings: new Map<string, string>(),
    stress: '',
    syllables: '',
    onsets: [] as Manner[],
    codas: [] as Manner[],
  }),

  getters: {
    containsSound() {
      return (sound: IPA): boolean => {
        const index = this.sounds.indexOf(sound);

        // If > -1, the sound was found
        if (index > -1) {
          return true;
        }

        // Otherwise, the sound was not found
        return false;
      };
    },
  },

  actions: {
    addSound(sound: IPA) {
      this.sounds.push(sound);
    },

    removeSound(sound: IPA) {
      const index = this.sounds.indexOf(sound);
      if (index != -1) {
        this.sounds.splice(index, 1);
      }
    },
  },
});
