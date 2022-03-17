# Sprite Demo Automation
Test execution results: [![Allure Report](https://img.shields.io/badge/Allure%20Report-deployed-yellowgreen)](https://melmoth-der-wanderer.github.io/sprite-robo-automation/)

---
* UI tests project: http://www.uitestingplayground.com/
* API tests project: https://petstore.swagger.io/

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

Have been used Github Actions. Job is running automatically on the `push` action. See details `.github/workflows/playwright.yml`. This job will run full regression test suite in 3 browsers (UI tests) and API tests. In real life there will be different options to manipulate the numbers of tests, browsers and layouts. Also it can be useful to provide Smoke, Acceptance and Regression tasks for different purposes.

---

### Calliope:

Improvement point:
- It can be more user-friendly to list all the requirements related to the password field at sign up form.

New feature:
- Add ability to upload Allure Report results (https://docs.qameta.io/allure/). Also integration with CI systems can be useful.

Link to the report at Calliope: 
https://app.calliope.pro/reports/122430/public/4e49f517-27ef-42a6-a802-8b2447d99e73

#### What you used to select the scenarios, what was your approach?

- API tests: There are 3 similar groups of endpoints: pet, store, user. For this task they are equivalent to each other. So my approach was to show proficiency with the most common HTTP methods (POST, GET, PUT, DELETE).
- UI tests: Approach was to find a user story within all the functionalities on the website.

#### Why are they the most important?

- API tests: Providing relevant information to your consumers is the key part in the supply chain. Also, experience of using the most common HTTP methods will surely help to increase coverage further.  
- UI tests: Login usually is one of the most critical features in any product, because it opens access to the next features.

#### Next steps

- Structure and selected test scenarios should be discussed via pull-request procedure with a team;
- Preferably, existent tests should be divided into different projects, one for API and one for UI. In one project it is just more sumplier to review;
- There is no API provided in the UI-app. In reality API opens a lot of possibilities to make tests better (for example: authentication via API, etc);
- Mobile emulation is also possible, but wasn't considered in this project;
- Requirements and analytics gathering;
- There is a need to audit current test-coverage at different layers of these products and increase it, if it should be.
