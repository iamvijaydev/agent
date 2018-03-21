import { mockFetch } from './index'

describe('Mock Fetch for GET', () => {
  test('defaults to 10 per page', () => {
    expect.assertions(1);
    
    return mockFetch.fetch('/merchant?')
      .then(response => {
        expect(response.json().data).toHaveLength(10);
      });
  });

  test('2 results when passed per_page=2', () => {
    expect.assertions(1);
    
    return mockFetch.fetch('/merchant?per_page=2')
      .then(response => {
        expect(response.json().data).toHaveLength(2);
      });
  });

  test('no results when route doesn\'t match', () => {
    const noResult = {
      meta: {},
      data: {}
    }
    expect.assertions(1);
    
    return mockFetch.fetch('/merchant')
      .then(response => {
        expect(response.json()).toMatchObject(noResult);
      });
  });
});

describe('Mock Fetch for POST', () => {
  test('saves the data', () => {
    expect.assertions(2);

    return mockFetch.fetch('/merchant/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstname: 'firstname',
          lastname: 'lastname',
          email: 'firstname@lastname.com',
          phone: '(123) 4563-2321',
          hasPremium: false
        })
      })
      .then(response => {
        expect(response.json().data).toHaveProperty('id')
        expect(response.json().data).toHaveProperty('message')
      });
  });
});

describe('Mock Fetch for PUT/PATCH', () => {
  test('reject if record not found', () => {
    expect.assertions(1);

    return mockFetch.fetch('/merchant/123', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: 'firstname',
        lastname: 'lastname',
        email: 'firstname@lastname.com',
        phone: '(123) 4563-2321',
        hasPremium: false
      })
    })
      .then(response => {
        expect(response.json().data).toHaveProperty('message', 'Record not found.');
      });
  });

  test('saves data if record found', () => {
    expect.assertions(2);

    return mockFetch.fetch('/merchant/120000', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstname: 'firstname',
        lastname: 'lastname',
        email: 'firstname@lastname.com',
        phone: '(123) 4563-2321',
        hasPremium: false
      })
    })
      .then(response => {
        expect(response.json().data).toHaveProperty('id', '120000')
        expect(response.json().data).toHaveProperty('message', 'Updated successfully.');
      });
  });
});