import fs from 'fs';


export const extractJSDocs = (filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const jsDocRegex = /\/\*\*([\s\S]*?)\*\//gm;
    return content.match(jsDocRegex) || [];
};




