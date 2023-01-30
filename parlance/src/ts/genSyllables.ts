import { between } from './utils';
import { useLanguageStore } from 'src/stores/language';

const store = useLanguageStore();

export function genSyllables() {
  store.syllables = syllableOptions[between(0, syllableOptions.length)];
}

// C = Consonant
// V = Vowel
// D = Optional Constant
// W = Optional Vowel
export const syllableOptions = ['CV', 'CVD', 'DVC', 'DCVCD', 'DCVWCD'];
