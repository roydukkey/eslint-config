module.exports = {

	/**
	 * Applies the configuration to a set of rules from a source rule set.
	 *
	 * @param {import('eslint').Linter.RulesRecord} rules - The source rule set
	 * @param {Record<string, string>} names - The map of rules names to source rule names
	 * @returns {import('eslint').Linter.RulesRecord}
	 */
	inherit: (rules, names) => Object.fromEntries(Object.entries(names).map(([to, from]) => {
		const rule = rules[from];

		if (rule === undefined) {
			throw new Error(`Cannot inherit '${to}'. Missing configuration for '${from}'.`);
		}

		return [to, rule];
	})),

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
		[replacement]: rule
	})

};
