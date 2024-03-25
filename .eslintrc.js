module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: "eslint:recommended",
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
		{
			files: ["*.html"],
			parser: "@html-eslint/parser",
			extends: ["plugin:@html-eslint/recommended"],
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
	},
	plugins: ["eslint-plugin-html"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		// ifnore mixed tabs and spaces
		"no-mixed-spaces-and-tabs": ["off"]
	},
};
