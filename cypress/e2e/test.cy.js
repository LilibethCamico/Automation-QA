describe("prueba", () => {
	beforeEach("PRC: Enter in Page", () => {
		cy.visit("https://www.saucedemo.com/");
	});
	it("Iniciar sesión", () => {
		expect("true").to.equal("true");
	});
});
