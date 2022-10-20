import { IPACharacters } from './ipa';
import { weighted } from './utils';

export default function genConsonants(): string[] {
  //const consonants: string[] = []
  //let ipa = IPACharacters;

  // How many plosive pairs
  const plosives = weighted([15, 5, 20, 25, 10, 10, 10, 5] , [0, 1, 2, 3, 4, 5, 6, 7])


  const plosivesBoth = weighted([80, 20], [true, false])

  console.log(plosives);
  console.log(plosivesBoth);

  return [''];
}
