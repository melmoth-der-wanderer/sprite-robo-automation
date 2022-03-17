# Sprite Demo Automation
Test execution results: [![Allure Report](https://img.shields.io/badge/Allure%20Report-deployed-yellowgreen)](https://melmoth-der-wanderer.github.io/sprite-robo-automation/)

---
UI tests project: http://www.uitestingplayground.com/
API tests project: https://petstore.swagger.io/

---

### User Flows
* UI
    * Login
        * Valid login
        * Empty fields validation
        * Wrong credentials validation
        * Logout
* API
    * Pet store
        * Create a Pet
        * Find a Pet by id
        * Update existing pet
        * Delete a Pet by id

---

### Technology
Playwright, Allure Report, Eslint, Faker

---

## Local Set Up

Clone the repository to your local computer
```
git clone https://github.com/melmoth-der-wanderer/sprite-robo-automation.git
```

Use the package manager `npm` to install dependencies:
```
npm install
```

Install the browsers
```
npx playwright install
```

Run the UI automation tests in parallel (Chrome, Firefox, Safari):
```
npm run ui:test
```

Run the UI automation tests in headful mode using 1 worker:
```
npm run debug
```

Run the API automation tests in parallel:
```
npm run api:test
```

Get the report:
```
npm run report
```

---

### CI
Have been used Github Actions. Job is running automatically on the `push` action. See details `.github/workflows/playwright.yml`. This job will run full regression test suite in 3 browsers (both UI and API tests). In real life there will be different options to manipulate the numbers of tests, browsers, layouts to provide: Smoke, Acceptance and Regression tasks for different purposes.

---

#### Notes:

- Structure and selected test scenarios must be discussed via pull-request procedure with a team;
- Preferably, existent tests should be divided into different projects, one for API and one for UI. In one project it is just more sumplier to review;
- There is no API provided in that demo-apps. In reality API opens a lot of possibilities to make tests better (for example: authentication via API, etc);
- Mobile emulation is also possible, but wasn't considered in this project.