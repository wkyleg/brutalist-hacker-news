const fs = require("fs");
const path = require("path");

const themesDirectory = path.join(__dirname, "themes");
const outputFile = path.join(__dirname, "themes.md");

// Markdown header with instructions for contributing
const mdHeader = `# Themes Gallery

This document showcases the available themes for the application. Each theme has an image preview and the corresponding code snippet for download.

## Contributing a New Theme

To contribute a new theme, follow these steps:
1. Fork the repository.
2. Add your theme JSON and image preview to the \`themes\` directory.
3. Genearte the image preview for your theme with \`generateThemeImages.js\` script.
4. Run the \`generateThemesMD.js\` script to update the themes gallery.
T
## Available Themes
`;

// Start with the header
let mdContent = mdHeader;

// Read the themes directory
fs.readdir(themesDirectory, (err, files) => {
	if (err) {
		console.error("Could not list the directory.", err);
		return;
	}

	const themes = files.filter(file => path.extname(file) === ".json");

	themes.forEach(themeFile => {
		const filePath = path.join(themesDirectory, themeFile);
		const theme = JSON.parse(fs.readFileSync(filePath, "utf8"));
		const themeName = theme.name;
		const imageFileName = themeName + ".svg";
		const imageFilePath = path.relative(__dirname, path.join(themesDirectory, imageFileName));
		const jsonFileUrl = path.relative(__dirname, path.join(themesDirectory, themeFile));

		// Append theme information to markdown content
		mdContent += `### ${theme.displayName}\n`;
		mdContent += `![${themeName}](${imageFilePath})\n\n`;
		mdContent += `JSON File: [${themeName}.json](${jsonFileUrl})\n\n`;
		mdContent += "Download Code: \n";
		mdContent += "```txt\n";
		mdContent += `${themeName}\n`;
		mdContent += "```\n\n";
	});

	// Write to the output file
	fs.writeFileSync(outputFile, mdContent);
	console.log(`Markdown file ${outputFile} has been generated.`);
});
