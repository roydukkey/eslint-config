export default {
	/**
	 * Overrides a given rule with another.
	 *
	 * @param {string} name - the name of the rule to override
	 * @param {string} replacement - the name of the rule replacing the overridden rule
	 * @param {import('eslint').Linter.RuleEntry} rule - the new rule configuration
	 * @return {import('eslint').Linter.RulesRecord}
	 */
	override: (name, replacement, rule) => ({
		[name]: 'off',
		[replacement]: rule,
	}),

	/**
	 * Transforms all warnings to errors withing the config.
	 *
	 * @param {import('eslint').Linter.Config} config
	 *
	 * @return {import('eslint').Linter.Config}
	 */
	transformWarningsToErrors: (config) => {
		if (config.rules) {
			config.rules = Object.fromEntries(Object.entries(config.rules).map(([name, options]) => [
				name,
				options === 'warn' || (Array.isArray(options) && options[0] === 'warn')
					? 'error'
					: options,
			]));
		}

		return config;
	},
};
