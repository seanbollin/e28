# Project 3
+ By: Sean Bollin
+ Production URL: <http://e28p3.sean-bollin.com>

## Outside resources
* Cypress documentation on .first() https://docs.cypress.io/api/commands/first and .get()

## Notes for instructor
* Fixed "properly output error messages" from P2
* Fixed "clear errors after successfully adding a recipe" from P2
* Fixed "Clear inputs after successfully adding a recipe" from P2
* Tried adding test for favorites but it kept failing (even though it works when I do it in the browser and all the cypress steps seem fine)

## How is authentication being used in your application?
* Access denied when user tries to access the Add Recipe page unless they are logged in
* Registration / Login
* Displays welcome message only when user is logged in (top-right corner of navbar)

## What data entities of your application are being managed via Vuex?
* Mouth-Watering Favorites

## E2E Testing screenshot
*Include a screenshot showing the results of running all your E2E tests. This screenshot *must* be present to receive credit for the E2E testing requirement of this project. Below is an example screenshot of what is expected.*

![Jimbos passing E2E tests](https://raw.githubusercontent.com/seanbollin/e28/main/p3/cypress.PNG)
![Jimbos passing with 1 failed E2E tests](https://raw.githubusercontent.com/seanbollin/e28/main/p3/cypress2.png)