export const randomNumber = (a: number, b: number): number =>
  Math.floor(Math.random() * (b - a + 1) + a);
