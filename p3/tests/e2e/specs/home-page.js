describe('Jimbo\'s Homepage', () => {
    it('Shows the welcome title on the homepage', () => {
        cy.visit('/');
        cy.contains('h1', 'Jimbo\'s Southern-Style Recipe Book');
    });

    it('Shows the welcome text on the homepage', () => {
        cy.visit('/');
        cy.contains('p', 'Welcome to Jimbo\'s Southern-Style Recipe Book. Here you\'ll find our list of curated recipes to keep you feeling at home in the deep south. Enjoy your stay!');
    });
})
