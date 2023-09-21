import fs from 'fs';
import path from 'path';

export const getFiles = (dir, includeExtensions = [], excludeExtensions = [], ignorePrefix = '// ignore') => {
  const files = fs.readdirSync(dir);
  let filteredFiles = [];
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    const fileExtension = path.extname(file);

    const isExcludedExtension = excludeExtensions.includes(fileExtension);
    const isIgnoredFile = filePath.endsWith('.d.ts');
    const isIncludedExtension = includeExtensions.length === 0 || includeExtensions.includes(fileExtension);

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



