const rule = require('../util/rule.cjs');

/** @type {import('eslint').Linter.RulesRecord} */
module.exports = {
	'vue/html-indent': ['error', 'tab', {
		alignAttributesVertically: false
	}],
	...rule.inherit(require('./es-format.cjs'), {
		'vue/array-bracket-spacing': 'array-bracket-spacing',
		'vue/arrow-spacing': 'arrow-spacing',
		'vue/brace-style': 'brace-style',
		'vue/comma-dangle': '@typescript-eslint/comma-dangle',
		'vue/comma-spacing': '@typescript-eslint/comma-spacing',
		'vue/key-spacing': 'key-spacing',
		'vue/no-extra-parens': '@typescript-eslint/no-extra-parens',
		'vue/object-curly-spacing': '@typescript-eslint/object-curly-spacing',
		'vue/prefer-template': 'prefer-template',
		'vue/quote-props': 'quote-props',
		'vue/space-in-parens': 'space-in-parens'
	})
};
