import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 0,  name: 'Item 1' },
      { id: 11, name: 'Item 2' },
      { id: 12, name: 'Item 3' },
      { id: 13, name: 'Item 4' },
      { id: 14, name: 'Item 5' },
      { id: 15, name: 'Item 6' },
      { id: 16, name: 'Item 7' },
      { id: 17, name: 'Item 8' },
      { id: 18, name: 'Item 9' },
      { id: 19, name: 'Item 10' },
      { id: 20, name: 'Item 11' }
    ];
    return {items};
  }
}