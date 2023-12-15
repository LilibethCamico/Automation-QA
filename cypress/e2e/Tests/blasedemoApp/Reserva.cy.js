describe('WS-Create Profile', () => {
	beforeEach('PRC: Enter in Page', () => {
		cy.visit(data.baseUrl);
	});
	
	it('Choose departure and destination city', () => {
		//cy.get('select[name="fromPort"]').select('Boston');
		cy.get('select[name="fromPort"] option').then((options) => {
			const randomIndex = Cypress._.random(0, options.length - 1);
			const randomOption = options[randomIndex];
			cy.get('select[name="fromPort"]').select(randomOption.value);
		});
		//cy.get('select[name="toPort"]').select('Berlin');
		cy.get('select[name="toPort"] option').then((options) => {
			const randomIndex = Cypress._.random(0, options.length - 1);
			const randomOption = options[randomIndex];
			cy.get('select[name="toPort"]').select(randomOption.value);
		});


	});
});
import data from '../../../fixtures/data.json';
import { removeLogs } from '../../../support/helper/RemoveLogs';
removeLogs();