describe('WS-Create Profile', () => {
	beforeEach('PRC: Enter in Page', () => {
		cy.visit(dataLogin.baseUrl);
	});
	it('Create profile', () => {
		expect(true).to.equal(true);
	});
	it('Other profile', () => {
		expect(true).to.equal(true);
	});
});
import dataLogin from '../../../fixtures/login.json';
import { removeLogs } from '../../../support/helper/RemoveLogs';
removeLogs();