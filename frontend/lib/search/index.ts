import { Resource } from '@/types';

export class SearchIndex {
  private index: Map<string, Set<number>> = new Map();

  indexResource(resource: Resource) {
    const terms = this.tokenize(resource.title + ' ' + resource.description);
    
    terms.forEach(term => {
      if (!this.index.has(term)) {
        this.index.set(term, new Set());
      }
      this.index.get(term)!.add(resource.id);
    });
  }

  search(query: string): Set<number> {
    const terms = this.tokenize(query);
    const results = new Set<number>();
    
    terms.forEach(term => {
      const ids = this.index.get(term);
      if (ids) {
        ids.forEach(id => results.add(id));
      }
    });
    
    return results;
  }

  private tokenize(text: string): string[] {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(term => term.length > 2);
  }

  clear() {
    this.index.clear();
  }
}

export const searchIndex = new SearchIndex();
