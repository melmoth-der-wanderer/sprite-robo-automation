const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

exports.ApiTestData = class ApiTestData {
  /**
   * @param {import('@playwright/test').APIRequest} request
   */
  constructor(request) {
    this.request = request;
  }

  async getDog(options) {
    const dog = this.getDogData(options);
    const response = await this.request.post('v2/pet', { data: dog });
    expect(response.ok()).toBeTruthy();
    expect(await response.json()).toMatchObject(dog);
    return response.json();
  }

  getDogData(options = {}) {
    const {
      id = faker.datatype.number(),
      name = faker.animal.dog(),
      photoUrls = [
        faker.image.animals(),
      ],
      status = 'available',
    } = options;
    return {
      id,
      category: {
        id: 1,
        name: 'Dogs',
      },
      name,
      photoUrls,
      tags: [
        {
          id: 1,
          name: 'dog',
        },
      ],
      status,
    };
  }
};
