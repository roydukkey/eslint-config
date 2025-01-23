import globals from 'globals';
import { config } from 'typescript-eslint';
import localConfig from './src/index.js';

export default config(
	...localConfig({
		project: './**/tsconfig.json',
		tsconfigRootDir: import.meta.dirname,
	}),
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
);
