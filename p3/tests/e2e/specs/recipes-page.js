// https://docs.cypress.io/api/introduction/api.html

describe('Jimbo\'s Recipes Page', () => {
    it('Shows all the recipes', () => {
        cy.visit('/recipes');
        cy.contains('h1', 'Jimbo\'s Recipes');

        cy.get('.show-recipe').its('length').should('be.gte', 2);

        cy.contains('.name', "Roadkill Rigatoni");
        cy.contains('.name', "Lizard Stew");

        // Confirm we can click on a product and get to its individual page
        cy.get("#recipes a").first().click();

        // Confirm the test product page loads
        cy.contains('.name', "Roadkill Rigatoni");
        cy.url().should('include', 1);
    });
})
