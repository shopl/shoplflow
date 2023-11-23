import path from 'path';


export const convertToMDX = (jsDocs, fileName, tagsToInclude = ['param', 'return']) => {
    const baseName = path.basename(fileName, path.extname(fileName));
    const nextraComponents = 'import {Callout, Tab, Tabs, Pre, Tr, Th, Td, Code, Card, Cards, Table, FileTree, Mermaid, Steps, CopyToClipboard, Button } from "nextra/components";\n\n'
    let mdxContent = nextraComponents + `# ${baseName}\n\n`;
    // TODO table 생성 로직 추가해야함.
    jsDocs.forEach((jsDoc) => {
        const cleanedJsDoc = jsDoc.replace(/\/\*\*|\*\//g, '').trim();
        const lines = cleanedJsDoc.split('\n').map((line) => line.replace(/^\s*\*/, '').trimEnd());

        let hasTableContent = false;
        let generalText = '';

        lines.forEach((line) => {
            let isTagLine = false;

            tagsToInclude.forEach((tag) => {
                const tagRegex = new RegExp(`@${tag}\?`, 'i');
                const tagMatch = line.match(tagRegex);

                if (tagMatch) {
                    hasTableContent = true;
                    isTagLine = true;
                }
            });

            if (!isTagLine) {
                console.log(line)
                generalText += `${line.replace(/\s/, '')}\n`;  // 공백과 들여쓰기 유지
            }
        });
        mdxContent += `${generalText}\n`;
    });

    return mdxContent;
};


