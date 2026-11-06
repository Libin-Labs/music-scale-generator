import * as api from '@lp-labs/music-scale-generator';
import { scalePitchClasses } from '@lp-labs/music-scale-generator';
const cMajor = scalePitchClasses(0, 'major');
if (cMajor.join(',') !== '0,2,4,5,7,9,11') throw new Error('Scale mismatch');
// @ts-expect-error invalid argument must be rejected by declarations
api.scalePitchClasses('12', 'major');
