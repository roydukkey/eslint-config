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
		...rule.override('vue/component-tags-order', 'vue/block-order', ['error', {
			order: ['template', 'script[setup]', 'style', 'script:not([setup])']
		}]),
		'vue/component-definition-name-casing': 'error',
		'vue/component-name-in-template-casing': 'error',
		'vue/component-options-name-casing': 'error',
		'vue/custom-event-name-casing': ['error', 'kebab-case', {
				ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u']
		}],
		'vue/define-macros-order': ['error', {
			order: ['defineOptions', 'defineProps', 'defineSlots', 'defineEmits', 'defineModel'],
			defineExposeLast: true
		}],
		'vue/define-emits-declaration': ['error', 'type-literal'],
		'vue/dot-notation': 'error',
		'vue/enforce-style-attribute': ['error', {
			allow: ['module', 'plain']
		}],
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
		'vue/no-console': 'error',
		'vue/no-constant-condition': 'error',
		'vue/no-deprecated-model-definition': 'error',
		'vue/no-duplicate-attr-inheritance': 'error',
		'vue/no-empty-pattern': 'error',
		'vue/no-irregular-whitespace': 'error',
		'vue/no-loss-of-precision': 'error',
		'vue/no-root-v-if': 'error',
		'vue/no-sparse-arrays': 'error',
		'vue/no-static-inline-styles': 'error',
		'vue/no-template-shadow': 'error',
		'vue/no-template-target-blank': 'error',
		'vue/no-unused-emit-declarations': 'error',
		'vue/one-component-per-file': 'error',
		'vue/prop-name-casing': 'error',
		'vue/require-explicit-emits': 'error',
		'vue/require-macro-variable-name': 'error',
		'vue/require-prop-types': 'error',
		'vue/require-typed-object-prop': 'error',
		'vue/require-typed-ref': 'error',
		'vue/singleline-html-element-content-newline': 'off',
		'vue/this-in-template': 'error',
		'vue/v-bind-style': ['error', 'shorthand', {
			sameNameShorthand: 'always'
		}],
		'vue/v-if-else-key': 'error',
		'vue/v-slot-style': 'error',
		...rule.inherit(require('./es.cjs').rules, {
			'vue/eqeqeq': 'eqeqeq',
			'vue/no-useless-concat': 'no-useless-concat',
			'vue/object-shorthand': 'object-shorthand'
		}),
		...require('./vue-format.cjs')
	}

};
