describe('database', () => {
  it('should click database tab, click card', () => {
    cy.visit('localhost:3000');
    cy.contains('Database').click();
    cy.url().should('include', 'Database');
  });
});

describe('play game', () => {
  it('start the game', () => {
    cy.visit('localhost:3000');
    cy.contains('Game').click();
    cy.url().should('include', 'Game');
  });

  it('play one round ', () => {
    cy.visit('localhost:3000');
    cy.contains('Game').click();
    cy.contains('Morning').should('not.exist');
    cy.contains('Morgen').click();
    cy.contains('Morning').should('exist');
    cy.get('button').contains('Correct').click();
    cy.get('h2').contains('Correct 1').should('exist');
    cy.contains('Next Card').click();
    // should return to german but doesnt
    cy.contains('Today').should('exist');
  });
});
