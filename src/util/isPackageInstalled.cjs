/**
 * Determines whether an optional dependency is installed.
 *
 * @param {string} name - the name of the package for which to search.
 * @returns `true` when the packages is installed; otherwise, `false`
 */
module.exports = function isPackageInstalled (name) {
	try {
		require(name);
		return true;
	}
	catch (error) {
		return false;
	}
};
