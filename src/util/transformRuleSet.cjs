function transform (rules, transformer) {
	return Object.fromEntries(Object.entries(rules).map(transformer));
}

function transformWarningsToErrors (rules) {
	return transform(rules, ([key, value]) => [key, value === 'warn' ? 'error' : value]);
}

module.exports = {
	transformWarningsToErrors
};
