const rule = require('../util/rule.cjs');

/** @type {import('eslint').Linter.ConfigOverride} */
module.exports = {

	files: '*.vue',
	extends: 'plugin:vue/vue3-recommended',

	rules: {
		'vue/attributes-order': ['error', {
			order: [
				'DEFINITION',
				'GLOBAL',
				'CONDITIONALS',
				'LIST_RENDERING',
				'UNIQUE',
				'SLOT',
				'TWO_WAY_BINDING',
				'OTHER_DIRECTIVES',
				'OTHER_ATTR',
				'EVENTS',
				'CONTENT',
				'RENDER_MODIFIERS'
			]
		}],
		'vue/component-definition-name-casing': 'error',
		'vue/component-tags-order': ['error', {
			order: ['template', 'script[setup]', 'style', 'script:not([setup])']
		}],
		'vue/dot-notation': 'error',
		'vue/html-end-tags': 'error',
		'vue/html-self-closing': ['error', {
			html: {
				normal: 'never',
				void: 'always'
			}
		}],
		'vue/max-attributes-per-line': ['error', {
			singleline: Number.POSITIVE_INFINITY,
			multiline: 1
		}],
		'vue/no-constant-condition': 'error',
		'vue/no-empty-pattern': 'error',
		'vue/no-irregular-whitespace': 'error',
		'vue/no-loss-of-precision': 'error',
		'vue/no-sparse-arrays': 'error',
		'vue/no-static-inline-styles': 'error',
		'vue/no-template-shadow': 'error',
		'vue/no-template-target-blank': 'error',
		'vue/one-component-per-file': 'error',
		'vue/prop-name-casing': 'error',
		'vue/require-explicit-emits': 'error',
		'vue/require-prop-types': 'error',
		'vue/singleline-html-element-content-newline': 'off',
		'vue/this-in-template': 'error',
		'vue/v-slot-style': 'error',
		...rule.inherit(require('./es.cjs').rules, {
			'vue/eqeqeq': 'eqeqeq',
			'vue/no-useless-concat': 'no-useless-concat',
			'vue/object-shorthand': 'object-shorthand'
		}),
		...require('./vue-format.cjs')
	}

};
