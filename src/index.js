import { config } from 'typescript-eslint';
import esLanguage from './language/es.js';
import vueLanguage from './language/vue.js';

/**
 * The base configuration for JS, JSX, TypeScript, and Vue.
 *
 * @param {Object} options
 * @param {import('@typescript-eslint/parser').ParserOptions['tsconfigRootDir']} options.tsconfigRootDir - probably best to use `import.meta.dirname`
 * @param {import('@typescript-eslint/parser').ParserOptions['project']} [options.project] - defaults to `'./${'**'}/tsconfig.eslint.json'`
 *
 * @returns {import('typescript-eslint').ConfigArray}
 */
export default (options) => config(
	esLanguage(options),
	vueLanguage,
	{
		ignores: ['dist'],
	},
);
