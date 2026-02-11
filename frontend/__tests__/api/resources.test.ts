import { GET, POST } from '@/app/api/resources/route';
import { NextRequest } from 'next/server';

describe('/api/resources', () => {
  describe('GET', () => {
    it('returns resources list', async () => {
      const request = new NextRequest('http://localhost:3000/api/resources?page=1');
      const response = await GET(request);
      const data = await response.json();
      
      expect(response.status).toBe(200);
      expect(data).toHaveProperty('resources');
      expect(data).toHaveProperty('total');
      expect(Array.isArray(data.resources)).toBe(true);
    });
  });

  describe('POST', () => {
    it('creates new resource', async () => {
      const request = new NextRequest('http://localhost:3000/api/resources', {
        method: 'POST',
        body: JSON.stringify({
          title: 'Test Resource',
          description: 'Test Description',
          url: 'ipfs://test',
          category: 'Mathematics'
        })
      });
      
      const response = await POST(request);
      const data = await response.json();
      
      expect(response.status).toBe(200);
      expect(data).toHaveProperty('success', true);
      expect(data).toHaveProperty('resourceId');
    });
  });
});
