describe('Account page', () => {
    it('Lets a user log in and log out', () => {
        cy.visit('/account');
        cy.get('#contents a').first().click();

        cy.get('#contents input').first().clear().type("seanjohn@gmail.com");
        cy.get('#contents input').eq(1).clear().type("asdfasdf1234");
        cy.get('button').click();
        cy.contains('h2', "Hi, Sean John!");
    })
})
