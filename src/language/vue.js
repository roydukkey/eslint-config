import rule from '../util/rule.js';
import { parser } from 'typescript-eslint';

/** @type {import('typescript-eslint').InfiniteDepthConfigWithExtends} */
const config = [];
const vueEslint = await import('eslint-plugin-vue').then((result) => result.default).catch(() => undefined);

if (vueEslint) {
	const vueConfig = {
		files: ['**/*.vue'],
		extends: [
			vueEslint.configs['flat/essential'],
		],
		languageOptions: {
			parserOptions: {
				parser,
				extraFileExtensions: ['.vue'],
			},
		},
	};

	const strongRecommendedOnly = vueEslint.configs['flat/recommended'].find(({ name }) => name === 'vue/strongly-recommended/rules');
	const recommendedOnly = vueEslint.configs['flat/recommended'].find(({ name }) => name === 'vue/recommended/rules');

	if (!strongRecommendedOnly) {
		throw Error('`vue/strongly-recommended/rules` not found.');
	}

	if (!recommendedOnly) {
		throw Error('`vue/recommended/rules` not found.');
	}

	rule.transformWarningsToErrors(strongRecommendedOnly);
	rule.transformWarningsToErrors(recommendedOnly);

	vueConfig.extends.push([
		strongRecommendedOnly,
		recommendedOnly,
		{
			rules: {
				'vue/attributes-order': ['error', {
					order: [
						'DEFINITION',
						'GLOBAL',
						'CONDITIONALS',
						'LIST_RENDERING',
						'RENDER_MODIFIERS',
						'UNIQUE',
						'SLOT',
						'TWO_WAY_BINDING',
						'OTHER_DIRECTIVES',
						'OTHER_ATTR',
						'EVENTS',
						'CONTENT',
					],
					alphabetical: false,
				}],
				'vue/block-order': ['error', {
					order: [
						'template',
						'script[setup]',
						'style',
						'script:not([setup])',
					],
				}],
				'vue/component-name-in-template-casing': 'error',
				'vue/component-options-name-casing': 'error',
				'vue/custom-event-name-casing': ['error', 'kebab-case', {
					ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'],
				}],
				'vue/define-emits-declaration': ['error', 'type-literal'],
				'vue/define-macros-order': ['error', {
					order: ['defineOptions', 'defineProps', 'defineModel', 'defineSlots', 'defineEmits'],
					defineExposeLast: true,
				}],
				'vue/dot-notation': 'error',
				'vue/enforce-style-attribute': ['error', {
					allow: [
						'module',
						'plain',
					],
				}],
				'vue/eqeqeq': ['error', 'always'],
				'vue/html-self-closing': ['error', {
					html: {
						normal: 'never',
						void: 'always',
					},
				}],
				'vue/max-attributes-per-line': ['error', {
					singleline: Number.POSITIVE_INFINITY,
					multiline: 1,
				}],
				'vue/no-console': 'error',
				'vue/no-constant-condition': 'error',
				'vue/no-deprecated-delete-set': 'error',
				'vue/no-deprecated-model-definition': 'error',
				'vue/no-duplicate-attr-inheritance': 'error',
				'vue/no-empty-pattern': 'error',
				'vue/no-irregular-whitespace': 'error',
				'vue/no-loss-of-precision': 'error',
				'vue/no-ref-object-reactivity-loss': 'error',
				'vue/no-reserved-component-names': ['error', {
					disallowVue3BuiltInComponents: true,
				}],
				'vue/no-root-v-if': 'error',
				'vue/no-setup-props-reactivity-loss': 'error',
				'vue/no-sparse-arrays': 'error',
				'vue/no-static-inline-styles': 'error',
				'vue/no-template-target-blank': 'error',
				'vue/no-unused-emit-declarations': 'error',
				'vue/no-unused-refs': 'error',
				'vue/no-useless-concat': 'error',
				'vue/object-shorthand': 'error',
				'vue/prefer-template': 'error',
				'vue/prefer-use-template-ref': 'error',
				'vue/require-macro-variable-name': 'error',
				'vue/require-typed-object-prop': 'error',
				'vue/require-typed-ref': 'error',
				'vue/singleline-html-element-content-newline': 'off',
				'vue/slot-name-casing': ['error', 'kebab-case'],
				'vue/v-bind-style': ['error', 'shorthand', {
					sameNameShorthand: 'always',
				}],
				'vue/v-if-else-key': 'error',

				// Stylistic
				'vue/array-bracket-spacing': 'error',
				'vue/arrow-spacing': 'error',
				'vue/brace-style': ['error', 'stroustrup', {
					allowSingleLine: true,
				}],
				'vue/comma-dangle': ['error', 'always-multiline'],
				'vue/comma-spacing': 'error',
				'vue/html-indent': ['error', 'tab', {
					alignAttributesVertically: false,
				}],
				'vue/key-spacing': 'error',
				'vue/no-extra-parens': 'error',
				'vue/object-curly-spacing': 'error',
				'vue/quote-props': ['error', 'consistent-as-needed'],
				'vue/space-in-parens': 'error',
			},
		},
	]);

	config.push(vueConfig);
}

export default config;
