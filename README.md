# @lp-labs/music-scale-generator

Pitch-class generation for major, natural minor, major pentatonic and minor pentatonic scales.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/music-scale-generator
```

## Working example

```js
import { scalePitchClasses } from '@lp-labs/music-scale-generator';
const cMajor = scalePitchClasses(0, 'major');
if (cMajor.join(',') !== '0,2,4,5,7,9,11') throw new Error('Scale mismatch');
```

CommonJS: `const api = require('@lp-labs/music-scale-generator')`.

## Behavior, customization and limits

Returns twelve-tone equal-tempered pitch classes in ascending order, wrapping within one octave. It does not spell enharmonic note names, represent modes beyond the listed scales, or generate chords.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
declare const scales: {
  readonly major: readonly [0, 2, 4, 5, 7, 9, 11];
  readonly naturalMinor: readonly [0, 2, 3, 5, 7, 8, 10];
  readonly majorPentatonic: readonly [0, 2, 4, 7, 9];
  readonly minorPentatonic: readonly [0, 3, 5, 7, 10];
};
export type ScaleName = keyof typeof scales;
export declare function scalePitchClasses(root: number, scale: ScaleName): number[];
export {};
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
