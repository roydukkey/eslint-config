/** @type {import('eslint').Linter.RulesRecord} */
module.exports = {
	'@typescript-eslint/member-ordering': [
		'error',
		{
			default: [
				// Index signature
				'signature',

				// Static
				'public-static-field',
				'protected-static-field',
				'private-static-field',

				'static-initialization',

				[
					'public-static-get',
					'protected-static-get',
					'private-static-get',

					'public-static-set',
					'protected-static-set',
					'private-static-set',

					'static-get',
					'static-set'
				],

				'public-static-method',
				'protected-static-method',
				'private-static-method',

				// Field
				'public-decorated-field',
				'protected-decorated-field',
				'private-decorated-field',
				'public-instance-field',
				'protected-instance-field',
				'private-instance-field',
				'public-abstract-field',
				'protected-abstract-field',
				'private-abstract-field',

				// Constructors
				'public-constructor',
				'protected-constructor',
				'private-constructor',

				// Getters / Setters
				[
					'public-decorated-get',
					'protected-decorated-get',
					'private-decorated-get',
					'public-decorated-set',
					'protected-decorated-set',
					'private-decorated-set',

					'public-instance-get',
					'protected-instance-get',
					'private-instance-get',
					'public-instance-set',
					'protected-instance-set',
					'private-instance-set',

					'public-abstract-get',
					'protected-abstract-get',
					'private-abstract-get',
					'public-abstract-set',
					'protected-abstract-set',
					'private-abstract-set',

					'public-get',
					'protected-get',
					'private-get',
					'public-set',
					'protected-set',
					'private-set',

					'instance-get',
					'abstract-get',
					'instance-set',
					'abstract-set',

					'decorated-get',
					'decorated-set',

					'get',
					'set'
				],

				// Methods
				'public-decorated-method',
				'protected-decorated-method',
				'private-decorated-method',
				'public-instance-method',
				'protected-instance-method',
				'private-instance-method',
				'public-abstract-method',
				'protected-abstract-method',
				'private-abstract-method'
			]
		}
	]
};
