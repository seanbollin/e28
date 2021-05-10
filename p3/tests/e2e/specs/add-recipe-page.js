describe('Jimbo\'s Add a Recipe', () => {
    it('Adds a recipe', () => {
        cy.visit('/recipe/new');
        cy.contains('h1', 'Access Denied');

        cy.visit('/account');
        cy.get('#contents a').first().click();

        cy.get('#contents input').eq(0).clear().type("seanjohn@gmail.com");
        cy.get('#contents input').eq(1).clear().type("asdfasdf1234");
        cy.get('#contents button').eq(0).click();
        cy.contains('h2', "Hi, Sean John!");

        cy.visit('/recipe/new');

        cy.get('input').first().clear().type("Test recipe name");
        cy.get('textarea').eq(0).clear().type("Test recipe description");
        cy.get('input').eq(1).clear().type("test,test,test");

        cy.get('button').first().click();

        cy.visit('/recipes');

        cy.contains('.name', "Roadkill Rigatoni");
    });
})
