import { formatAddress, formatDate } from '../lib/utils';

describe('Utility Functions', () => {
    test('formatAddress truncates correctly', () => {
        expect(formatAddress('SP3...XY')).toBe('SP3...XY');
    });
});
