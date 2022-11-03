import { useLanguageStore } from 'src/stores/language';
import { ipa, IPA, Manner, Place } from './ipa';
import { between, weighted } from './utils';

const store = useLanguageStore();

export default function genConsonants(): IPA[] {
  console.log(store.sounds);
  // Clear exising consonants
  const newStore: IPA[] = [];
  for (let i = 0; i < store.sounds.length; ++i) {
    if (!store.sounds[i].consonant) {
      newStore.push(store.sounds[i]);
    }
  }

  store.sounds = newStore;

  // Obstruents (Plosives, Fricatives, and Lateral Fricatives)
  const bilabials = weighted<number>([50, 5, 5, 15, 25], [0, 1, 2, 3, 4]);
  const labiodentals = weighted<number>([50, 10, 40], [0, 1, 2]);
  const dental = weighted<number>([60, 10, 20], [0, 1, 2]);
  const alveolars = weighted<number>(
    [25, 10, 10, 10, 15, 15, 15],
    [0, 1, 2, 3, 4, 5, 6]
  );
  const postAlveolar = weighted<number>([60, 10, 20], [0, 1, 2]);
  const retroflex = weighted<number>([60, 5, 15, 15, 5], [0, 1, 2, 3, 4]);
  const palatal = weighted<number>([60, 5, 15, 15, 5], [0, 1, 2, 3, 4]);
  const velar = weighted<number>([60, 5, 15, 15, 5], [0, 1, 2, 3, 4]);
  const uvular = weighted<number>([60, 5, 15, 15, 5], [0, 1, 2, 3, 4]);
  const pharyngeal = weighted<number>([75, 10, 15], [0, 1, 2]);
  const glottal = weighted<number>([75, 5, 10, 10], [0, 1, 2, 3]);

  generateObstruents(Place.Bilabial, bilabials);
  generateObstruents(Place.Labiodental, labiodentals);
  generateObstruents(Place.Dental, dental);
  generateObstruents(Place.Alveolar, alveolars);
  generateObstruents(Place.Postalveolar, postAlveolar);
  generateObstruents(Place.Retroflex, retroflex);
  generateObstruents(Place.Palatal, palatal);
  generateObstruents(Place.Velar, velar);
  generateObstruents(Place.Uvular, uvular);
  generateObstruents(Place.Pharyngeal, pharyngeal);
  generateObstruents(Place.Glottal, glottal);

  // Nasals
  const nasals = weighted<number>(
    [30, 20, 20, 15, 5, 5, 3, 2],
    [0, 1, 2, 3, 4, 5, 6, 7]
  );

  const nasalOptions = ipa.filter((sound) => sound.manner == Manner.Nasal);
  generateSounds(nasalOptions, nasals);

  // Trills and Taps
  const trillsAndTaps = weighted<number>(
    [30, 30, 20, 10, 5, 3, 2],
    [0, 1, 2, 3, 4, 5, 6]
  );

  const trillsOptions = ipa.filter(
    (sound) => sound.manner == Manner.Trill || sound.manner == Manner.TapOrFlap
  );
  generateSounds(trillsOptions, trillsAndTaps);

  // Approximants
  const approximants = weighted<number>(
    [25, 30, 30, 5, 5, 1, 1, 1, 1, 1],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  );
  const approximantOptions = ipa.filter(
    (sound) =>
      sound.manner == Manner.Approximant ||
      sound.manner == Manner.LateralApproximant
  );
  generateSounds(approximantOptions, approximants);

  return [];
}

function generateObstruents(place: Place, amount: number) {
  const options = ipa.filter(
    (sound) =>
      sound.place == place &&
      (sound.manner == Manner.Fricative ||
        sound.manner == Manner.Plosive ||
        sound.manner == Manner.LateralFricative) &&
      !store.containsSound(sound)
  );

  generateSounds(options, amount);
}

function generateSounds(options: IPA[], amount: number) {
  for (let i = 0; i < amount; ++i) {
    const rand = between(0, options.length - 1);
    store.addSound(options[rand]); // Add it to the store
    options.splice(rand, 1); // Remove from options
  }
}
