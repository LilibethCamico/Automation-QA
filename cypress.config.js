import { defineConfig } from 'cypress';

export default defineConfig({
	pageLoadTimeout: 120000,
	e2e: {
		setupNodeEvents(on, config) {

		},
	},
});
