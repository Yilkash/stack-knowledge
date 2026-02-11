import { formatAddress, formatSTX, formatDate, formatFileSize, validateFile } from '@/lib/utils';

describe('Utils', () => {
  describe('formatAddress', () => {
    it('formats address correctly', () => {
      const address = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM';
      expect(formatAddress(address)).toBe('ST1PQH...PGZGM');
    });
  });

  describe('formatSTX', () => {
    it('converts microSTX to STX', () => {
      expect(formatSTX(1000000)).toBe('1.00');
      expect(formatSTX(5500000)).toBe('5.50');
    });
  });

  describe('formatFileSize', () => {
    it('formats bytes correctly', () => {
      expect(formatFileSize(0)).toBe('0 Bytes');
      expect(formatFileSize(1024)).toBe('1 KB');
      expect(formatFileSize(1048576)).toBe('1 MB');
    });
  });

  describe('validateFile', () => {
    it('validates file size', () => {
      const largeFile = new File([''], 'test.pdf', { type: 'application/pdf' });
      Object.defineProperty(largeFile, 'size', { value: 11 * 1024 * 1024 });
      
      const result = validateFile(largeFile);
      expect(result.valid).toBe(false);
      expect(result.error).toContain('10MB');
    });
  });
});
