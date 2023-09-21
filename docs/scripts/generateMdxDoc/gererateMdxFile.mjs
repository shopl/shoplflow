import fs from 'fs';
import path from 'path';

import {extractJSDocs} from "./extractDoc.mjs";

import {getFiles} from "./findFiles.mjs";
import {convertToMDX} from "./convertToMdx.mjs";




export const generateDocs = async (startDir, includeExtensions, excludeExtensions, ignorePrefix, outputDirectory) => {
    const filteredFiles = getFiles(startDir, includeExtensions, excludeExtensions, ignorePrefix);

    let allJSDocs = [];

    filteredFiles.forEach((file) => {
        const jsDocs = extractJSDocs(file);
        return allJSDocs.push(jsDocs);
    });

    console.log(allJSDocs);

    if (!fs.existsSync(outputDirectory)) {
        fs.mkdirSync(outputDirectory, { recursive: true });
    }

    filteredFiles.forEach((file, index) => {
        const fileContent = fs.readFileSync(file, 'utf-8');
        if (fileContent.includes(ignorePrefix)) {
            console.log(`Ignoring ${file} due to ignore prefix.`);
            return;
        }

        const jsDocs = allJSDocs[index];  // 이전 단계에서 얻은 JSDocs
        const mdxContent = convertToMDX(jsDocs, file);  // 이전에 작성한 convertToMDX 함수를 사용
        const relativePath = path.relative(startDir, file);
        const outputFileName = path.basename(file, path.extname(file)) + '.mdx';
        const outputPathDir = path.join(outputDirectory, path.dirname(relativePath));

        if (!fs.existsSync(outputPathDir)) {
            fs.mkdirSync(outputPathDir, { recursive: true });
        }

        const outputPath = path.join(outputPathDir, outputFileName);
        fs.writeFileSync(outputPath, mdxContent);
        console.log(`MDX content for ${file} has been saved to ${outputPath}`);
    });
}
