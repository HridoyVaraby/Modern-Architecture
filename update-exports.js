// Script to update component exports for React.lazy compatibility
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'src', 'components', 'pages');

// Get all .tsx files in the pages directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

const pageFiles = getAllFiles(pagesDir);

// Process each file
pageFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath, '.tsx');
  
  // Convert kebab-case to capitalized component name
  const componentName = fileName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  
  // Check if the file uses named export
  if (content.includes(`export function ${componentName}`) || content.includes(`export const ${componentName}`)) {
    // Replace named export with default export
    content = content.replace(
      new RegExp(`export (function|const) ${componentName}`),
      `$1 ${componentName}`
    );
    
    // Add default export at the end if it doesn't exist
    if (!content.includes(`export default ${componentName}`)) {
      content += `\n\nexport default ${componentName};`;
    }
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  } else {
    console.log(`Skipping ${filePath} - already using default export or different pattern`);
  }
});

console.log('All page components updated for React.lazy compatibility');