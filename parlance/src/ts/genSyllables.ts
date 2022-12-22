import { between } from './utils';
import { useLanguageStore } from 'src/stores/language';

const store = useLanguageStore();

export function genSyllables() {
  store.syllables = syllableOptions[between(0, syllableOptions.length)];
}

export const syllableOptions = [
  '(C)V(C)',
  'CV(C)',
  'CVC',
  '(C)CV(C)(C)',
  '(C)CVC(C)',
];
