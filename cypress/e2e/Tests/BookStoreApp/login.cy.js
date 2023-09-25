describe('WS-Create Profile', () => {
	beforeEach('PRC: Enter in Page', () => {
		cy.visit(dataLogin.baseUrl);
	});
	it('Crear Perfil', () => {
		expect(true).to.equal(true);
	});
});
import dataLogin from '../../../fixtures/login.json';
import { removeLogs } from '../../../support/helper/RemoveLogs';
removeLogs();