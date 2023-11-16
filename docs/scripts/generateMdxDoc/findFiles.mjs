import fs from 'fs';
import path from 'path';

export const getFiles = (dir, includeExtensions = [], excludeExtensions = [], ignorePrefix = '// ignore') => {
  const files = fs.readdirSync(dir);
  let filteredFiles = [];
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    const fileName = path.basename(file);

    const isExcludedExtension = excludeExtensions.some(ext => fileName.endsWith(ext));

    const isIgnoredFile = filePath.endsWith('.d.ts');
    const isIncludedExtension = includeExtensions.length === 0 || includeExtensions.some(ext => fileName.endsWith(ext));

    if (stat.isDirectory()) {
      filteredFiles = filteredFiles.concat(getFiles(filePath, includeExtensions, excludeExtensions, ignorePrefix));
    } else if (isIncludedExtension && !isExcludedExtension && !isIgnoredFile) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      if (!fileContent.includes(ignorePrefix)) {
        filteredFiles.push(filePath);
      }
    }
  }
  return filteredFiles;
};
