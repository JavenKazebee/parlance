import { useLanguageStore } from 'src/stores/language';
import { Manner } from './ipa';
import { between } from './utils';

const store = useLanguageStore();

export function genRules() {
  const onsets: Manner[] = [];
  const codas: Manner[] = [];

  // Calculate count
  const manners: Manner[] = [];
  for (const sound of store.sounds.filter((x) => x.consonant)) {
    if (!manners.includes(sound.manner)) {
      manners.push(sound.manner);
    }
  }

  console.log(manners);

  for (const manner of manners) {
    switch (manner) {
      case Manner.Plosive:
        if (between(1, 100) <= 95) onsets.push(Manner.Plosive);
        break;
      case Manner.Fricative:
        if (between(1, 100) <= 95) onsets.push(Manner.Fricative);
        break;
      case Manner.Nasal:
        if (between(1, 100) <= 80) onsets.push(Manner.Nasal);
        break;
      case Manner.Trill:
        if (between(1, 100) <= 80) onsets.push(Manner.Trill);
        break;
      case Manner.TapOrFlap:
        if (between(1, 100) <= 80) onsets.push(Manner.TapOrFlap);
        break;
      case Manner.LateralFricative:
        if (between(1, 100) <= 60) onsets.push(Manner.LateralFricative);
        break;
      case Manner.Approximant:
        if (between(1, 100) <= 60) onsets.push(Manner.Approximant);
        break;
      case Manner.LateralApproximant:
        if (between(1, 100) <= 60) onsets.push(Manner.LateralApproximant);
        break;
    }
  }

  for (const manner of manners) {
    if (!onsets.includes(manner)) {
      codas.push(manner);
    } else {
      switch (manner) {
        case Manner.Plosive:
          if (between(1, 100) <= 95) codas.push(Manner.Plosive);
          break;
        case Manner.Fricative:
          if (between(1, 100) <= 95) codas.push(Manner.Fricative);
          break;
        case Manner.Nasal:
          if (between(1, 100) <= 80) codas.push(Manner.Nasal);
          break;
        case Manner.Trill:
          if (between(1, 100) <= 80) codas.push(Manner.Trill);
          break;
        case Manner.TapOrFlap:
          if (between(1, 100) <= 80) codas.push(Manner.TapOrFlap);
          break;
        case Manner.LateralFricative:
          if (between(1, 100) <= 60) codas.push(Manner.LateralFricative);
          break;
        case Manner.Approximant:
          if (between(1, 100) <= 60) codas.push(Manner.Approximant);
          break;
        case Manner.LateralApproximant:
          if (between(1, 100) <= 60) codas.push(Manner.LateralApproximant);
          break;
      }
    }
  }

  console.log(onsets);
  console.log(codas);
  store.onsets = onsets;
  store.codas = codas;
}
