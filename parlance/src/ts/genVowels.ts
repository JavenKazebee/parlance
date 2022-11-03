import { useLanguageStore } from 'src/stores/language';
import generateSounds from './genSounds';
import { IPA, ipa } from './ipa';
import { weighted } from './utils';

const store = useLanguageStore();

export default function genVowels() {
  // Clear existing vowels
  const newStore: IPA[] = [];
  for (const sound of store.sounds) {
    if (sound.consonant) {
      newStore.push(sound);
    }
  }

  // Clear store
  store.$reset();

  // Add consonants back in
  for (const sound of newStore) {
    store.addSound(sound);
  }

  const numOfVowels = weighted<number>(
    [1, 25, 250, 250, 250, 100, 50, 50, 5, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1],
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  );

  const options = ipa.filter((sound) => sound.consonant == false);

  generateSounds(options, numOfVowels);
}
