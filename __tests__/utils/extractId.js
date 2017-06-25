import { responseDataIdToId } from '../../utils/extractId';

describe('responseDataIdToId', () => {
    it('should correctly extract id from URLs beginning with http', () => {
        expect(responseDataIdToId('http://goo.gl/s0m31d')).toBe('s0m31d');
    });

    it('should correctly extract id from URLs beginning with https', () => {
        expect(responseDataIdToId('https://goo.gl/an0th3r1d')).toBe('an0th3r1d');
    });
});