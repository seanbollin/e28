describe('Jimbo\'s Mouth-Watering Favorites', () => {
    it('Adds a favorite', () => {
        cy.visit('/recipes');

        cy.get('#contents button').eq(0).click();

        cy.visit('/favorites');

        cy.contains('.name', "Roadkill Rigatoni");
    });
})
