import { useLanguageStore } from 'src/stores/language';
import { IPA } from './ipa';
import { between } from './utils';

const store = useLanguageStore();

export default function generateSounds(options: IPA[], amount: number) {
  for (let i = 0; i < amount; ++i) {
    const rand = between(0, options.length - 1);
    store.addSound(options[rand]); // Add it to the store
    options.splice(rand, 1); // Remove from options
  }
}
