import { mockFetch } from './index'

describe('Mock Fetch for GET', () => {
  test('defaults to 10 per page', () => {
    expect.assertions(1);
    
    return mockFetch.fetch('/merchant?')
      .then(response => {
        expect(response.json()).toHaveLength(10);
      });
  });

  test('2 results when passed per_page=2', () => {
    expect.assertions(1);
    
    return mockFetch.fetch('/merchant?per_page=2')
      .then(response => {
        expect(response.json()).toHaveLength(2);
      });
  });

  test('no results when route does\'nt match', () => {
    expect.assertions(1);
    
    return mockFetch.fetch('/merchant')
      .then(response => {
        expect(response.json()).toMatchObject({});
      });
  });
});