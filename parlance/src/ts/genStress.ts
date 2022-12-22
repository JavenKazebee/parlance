import { useLanguageStore } from 'src/stores/language';
import { between } from './utils';

export const stressOptions = ['Ultimate', 'Penultimate', 'Initial', 'Lexical'];

const store = useLanguageStore();

export function genStress() {
  store.stress = stressOptions[between(0, stressOptions.length)];
}
