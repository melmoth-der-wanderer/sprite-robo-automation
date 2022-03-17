// @ts-ignore
const { test, expect } = require('@playwright/test');
const allure = require('allure-playwright').allure;

const { ApiTestData } = require('../data/apiTestData');

test.describe('Pet store API tests', () => {
  let snoopy;
  let apiTestData;

  test.beforeAll(async ({ request }) => {
    apiTestData = new ApiTestData(request);
    snoopy = await apiTestData.getDog();
  });
  test.beforeEach(async () => {
    allure.parentSuite('API tests');
  });

  test('Find Pet by id', async ({ request }) => {
    const response = await request.get(`v2/pet/${snoopy.id}`);
    expect(response.ok()).toBeTruthy();
    expect(await response.json()).toMatchObject(snoopy);
  });

  test('Update existing pet', async ({ request }) => {
    const newStatus = 'sold';
    const response = await request.put('v2/pet', { data: apiTestData.getDogData({ id: snoopy.id, status: newStatus }) });
    expect(response.ok()).toBeTruthy();
    expect(await response.json()).toMatchObject({ id: snoopy.id, status: newStatus });
  });

  test('Delete Pet by id', async ({ request }) => {
    const response = await request.delete(`v2/pet/${snoopy.id}`);
    expect(response.ok()).toBeTruthy();
    expect(await response.json()).toMatchObject({ message: `${snoopy.id}` });
  });
});
