const scales = {
  major: [0, 2, 4, 5, 7, 9, 11],
  naturalMinor: [0, 2, 3, 5, 7, 8, 10],
  majorPentatonic: [0, 2, 4, 7, 9],
  minorPentatonic: [0, 3, 5, 7, 10],
} as const;
export type ScaleName = keyof typeof scales;
export function scalePitchClasses(root: number, scale: ScaleName): number[] {
  if (!Number.isInteger(root) || root < 0 || root > 11)
    throw new RangeError('Root pitch class must be [0,11]');
  if (!(scale in scales)) throw new TypeError('Unknown scale');
  return scales[scale].map((i) => (root + i) % 12);
}
