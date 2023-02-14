const isPackageInstalled = require('./util/isPackageInstalled.cjs');

/** @type {import('eslint').Linter.Config} */
const config = {

	parserOptions: {
		tsconfigRootDir: process.cwd(),
		project: './**/tsconfig.eslint.json',
		extraFileExtensions: []
	},

	ignorePatterns: [
		'dist'
	],

	...require('./language/es.cjs')

};

if (isPackageInstalled('eslint-plugin-vue')) {
	config.overrides.push({
		parserOptions: {
			parser: '@typescript-eslint/parser'
		},

		...require('./language/vue.cjs')
	});

	config.parserOptions.extraFileExtensions.push('.vue');
}

module.exports = config;
