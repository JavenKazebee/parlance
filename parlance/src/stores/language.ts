import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    consonants: [] as string[],
  }),

  getters: {
    containsConsonant() {
      return (sound: string): boolean => {
        const index = this.consonants.indexOf(sound);
        if (index > -1) {
          return true;
        }

        return false;
      };
    },
  },

  actions: {
    addConsonant(sound: string) {
      this.consonants.push(sound);
    },

    removeConsonant(sound: string) {
      const index = this.consonants.indexOf(sound);
      if (index != -1) {
        this.consonants.splice(index, 1);
      }
    },
  },
});
