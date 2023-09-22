describe('WS-LOGIN', () => {
  beforeEach('PRC: Enter in Page', () => {
    cy.visit(dataLogin.baseUrl);
  });
  it('Iniciar sesión', () => {
    cy.get('[data-test=user-name]').type(dataLogin.user.username);
    cy.get('[data-test=password]').type(dataLogin.user.password);
    cy.get('[data-test=login-button]').click();
  });
});
import dataLogin from '../../../fixtures/login.json';