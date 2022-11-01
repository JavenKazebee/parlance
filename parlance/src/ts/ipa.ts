export class IPA {
  char: string;
  consonant: boolean;
  voiced: boolean;
  manner: Manner;
  place: Place;

  constructor(
    char: string,
    manner: Manner,
    place: Place,
    consonant: boolean,
    voiced: boolean
  ) {
    this.char = char;
    this.manner = manner;
    this.place = place;
    this.consonant = consonant;
    this.voiced = voiced;
  }
}

export enum Manner {
  // Consonants
  Plosive,
  Nasal,
  Trill,
  TapOrFlap,
  Fricative,
  LateralFricative,
  Approximant,
  LateralApproximant,
  // Vowels
  Close,
  NearClose,
  CloseMid,
  Mid,
  OpenMid,
  NearOpen,
  Open,
}

export enum Place {
  Bilabial,
  Labiodental,
  Dental,
  Alveolar,
  Postalveolar,
  Retroflex,
  Palatal,
  Velar,
  Uvular,
  Pharyngeal,
  Glottal,
  Front,
  Central,
  Back,
}

export const emptyIPA = new IPA(
  '',
  Manner.Approximant,
  Place.Alveolar,
  false,
  false
);

export const ipa: IPA[] = [
  new IPA('p', Manner.Plosive, Place.Bilabial, true, false),
  new IPA('b', Manner.Plosive, Place.Bilabial, true, true),
  new IPA('t', Manner.Plosive, Place.Alveolar, true, false),
  new IPA('d', Manner.Plosive, Place.Alveolar, true, true),
  new IPA('ʈ', Manner.Plosive, Place.Retroflex, true, false),
  new IPA('ɖ', Manner.Plosive, Place.Retroflex, true, false),
  new IPA('c', Manner.Plosive, Place.Palatal, true, false),
  new IPA('ɟ', Manner.Plosive, Place.Palatal, true, true),
  new IPA('k', Manner.Plosive, Place.Velar, true, false),
  new IPA('g', Manner.Plosive, Place.Velar, true, true),
  new IPA('q', Manner.Plosive, Place.Uvular, true, false),
  new IPA('ɢ', Manner.Plosive, Place.Uvular, true, true),
  new IPA('ʔ', Manner.Plosive, Place.Glottal, true, true),

  new IPA('m', Manner.Nasal, Place.Bilabial, true, true),
  new IPA('ɱ', Manner.Nasal, Place.Labiodental, true, true),
  new IPA('n', Manner.Nasal, Place.Alveolar, true, true),
  new IPA('ɳ', Manner.Nasal, Place.Retroflex, true, true),
  new IPA('ɲ', Manner.Nasal, Place.Palatal, true, true),
  new IPA('ŋ', Manner.Nasal, Place.Velar, true, true),
  new IPA('ɴ', Manner.Nasal, Place.Uvular, true, true),

  new IPA('ʙ', Manner.Trill, Place.Bilabial, true, true),
  new IPA('r', Manner.Trill, Place.Alveolar, true, true),
  new IPA('ʀ', Manner.Trill, Place.Uvular, true, true),

  new IPA('ⱱ', Manner.TapOrFlap, Place.Labiodental, true, true),
  new IPA('ɾ', Manner.TapOrFlap, Place.Alveolar, true, true),
  new IPA('ɽ', Manner.TapOrFlap, Place.Retroflex, true, true),

  new IPA('ɸ', Manner.Fricative, Place.Bilabial, true, false),
  new IPA('β', Manner.Fricative, Place.Bilabial, true, true),
  new IPA('f', Manner.Fricative, Place.Labiodental, true, false),
  new IPA('v', Manner.Fricative, Place.Labiodental, true, true),
  new IPA('θ', Manner.Fricative, Place.Dental, true, false),
  new IPA('ð', Manner.Fricative, Place.Dental, true, true),
  new IPA('s', Manner.Fricative, Place.Alveolar, true, false),
  new IPA('z', Manner.Fricative, Place.Alveolar, true, true),
  new IPA('ʃ', Manner.Fricative, Place.Postalveolar, true, false),
  new IPA('ʒ', Manner.Fricative, Place.Postalveolar, true, true),
  new IPA('ʂ', Manner.Fricative, Place.Retroflex, true, false),
  new IPA('ʐ', Manner.Fricative, Place.Retroflex, true, true),
  new IPA('ç', Manner.Fricative, Place.Palatal, true, false),
  new IPA('ʝ', Manner.Fricative, Place.Palatal, true, true),
  new IPA('x', Manner.Fricative, Place.Velar, true, false),
  new IPA('ɣ', Manner.Fricative, Place.Velar, true, true),
  new IPA('χ', Manner.Fricative, Place.Uvular, true, false),
  new IPA('ʁ', Manner.Fricative, Place.Uvular, true, true),
  new IPA('ħ', Manner.Fricative, Place.Pharyngeal, true, false),
  new IPA('ʕ', Manner.Fricative, Place.Pharyngeal, true, true),
  new IPA('h', Manner.Fricative, Place.Glottal, true, false),
  new IPA('ɦ', Manner.Fricative, Place.Glottal, true, true),

  new IPA('ɬ', Manner.LateralFricative, Place.Alveolar, true, false),
  new IPA('ɮ', Manner.LateralFricative, Place.Alveolar, true, true),

  new IPA('ʋ', Manner.Approximant, Place.Labiodental, true, true),
  new IPA('ɹ', Manner.Approximant, Place.Alveolar, true, true),
  new IPA('ɻ', Manner.Approximant, Place.Retroflex, true, true),
  new IPA('j', Manner.Approximant, Place.Palatal, true, true),
  new IPA('ɰ', Manner.Approximant, Place.Velar, true, true),

  new IPA('l', Manner.LateralApproximant, Place.Alveolar, true, true),
  new IPA('ɭ', Manner.LateralApproximant, Place.Retroflex, true, true),
  new IPA('ʎ', Manner.LateralApproximant, Place.Palatal, true, true),
  new IPA('ʟ', Manner.LateralApproximant, Place.Velar, true, true),

  // Vowels
  new IPA('i', Manner.Close, Place.Front, false, false),
  new IPA('y', Manner.Close, Place.Front, false, true),
  new IPA('ɨ', Manner.Close, Place.Central, false, false),
  new IPA('ʉ', Manner.Close, Place.Central, false, true),
  new IPA('ɯ', Manner.Close, Place.Back, false, false),
  new IPA('u', Manner.Close, Place.Back, false, true),

  new IPA('I', Manner.NearClose, Place.Front, false, false),
  new IPA('Y', Manner.NearClose, Place.Front, false, true),
  new IPA('Ʊ', Manner.NearClose, Place.Back, false, false),

  new IPA('e', Manner.CloseMid, Place.Front, false, false),
  new IPA('ø', Manner.CloseMid, Place.Front, false, true),
  new IPA('ɘ', Manner.CloseMid, Place.Central, false, false),
  new IPA('ɵ', Manner.CloseMid, Place.Central, false, true),
  new IPA('ɤ', Manner.CloseMid, Place.Back, false, false),
  new IPA('o', Manner.CloseMid, Place.Back, false, true),

  new IPA('e̞', Manner.Mid, Place.Front, false, false),
  new IPA('ø̞', Manner.Mid, Place.Front, false, true),
  new IPA('ə', Manner.Mid, Place.Central, false, false),
  new IPA('ɤ̞', Manner.Mid, Place.Back, false, false),
  new IPA('o̞', Manner.Mid, Place.Back, false, true),

  new IPA('ɛ', Manner.OpenMid, Place.Front, false, false),
  new IPA('œ', Manner.OpenMid, Place.Front, false, true),
  new IPA('ɜ', Manner.OpenMid, Place.Central, false, false),
  new IPA('ɞ', Manner.OpenMid, Place.Central, false, true),
  new IPA('ʌ', Manner.OpenMid, Place.Back, false, false),
  new IPA('ɔ', Manner.OpenMid, Place.Back, false, true),

  new IPA('æ', Manner.NearOpen, Place.Front, false, false),
  new IPA('ɐ', Manner.NearOpen, Place.Central, false, false),

  new IPA('a', Manner.Open, Place.Front, false, false),
  new IPA('ɶ', Manner.Open, Place.Front, false, true),
  new IPA('ä', Manner.Open, Place.Central, false, false),
  new IPA('ɑ', Manner.Open, Place.Back, false, false),
  new IPA('ɒ', Manner.Open, Place.Back, false, true),
];
