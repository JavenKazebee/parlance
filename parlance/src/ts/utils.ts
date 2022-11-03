export function weighted<T>(weights: number[], values: T[]): T {
  let total = 0;
  for (let i = 0; i < weights.length; ++i) {
    total += weights[i];
  }

  const rand = Math.floor(Math.random() * total);
  let count = 0;
  for (let i = 0; i < weights.length; ++i) {
    count += weights[i];

    if (rand < count) {
      return values[i];
    }
  }

  return values[0];
}

export function between(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
