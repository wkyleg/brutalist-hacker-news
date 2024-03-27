const fs = require("fs");
const path = require("path");

const themesDirectory = path.join(__dirname, "themes");

fs.readdir(themesDirectory, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === ".json") {
      const filePath = path.join(themesDirectory, file);
      const theme = JSON.parse(fs.readFileSync(filePath, "utf8"));

      const svgContent = generateSvg(theme);
      const outputFile = path.join(themesDirectory, `${theme.name}.svg`);

      fs.writeFileSync(outputFile, svgContent);
      console.log(`SVG preview generated for theme: ${theme.name}`);
    }
  });
});

function generateSvg(theme) {
  const colorKeys = Object.keys(theme).filter((key) =>
    key.startsWith("--color")
  );
  const svgWidth = 600;
  const svgHeight = colorKeys.length * 60 + 70; // Adjust height for additional styling
  const textMainColor = theme["--color-text-main"];
  const textLightColor = theme["--color-light"];

  let svgContent = `<svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">`;

  // Use theme colors for the background
  svgContent += `<rect x="0" y="0" width="${svgWidth}" height="${svgHeight}" fill="${theme["--color-secondary"]}" />`;

  // Display name rectangle with gradient and shadow
  svgContent += `<defs>
    <linearGradient id="displayNameGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${theme["--color-accent-1"]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${theme["--color-accent-2"]};stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
      <feOffset dx="0" dy="4" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.5"/>
      </feComponentTransfer>
      <feMerge> 
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>`;
  svgContent += `<rect x="10" y="20" width="${
    svgWidth - 20
  }" height="40" fill="url(#displayNameGradient)" filter="url(#shadow)" />`;
  svgContent += `<text x="20" y="50" fill="${textLightColor}" font-size="24" font-family="monospace">${theme.displayName}</text>`;

  colorKeys.forEach((key, index) => {
    const yOffset = index * 60 + 70; // Offset for the display name
    svgContent += `<rect x="10" y="${yOffset}" width="${
      svgWidth - 20
    }" height="50" fill="${theme[key]}" filter="url(#shadow)" />`;
    if (key === "--color-text-main" || key === "--color-dark") {
      svgContent += `<text x="20" y="${
        yOffset + 35
      }" fill="${textLightColor}" font-size="20" font-family="monospace">${key}: ${
        theme[key]
      }</text>`;
    } else {
      svgContent += `<text x="20" y="${
        yOffset + 35
      }" fill="${textMainColor}" font-size="20" font-family="monospace">${key}: ${
        theme[key]
      }</text>`;
    }
  });

  svgContent += "</svg>";
  return svgContent;
}
